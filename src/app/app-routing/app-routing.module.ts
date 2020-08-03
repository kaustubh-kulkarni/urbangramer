import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodComponent } from '../food/food.component';
import { HomepageComponent} from '../homepage/homepage.component';
import { TravelComponent } from '../travel/travel.component';
import { InnovationComponent } from '../innovation/innovation.component';
import { SustainabiltyComponent } from '../sustainabilty/sustainabilty.component';


const routes: Routes = [
  {path: 'food', component: FoodComponent},
  {path: 'homepage', component: HomepageComponent},
  {path: 'travel', component: TravelComponent},
  {path: 'innovation', component: InnovationComponent},
  {path: 'sustainability', component: SustainabiltyComponent},
  {path:  '', redirectTo: 'homepage', pathMatch:  'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }