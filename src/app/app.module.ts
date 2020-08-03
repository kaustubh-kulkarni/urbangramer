import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FoodComponent } from './food/food.component';
import { RouterModule } from '@angular/router';
import { TravelComponent } from './travel/travel.component';
import { InnovationComponent } from './innovation/innovation.component';
import { SustainabiltyComponent } from './sustainabilty/sustainabilty.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    FoodComponent,
    TravelComponent,
    InnovationComponent,
    SustainabiltyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
