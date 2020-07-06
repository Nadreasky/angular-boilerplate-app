import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { LogoComponent } from './components/logo/logo.component';



@NgModule({
  declarations: [
    SpinnerComponent,
    LogoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SpinnerComponent,
    LogoComponent
  ]
})
export class SharedModule { }
