import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/pages/home/home.component';
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import { DetailComponent } from './public/pages/detail/detail.component';
import { CreateAccountClientComponent} from "./authentication/pages/create-account-client/create-account-client.component";
import { LoginComponentComponent} from "./authentication/pages/login-component/login-component.component";
import { RestorePasswordComponent} from "./authentication/pages/restore-password/restore-password.component";
import { NewPasswordComponent} from "./authentication/pages/new-password/new-password.component";
import {
  CreateAccountRestaurantComponent
} from "./authentication/pages/create-account-restaurant/create-account-restaurant.component";
import {ClientDetailsComponent} from "./authentication/pages/client-details/client-details.component";
import {RestaurantDetailsComponent} from "./authentication/pages/restaurant-details/restaurant-details.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'register-client', component: CreateAccountClientComponent },
  { path: 'update-client', component: ClientDetailsComponent},
  { path: 'update-restaurant', component: RestaurantDetailsComponent},
  { path: 'register-restaurant', component: CreateAccountRestaurantComponent },
  { path: 'login', component: LoginComponentComponent },
  { path: 'restore', component: RestorePasswordComponent },
  { path: 'new-password', component: NewPasswordComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'restaurant-detail/:id/:name', component: DetailComponent},
  { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
