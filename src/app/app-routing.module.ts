import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {PricesComponent} from './pages/prices/prices.component';
import {ProtectecComponent} from './pages/protectec/protectec.component';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'precios', component: PricesComponent },
  { path: 'protegida', component: ProtectecComponent, canActivate: [AuthGuard] },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
