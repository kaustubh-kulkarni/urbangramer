import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodComponent } from '../sections/food/food.component';
import { HomepageComponent} from '../sections/homepage/homepage.component';
import { TravelComponent } from '../sections/travel/travel.component';
import { InnovationComponent } from '../sections/innovation/innovation.component';
import { SustainabiltyComponent } from '../sections/sustainabilty/sustainabilty.component';
import { UsageComponent } from '../sections/usage/usage.component';


const routes: Routes = [
  {path: 'food', component: FoodComponent},
  {path: 'homepage', component: HomepageComponent},
  {path: 'travel', component: TravelComponent},
  {path: 'innovation', component: InnovationComponent},
  {path: 'sustainability', component: SustainabiltyComponent},
  {path: 'usage', component: UsageComponent},
  {path:  '', redirectTo: 'homepage', pathMatch:  'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }