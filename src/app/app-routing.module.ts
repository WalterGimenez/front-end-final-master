import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { LoginComponent } from './component/login/login.component';
import { PaginaErrorComponent } from './component/pagina-error/pagina-error.component';


const routes: Routes = [
  {path: '', component: HeaderComponent, pathMatch: 'full'},
  {path:'login', component: LoginComponent, pathMatch: 'full'},
  {path:'**', component: PaginaErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
