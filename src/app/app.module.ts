import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CivicModule } from './modules/civic/civic.module';


import { AppComponent } from './app.component';
import { CivicSignupService } from './modules/civic/civic-signup.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CivicModule.forRoot()
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
