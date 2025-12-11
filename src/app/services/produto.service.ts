import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private apiUrl = 'http://localhost:3000/produtos';

  constructor(private http: HttpClient) {}

  //  Lista todos os produtos
  obterProdutos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  //  Busca produto por ID
  obterProdutoPorId(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  //  Cadastrar Produto
  cadastrarProduto(produto: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, produto);
  }

  //  Atualizar Produto
  atualizarProduto(id: number, produto: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, produto);
  }

  //  Deletar Produto
  deletarProduto(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

}


