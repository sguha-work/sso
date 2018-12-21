import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeforeLoginHeaderComponent } from './components/before-login-header/before-login-header.component';
import { AfterLoginHeaderComponent } from './components/after-login-header/after-login-header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { BeforeLoginFooterComponent } from './components/before-login-footer/before-login-footer.component';
import { AfterLoginFooterComponent } from './components/after-login-footer/after-login-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BeforeLoginHeaderComponent,
    AfterLoginHeaderComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    BeforeLoginFooterComponent,
    AfterLoginFooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
