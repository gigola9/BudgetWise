import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PrimengModule } from '../shared/libraries/primeng.module';

import * as fromContainers from './containers';
import * as fromComponents from './components';

import { MenuService } from './services/menu.service';
import { BreadcrumbService } from './services/breadcrumb.service';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HttpRequestInterceptor } from './interceprots/http-request.interceptor';
import { LoadingService } from './services/loading.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    ...fromContainers.containers,
    ...fromComponents.components,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    BrowserAnimationsModule
  ],
  providers: [
    MenuService,
    BreadcrumbService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
    LoadingService
  ]
})
export class CoreModule { }
