import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';

const APP_ROUTES: Routes = [
  // { path: 'cursos',
  //   loadChildren: './cursos/cursos.module#CursosModule',
  //   canActivate: [AuthGuard],
  //   canActivateChild: [ CursosGuard ]
  // },
  // { path: 'alunos',
  //   loadChildren: './alunos/alunos.module#AlunosModule',
  //   canActivate: [AuthGuard],
  //   canActivateChild: [ AlunosGuard ]
  // },
   { path: 'historico', component: HistoryComponent },
   { path: '', component: HomeComponent}
];


@NgModule({
   imports: [RouterModule.forRoot(APP_ROUTES)],

exports: [RouterModule]
})
export class AppRoutingModule{

}
