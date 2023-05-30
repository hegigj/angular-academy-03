import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, switchMap, takeUntil } from 'rxjs/operators';
import { UserModel } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void>;
  
  search: string;
  search$: Subject<string>;

  firstName: string;
  lastName: string;
  age: number;

  addMode: boolean;

  users: UserModel[];

  constructor(private userService: UserService) {
    this.destroy$ = new Subject<void>();

    this.search = '';
    this.search$ = new Subject<string>();

    this.firstName = '';
    this.lastName = '';
    this.age = 0;

    this.addMode = false;

    this.users = [];
  }

  ngOnInit(): void {
    this.getUsers();

    this.search$
      .pipe(
        takeUntil(this.destroy$),
        debounceTime(500),
        switchMap(search => {
          return this.userService.getUsers(search);
        })
      )
      .subscribe(users => this.users = users);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private getUsers(): void {
    this.userService.getUsers(this.search)
      .subscribe(users => this.users = users);
  }

  onSearch(search: string): void {
    this.search = search;
    this.search$.next(this.search);
  }

  onEdit(): void {}

  onClose(): void {
    this.addMode = false;
  }

  onAdd(): void {
    this.addMode = true;
  }

  onDelete(user: UserModel): void {
    const { firstName, lastName, id } = user;

    if (confirm(`Are you sure you want to delete ${firstName} ${lastName}?`)) {
      this.userService.deleteUser(id).subscribe((deletedUserId) => {
        const deletedUserIndex: number = this.users
          .findIndex(user => user.id === deletedUserId);

        if (deletedUserIndex !== -1) {
          this.users.splice(deletedUserIndex, 1);
        }
      });
    }
  }

  onSave(event: SubmitEvent): void {
    event.preventDefault();

    this.userService
      .createUser({
        firstName: this.firstName,
        lastName: this.lastName,
        age: this.age
      })
      .pipe(
        // 3: use switchMap to change observable 
        // switchMap(() => {
        //   return this.userService.getUsers(this.search);
        // })
      )
      .subscribe((user) => this.users.push(user)); // 4: optimal solution
      // .subscribe((users) => this.users = users); 3: with switchMap
      // .subscribe(this.getUsers.bind(this)); 2.1: method reference with bind
      // .subscribe(() => this.getUsers); // 2: without refreshing
      // .subscribe(); // 1: refresh page
  }
}
