import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodComponent } from '../food/food.component';
import { HomepageComponent} from '../homepage/homepage.component';


const routes: Routes = [
  {path: 'food', component: FoodComponent},
  {path: 'homepage', component: HomepageComponent},
  {path:  '', redirectTo: 'homepage', pathMatch:  'full'} 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }