import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantPageComponent } from './idk/pages/restaurant-page/restaurant-page.component';
import { MatIconModule } from "@angular/material/icon";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    RestaurantPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardTitle
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
