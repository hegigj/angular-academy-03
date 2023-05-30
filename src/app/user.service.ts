import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UserModel } from './user.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

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

    // const headers = new HttpHeaders().set('Authorization', '1234');

    return this.httpClient.get<UserModel[]>(
      this.url,
      { params }
      // { params, headers }
    );
  } 

  createUser(
    newUser: Omit<UserModel, 'id' | 'active'>
  ): Observable<UserModel> {
    // const headers = new HttpHeaders().set('Authorization', '1234');

    const user: Omit<UserModel, 'id'> = {
      ...newUser,
      active: false
    };

    // return this.httpClient.post<UserModel>(this.url, user, { headers });
    return this.httpClient.post<UserModel>(this.url, user);
  }

  deleteUser(userId: number): Observable<unknown> {
    // const headers = new HttpHeaders().set('Authorization', '1234');

    // return this.httpClient.delete(`${this.url}/${userId}`, { headers }).pipe(
    return this.httpClient.delete(`${this.url}/${userId}`).pipe(
      map(() => userId)
      // catchError(() => {
      //   alert('User not found!');
      //   return EMPTY;
      // })
    );
  }
}
