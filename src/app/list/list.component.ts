import { Component, OnDestroy, OnInit } from '@angular/core';
import { NameService } from '../name.service';
import { Observable, Subject, combineLatest, forkJoin, of, race } from 'rxjs';
import { bufferCount, debounceTime, filter, map, mapTo, switchMap, take, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
  // name?: string;
  private listOfItems: string[];
  // list: Observable<string[]>;
  list: string[];

  search: string;
  search$: Subject<string>;

  destroy$: Subject<void>;

  constructor(public nameService: NameService) {
    this.listOfItems = ['Rei', 'Xhoni', 'Brian', 'Brisild', 'Anxhela', 'Sara', 'Sonila', 'Oltjon'];
    // this.list = of(this.listOfItems);
    this.list = [ ...this.listOfItems ];

    this.search = '';
    this.search$ = new Subject();

    this.destroy$ = new Subject<void>();
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
    // this.list = this.search$.asObservable()
    //   .pipe(
    //     tap(value => console.log('Before Debounce: ', value)),
    //     debounceTime(700),
    //     take(30),
    //     filter((value) => !value.match(/;|:|"|'/g)),
    //     map((value) => value.toLocaleLowerCase()),
    //     tap(value => console.log('After Map: ', value)),
    //     switchMap((value) => {
    //       return of(
    //         this.listOfItems.filter(
    //           item => item.toLocaleLowerCase().includes(value)
    //         )
    //       );
    //     }),
    //     tap(list => console.log('After SwitchMap: ', list))
    //   );
    this.search$.asObservable()
    .pipe(
      // take(6),
      takeUntil(this.destroy$),
      debounceTime(700),
      take(30),
      filter((value) => !value.match(/;|:|"|'/g)),
      map((value) => value.toLocaleLowerCase()),
      switchMap((value) => {
        return of(
          this.listOfItems.filter(
            item => item.toLocaleLowerCase().includes(value)
          )
        );
      }),
      tap(filteredList => this.list = filteredList)
    )
    .subscribe();
    // Add subscribe after removing switchMap
    // .subscribe(value => {
    //   if (value) {
    //     this.list = this.listOfItems.filter(
    //       item => item.toLocaleLowerCase().includes(value)
    //     );
    //   } else {
    //     this.list = [...this.listOfItems];
    //   }

    //   console.log(this.list);
    // });

    // race([this.nameService.names$, this.search$])
    //   .pipe(
    //     tap(value => console.log(value))
    //   )
    //   .subscribe();

    // combineLatest([this.nameService.names$, this.search$])
    //   .pipe(
    //     tap(value => console.log(value))
    //   )
    //   .subscribe();

    forkJoin([this.nameService.names$, this.search$])
      .pipe(
        tap(value => console.log(value))
      )
      .subscribe();

    this.search$.asObservable()
      .pipe(
        bufferCount(3),
        map((bufferArray) => {
          bufferArray.pop();
          return bufferArray;
        }),
        // map(() => 'Done!'),
        mapTo('Done!'),
        tap(bufferArray => console.log(bufferArray))
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSearch(value: string): void {
    this.search = value;
    this.search$.next(this.search);
  }
}
