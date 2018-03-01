import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CivicComponent } from './civic.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CivicComponent],
  exports:[
    CivicComponent
  ]
})
export class CivicModule { }
