import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListingComponent } from './components/robots/listing/listing.component';
import { RobotsComponent } from './components/robots/robots.component';



const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path:'robots', component: RobotsComponent, children:[
    {path:'listing', component:ListingComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
