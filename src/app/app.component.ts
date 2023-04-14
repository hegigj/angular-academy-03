import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('h1') h1?: ElementRef<HTMLHeadingElement>;
  isRed: boolean;
  isOrange: boolean;
  isGreen: boolean;

  courses: { name: string, active: boolean }[] = [
    { name: 'FE', active: true },
    { name: 'Angular', active: true },
    { name: 'React', active: false },
    { name: 'Java', active: true },
    { name: 'Python', active: false },
    { name: 'Spring', active: true }
  ];

  constructor() {
    this.isRed = false;
    this.isOrange = false;
    this.isGreen = false;

    // setTimeout(() => {
    //   this.isRed = !this.isRed;
    //   setTimeout(() => {
    //     this.isOrange = !this.isOrange;
    //     setTimeout(() => {
    //       this.isGreen = !this.isGreen;
    //     }, 2000);
    //   }, 1500);
    // }, 1000);
  }

  ngAfterViewInit(): void {
    console.log(this.h1);
  }
  login(): void {
    this.isRed = !this.isRed;
    // const randomValues = [true, false, false];
    // let index = Math.floor(Math.random() * 2) + 1;
    // this.isRed = randomValues[index];
    // index = Math.floor(Math.random() * 2) + 1;
    // this.isOrange = randomValues[index];
    // index = Math.floor(Math.random() * 2) + 1;
    // this.isGreen = randomValues[index];
  }
}
