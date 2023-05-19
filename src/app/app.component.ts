import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { UserModel } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  search: string;
  search$: Subject<string>;

  firstName: string;
  lastName: string;
  age: number;

  addMode: boolean;

  users: UserModel[];

  constructor(private userService: UserService) {
    this.search = '';
    this.search$ = new Subject<string>();

    this.firstName = '';
    this.lastName = '';
    this.age = 0;

    this.addMode = false;

    this.users = [];
  }

  ngOnInit(): void {
    this.userService.getUsers(this.search)
      .subscribe(users => this.users = users);
  }

  onSearch(search: string): void {
    this.search = search;
    this.search$.next(this.search);
  }

  onEdit(): void {}

  onAdd(): void {
    this.addMode = true;
  }

  onSave(event: SubmitEvent): void {
    event.preventDefault();
  }
}
