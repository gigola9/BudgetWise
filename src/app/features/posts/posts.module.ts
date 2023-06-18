import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { effects } from './store';

import { PostsRoutingModule } from './posts-routing.module';
import { PostComponent } from './post/post.component';
import { PostsService } from './services/posts.service';
import { EffectsModule } from '@ngrx/effects';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import * as fromPosts from './store/reducers';
import { HttpRequestInterceptor } from 'src/app/core/interceprots/http-request.interceptor';


@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule,
    // StoreModule.forFeature(fromPosts.postsdFeatureKey, fromPosts.reducer)
    EffectsModule.forFeature([...effects])
  ],
  providers: [
    PostsService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
  ]
})
export class PostsModule { }
