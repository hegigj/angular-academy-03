import { Component, OnInit } from '@angular/core';
import { NameService } from '../name.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  // name?: string;

  constructor(public nameService: NameService) {
    // nameService.getTitle().subscribe(
    //   (name) => {
    //     console.log(name);
    //     this.name = name;
    //   },
    //   (e) => console.error(e),
    //   () => console.log('complete')
    // );
  }

  ngOnInit(): void {
  }

}
