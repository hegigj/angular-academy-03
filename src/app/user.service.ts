import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserModel } from './user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users$: Subject<UserModel[]>;

  constructor(private httpClient: HttpClient) {
    this.users$ = new Subject<UserModel[]>();
  }

  getUsers(): Observable<UserModel[]> {
    return this.users$.asObservable();
  }

  private _getUsers(): void {
    this.httpClient.get<UserModel[]>(`${environment.baseUrl}/users`)
      .subscribe(users => this.users$.next(users));
  }

  createUser(user: Omit<UserModel, 'id'>): Observable<UserModel> {
    return this.httpClient.post<UserModel>(
      `${environment.baseUrl}/users`,
      user
    )
      .pipe(tap(() => this._getUsers()));
  }
}
