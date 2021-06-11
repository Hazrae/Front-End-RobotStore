import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbMenuModule, NbCardModule, NbToastrModule} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NavComponent } from './components/nav/nav.component';

import { HomeComponent } from './components/home/home.component';
import { RobotsComponent } from './components/robots/robots.component';
import { ListingComponent } from './components/robots/listing/listing.component';
import { RobotService } from './services/robot.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FourOFourComponent } from './components/four-o-four/four-o-four.component';
import { FindComponent } from './components/robots/find/find.component';
import { UserLoginComponent } from './components/user/user-login/user-login.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RobotsComponent,
    ListingComponent,
    FourOFourComponent,
    FindComponent,
    UserLoginComponent,

      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),    
    HttpClientModule,
    NbCardModule,
    FormsModule,
    ReactiveFormsModule,
    NbToastrModule.forRoot()
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  providers: [RobotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
