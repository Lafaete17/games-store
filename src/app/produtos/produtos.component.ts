import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']

})
export class ProdutosComponent implements OnInit {

  produtos: any[] = [];

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.produtoService.obterProdutos().subscribe((dados) => {
      this.produtos = dados;
      console.log("Produtos recebidos: ", this.produtos);
    });
  }
}

