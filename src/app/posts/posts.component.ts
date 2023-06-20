import { Component, OnInit } from '@angular/core';
import { PostModel, PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: PostModel[];

  constructor(
    private postService: PostService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.posts = postService.getPosts();
  }

  ngOnInit(): void {
    // console.log(this.activatedRoute);
    this.activatedRoute.queryParamMap.subscribe(queryMap => {
      if (queryMap.has('title')) {
        const title: string = queryMap.get('title') as string;
        this.posts = this.postService.getPosts(title);
      } else {
        this.posts = this.postService.getPosts();
      }
    });
  }

  onSearch(event: Event): void {
    const { target } = event;
    const { value } = target as HTMLInputElement;

    this.router.navigate([], {
      queryParams: { title: value }
    });
  }

  back(): void {
    this.router.navigate(['..']);
  }

  navigateToPost(id: number): void {
    this.router.navigate([id], {
      relativeTo: this.activatedRoute
    });
  }
}
