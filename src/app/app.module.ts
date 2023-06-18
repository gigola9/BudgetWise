import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { PrimengModule } from './shared/libraries/primeng.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { MessagesComponent } from './core/components/messages/messages.component';
import { MessageService } from 'primeng/api';
import { AuthModule } from './auth/auth.module';
import { SpinnerComponent } from './core/components/spinner/spinner.component';
import { HttpRequestInterceptor } from './core/interceprots/http-request.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    CoreModule,
    SharedModule,
    PrimengModule,
    HttpClientModule,
    // StoreModule.forRoot({}),
    // EffectsModule.forRoot([...effects]),
    EffectsModule.forRoot(),
    StoreModule.forRoot(reducers),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
