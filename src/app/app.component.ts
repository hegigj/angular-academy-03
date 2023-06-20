import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router) {}

  navigateToPost(): void {
    // this.router.navigateByUrl('/posts');
    this.router.navigate(['..', 'posts'], {
      // queryParams: { title: 'Post' }
    });
  }
}
