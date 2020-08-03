import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './sections/homepage/homepage.component';
import { FoodComponent } from './sections/food/food.component';
import { RouterModule } from '@angular/router';
import { TravelComponent } from './sections/travel/travel.component';
import { InnovationComponent } from './sections/innovation/innovation.component';
import { SustainabiltyComponent } from './sections/sustainabilty/sustainabilty.component';
import { UsageComponent } from './sections/usage/usage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    FoodComponent,
    TravelComponent,
    InnovationComponent,
    SustainabiltyComponent,
    UsageComponent
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
