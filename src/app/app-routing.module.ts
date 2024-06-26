import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/pages/home/home.component';
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import { DetailComponent } from './public/pages/detail/detail.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'detail', component: DetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
