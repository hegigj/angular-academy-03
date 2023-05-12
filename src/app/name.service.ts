import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NameService {
  name?: string;
  name$: Subject<string>;
  names$: BehaviorSubject<string[]>;

  constructor() {
    this.name$ = new Subject<string>();
    this.names$ = new BehaviorSubject<string[]>([]);
    setTimeout(
      () => {
        this.name = 'Name service';
        this.name$.next(this.name);
        this.names$.next(['Anxhela', 'Sara']);
      },
      3000
    );
    const namesBuffer = ['Rei', 'Xhoni', 'Brisildi'];
    let intervale: any;
    intervale = setInterval(
      () => {
        this.name = 'Name service ' + new Date().getSeconds();
        this.name$.next(this.name);
        this.names$.next([...this.names$.getValue(), namesBuffer.pop() as string]);
      },
      4000
    );
    setTimeout(
      () => {
        clearInterval(intervale);
        this.name$.complete();
        this.names$.complete();
      },
      10000
    );
  }

  getTitle(): Observable<string> {
    // this.name = 'Name service';
    // return of(this.name);
    return this.name$.asObservable();
  }
}
