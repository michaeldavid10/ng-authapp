import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {PricesComponent} from './pages/prices/prices.component';
import {ProtectecComponent} from './pages/protectec/protectec.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'precios', component: PricesComponent },
  { path: 'protegida', component: ProtectecComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
