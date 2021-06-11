import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FourOFourComponent } from './components/four-o-four/four-o-four.component';
import { HomeComponent } from './components/home/home.component';
import { FindComponent } from './components/robots/find/find.component';
import { ListingComponent } from './components/robots/listing/listing.component';
import { RobotsComponent } from './components/robots/robots.component';
import { UserLoginComponent } from './components/user/user-login/user-login.component';
import { RobotresolverService } from './resolver/robotresolver.service';
import { AuthGuardService } from './services/auth-guard.service';



const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path:'user-login', component:UserLoginComponent},
  {path:'robots', component: RobotsComponent, children:[
    {path:'listing', resolve:{robots : RobotresolverService}, component:ListingComponent},
    {path:'find', canActivate:[AuthGuardService], component:FindComponent}
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
