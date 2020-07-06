import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { environment } from 'src/environments/environment';

import { SharedModule } from '../shared/shared.module';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenInterceptor } from './interceptors';
import { reducers, effects } from './store';
import {
  ApiService,
  AuthorizationService
} from './services';


// logger store 
// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    console.log('state', state);
    console.log('action', action);
 
    return reducer(state, action);
  };
}
 
export const metaReducers: MetaReducer<any>[] = !environment.production ? [debug] : [];


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
    StoreModule.forRoot(reducers, ({ metaReducers })),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule.forRoot(),
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
