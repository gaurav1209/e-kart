import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';

import { AuthGuardService } from './auth-guard.service';

import { AdminModule } from './admin/admin.module';

const routes: Routes = [
    { path: '', component: ProductsComponent},
    { path: 'login', component: LoginComponent},
    { path: 'products', component: ProductsComponent},
    { path: 'shopping-cart', component: ShoppingCartComponent},
    { path: 'check-out', component: CheckoutComponent, canActivate: [AuthGuardService]},
    { path: 'order-success/:id', component: OrderSuccessComponent, canActivate: [AuthGuardService]},
    { path: 'my-orders', component: MyOrdersComponent, canActivate: [AuthGuardService]},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes),
		AdminModule
	],	
  	exports: [
		RouterModule,
		AdminModule
	]
})
export class AppRoutingModule { }