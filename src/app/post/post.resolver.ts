import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { PostModel, PostService } from './post.service';

@Injectable()
export class PostResolver implements Resolve<PostModel | undefined> {
  constructor(
    private router: Router,
    private postService: PostService
  ) {}

  resolve(route: ActivatedRouteSnapshot): PostModel | undefined {
    if (route.paramMap.has('POST_ID')) {
      const postId: string = route.paramMap.get('POST_ID') as string;
      const post: PostModel = this.postService.getPost(+postId);

      if (post) return post;
    }

    this.router.navigateByUrl('/posts');
    return;
  }
}
