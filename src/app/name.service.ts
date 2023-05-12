import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NameService {
  name?: string;

  constructor() {}

  getTitle(): Observable<string> {
    this.name = 'Name service';
    return of(this.name);
  }
}
