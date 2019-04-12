import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { HistoryComponent } from './history/history.component';


const APP_ROUTES: Routes = [
  { path: 'hitorico', component: HistoryComponent },
  { path: '', component: HomeComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
