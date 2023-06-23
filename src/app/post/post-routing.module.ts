import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './posts/post/post.component';
import { PostResolver } from './post.resolver';

export const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
    children: [
      {
        path: ':POST_ID',
        component: PostComponent,
        resolve: {
          post: PostResolver
        }
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/posts',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PostRoutingModule { }
