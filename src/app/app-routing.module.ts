import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/pages/home/home.component';
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import { DetailComponent } from './public/pages/detail/detail.component';
import { CreateAccountComponent} from "./authentication/pages/create-account-client/create-account.component";
import { LoginComponentComponent} from "./authentication/pages/login-component/login-component.component";
import { RestorePasswordComponent} from "./authentication/pages/restore-password/restore-password.component";
import { NewPasswordComponent} from "./authentication/pages/new-password/new-password.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'create', component: CreateAccountComponent },
  { path: 'login', component: LoginComponentComponent },
  { path: 'restore', component: RestorePasswordComponent },
  { path: 'new-password', component: NewPasswordComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
