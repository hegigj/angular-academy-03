import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private readonly url: string;

  constructor(private httpClient: HttpClient) {
    this.url = `${environment.baseUrl}userEmails`;
  }

  checkIfEmailExists(email: string): Observable<boolean> {
    return this.httpClient.get<any[]>(this.url).pipe(
      map(emails => {
        if (emails.length) {
          return emails.filter(e => e.email === email).length === 1
        }

        return false;
      })
    );
  }
}
