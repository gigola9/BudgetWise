import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import { CommentComponent } from './comment/comment.component';
import { PostsService } from '../posts/services/posts.service';
import { CommentsService } from './services/comments.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './store';
import { HttpRequestInterceptor } from 'src/app/core/interceprots/http-request.interceptor';
import { PrimengModule } from 'src/app/shared/libraries/primeng.module';


@NgModule({
  declarations: [
    CommentComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    CommentsRoutingModule,
    HttpClientModule,
    EffectsModule.forFeature([...effects]),
  ],
  providers: [
    CommentsService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
  ]
})
export class CommentsModule { }
