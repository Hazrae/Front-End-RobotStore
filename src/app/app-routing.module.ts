import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FourOFourComponent } from './components/four-o-four/four-o-four.component';
import { HomeComponent } from './components/home/home.component';
import { ListingComponent } from './components/robots/listing/listing.component';
import { RobotsComponent } from './components/robots/robots.component';
import { RobotresolverService } from './resolver/robotresolver.service';



const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path:'robots', component: RobotsComponent, children:[
    {path:'listing', resolve:{robots : RobotresolverService}, component:ListingComponent}
  ]},  
  {path: '', component:HomeComponent},
  {path: 'notfound', component : FourOFourComponent},
  {path: "**", redirectTo: '/notfound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
