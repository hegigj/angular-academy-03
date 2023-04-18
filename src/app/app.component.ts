import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  now: Date;

  // Make the table array paginated
  // this will show 3 elements at a time
  // fix prev and next methods
  // add to offset and limit the array boudries
  // HINT: add two new properties startIndex and endIndex; limit will not change
  table: number[] = [1,2,3,4,5,6,7,8,9,10];

  offset: number = 0;
  limit: number = 3;

  constructor() {
    this.now = new Date();

    // setInterval(
    //   () => {
    //     let sec = this.now.getSeconds();
    //     this.now.setSeconds(++sec);
    //   },
    //   1000
    // );
  }

  prev(): void {
    this.offset -= this.limit;
    this.limit -= this.limit;
  }

  next(): void {
    this.offset += this.limit;
    this.limit += this.limit;
  }
}
