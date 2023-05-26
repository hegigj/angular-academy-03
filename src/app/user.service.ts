import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UserModel } from './user.model';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly url: string;

  constructor(private httpClient: HttpClient) {
    this.url = `${environment.baseUrl}/users`;
  }

  getUsers(search: string): Observable<UserModel[]> {
    const params: HttpParams = new HttpParams().set(
      'q',
      search
    );

    return this.httpClient.get<UserModel[]>(
      this.url,
      { params }
    );
  } 

  createUser(
    newUser: Omit<UserModel, 'id' | 'active'>
  ): Observable<UserModel> {
    const user: Omit<UserModel, 'id'> = {
      ...newUser,
      active: false
    };

    return this.httpClient.post<UserModel>(this.url, user);
  }

  deleteUser(userId: number): Observable<unknown> {
    return this.httpClient.delete(`${this.url}/${userId}`).pipe(
      map(() => userId)
      // catchError(() => {
      //   alert('User not found!');
      //   return EMPTY;
      // })
    );
  }
}
