import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-painel-principal',
  templateUrl: './painel-principal.component.html',
  styleUrls: ['./painel-principal.component.scss']
})
export class PainelPrincipalComponent implements OnInit {

  produtos: any[] = [];

  constructor(
    private produtoService: ProdutoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.produtoService.obterProdutos().subscribe({
      next: (dados) => { this.produtos = dados; },
      error: (err) => { console.error('Erro ao carregar produtos', err); }
    });
  }

  deletar(id: number): void {
    Swal.fire({
      title: 'Tem certeza?',
      text: "O produto será removido do sistema!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sim, excluir!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.produtoService.deletarProduto(id).subscribe({
          next: () => {

            Swal.fire({
              icon: 'success',
              title: 'Excluído!',
              text: 'O produto foi removido com sucesso.',
              timer: 1600,
              showConfirmButton: false
            });
            // Atualiza a lista localmente sem recarregar toda a lista do servidor
            this.produtos = this.produtos.filter(p => p.id !== id);
          },
          error: (err) => {
            console.error('Erro ao excluir produto', err);
            Swal.fire({
              icon: 'error',
              title: 'Erro',
              text: 'Não foi possível excluir o produto.'
            });
          }
        });
      }
    });
  }

  editar(id: number): void {
    this.router.navigate(['/cadastro-produto', id]);
  }
}


