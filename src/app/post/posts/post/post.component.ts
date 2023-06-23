import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  title?: string;

  constructor(
    private router: Router,
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
    this.activatedRoute.data.subscribe((data) => {
      // const post = data.post;
      const { post } = data as any;
      this.title = post.title;
    });
  }

  back(): void {
    this.router.navigate(['..'], {
      relativeTo: this.activatedRoute
    });
  }
}
