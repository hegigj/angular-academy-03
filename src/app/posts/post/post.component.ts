import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  title?: string;

  constructor(
    private router: Router,
    private postService: PostService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot);
    // const postId: string = this.activatedRoute.snapshot.params['POST_ID'];
    // this.title = this.postService.getPost(+postId).title;

    // this.activatedRoute.params.subscribe(params => {
    //   if (params.hasOwnProperty('POST_ID') && params['POST_ID']) {
    //     const postId: string = params['POST_ID'];
    //     this.title = this.postService.getPost(+postId).title;
    //   }
    // });
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (paramMap.has('POST_ID')) {
        const postId: string = paramMap.get('POST_ID') as string;
        this.title = this.postService.getPost(+postId).title;
      }
    });
  }

  back(): void {
    this.router.navigate(['..'], {
      relativeTo: this.activatedRoute
    });
  }
}
