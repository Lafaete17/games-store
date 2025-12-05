import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { PainelPrincipalComponent } from './painel-principal/painel-principal.component';

const routes: Routes = [
  { path: '', component: InicioComponent },        // Página inicial
  { path: 'login', component: LoginComponent },    // Login
  { path: 'produtos', component: ProdutosComponent }, // Lista de produtos
  { path: 'painel-principal', component: PainelPrincipalComponent }, // 🔥 Painel

  { path: '**', redirectTo: '' }  // Rota inválida → volta ao início
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
