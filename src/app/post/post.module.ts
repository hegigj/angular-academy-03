import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './posts/post/post.component';
import { PostService } from './post.service';
import { PostRoutingModule } from './post-routing.module';
import { PostResolver } from './post.resolver';

@NgModule({
  declarations: [
    PostsComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ],
  providers: [
    PostService,
    PostResolver
  ]
})
export class PostModule { }
