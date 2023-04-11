import { AfterContentChecked, AfterContentInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, AfterContentInit, AfterContentChecked {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    
  }

  ngAfterContentChecked(): void {
    
  }
}
