import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CivicModule} from './modules/civic/civic.module'

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CivicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
