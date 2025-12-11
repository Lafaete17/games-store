import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  id: any = null;

  produto: any = {
    produto: '',
    descricao: '',
    preco: null,
    foto: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private produtoService: ProdutoService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id) {
      this.produtoService.obterProdutoPorId(this.id).subscribe((data) => {
        this.produto = data;
      });
    }
  }

  salvarProduto() {
    if (this.id) {
      this.produtoService.atualizarProduto(this.id, this.produto).subscribe(() => {
        alert('Produto atualizado com sucesso!');
        this.router.navigate(['/painel-principal']);
      });
    } else {
      this.produtoService.cadastrarProduto(this.produto).subscribe(() => {
        alert('Produto cadastrado com sucesso!');
        this.router.navigate(['/painel-principal']);
      });
    }
  }
}

