import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


const APP_ROUTES: Routes = [
  // { path: 'cursos',
  //   loadChildren: './cursos/cursos.module#CursosModule'
  // },
  // { path: 'alunos',
  //   loadChildren: './alunos/alunos.module#AlunosModule'
  // },
  // { path: 'login', component: LoginComponent },
   { path: '', component: HomeComponent }
];


@NgModule({
   imports: [RouterModule.forRoot(APP_ROUTES)],
   exports: [RouterModule]
})
export class AppRoutingModule{

}
