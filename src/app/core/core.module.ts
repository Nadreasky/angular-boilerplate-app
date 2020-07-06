import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../shared/shared.module';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenInterceptor } from './interceptors';
import {
  ApiService,
  AuthorizationService
} from './services';





@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true},
    ApiService,
    AuthorizationService
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
