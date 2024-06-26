import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './public/pages/home/home.component';
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatCardModule } from '@angular/material/card';
import { RestaurantCardComponent } from './restaurant/components/restaurant-card/restaurant-card.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { ListRestaurantCardComponent } from './restaurant/components/list-restaurant-card/list-restaurant-card.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DetailComponent } from './public/pages/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    RestaurantCardComponent,
    ListRestaurantCardComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatToolbarModule,
    FormsModule,
    MatCheckboxModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
