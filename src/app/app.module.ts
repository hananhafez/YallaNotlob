import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { MaterialModule } from '@angular/material';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
//import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
//import { FriendsComponent } from './friends/friends.component';
//import { GroupsComponent } from './groups/groups.component';
import { OrdersComponent } from './orders/orders.component';
import { AddorderComponent } from './addorder/addorder.component';
import { VieworderComponent } from './vieworder/vieworder.component';
import { HeaderComponent } from './header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    //SignupComponent,
    LoginComponent,
    //FriendsComponent,
    //GroupsComponent,
    OrdersComponent,
    AddorderComponent,
    VieworderComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    SignupComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //MaterialModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
