import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';

export const routes: Routes = [
  {
    path: '',
    component: PostsComponent
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
