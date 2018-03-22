import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CivicComponent } from './civic.component';
import {CivicSignupService} from './civic-signup.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [CivicSignupService],
  declarations: [CivicComponent],
  exports:[
    CivicComponent,
    CivicSignupService
  ]
})
export class CivicModule { }
