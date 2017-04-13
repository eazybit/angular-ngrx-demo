import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { INCREMENT, DECREMENT, CHANGE, RESET, START, END } from './actions';
import { IAppState } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Yu\'s ngRx demo';
  private _counter$: Observable<number>;
  private _title$: Observable<string>;
  private _ping$: Observable<boolean>;

  constructor(private _store: Store<IAppState>) {
    this._counter$ = this._store.select<number>('counter');
    this._title$ = this._store.select<string>('title');
    this._ping$ = this._store.select<boolean>('ping');
  }

  increment() {
    this._store.dispatch({ type: INCREMENT });
  }

  decrement() {
    this._store.dispatch({ type: DECREMENT });
  }

  changeTitle() {
    this._store.dispatch({ type: CHANGE });
  }

  resetTitle() {
    this._store.dispatch({ type: RESET });
  }

  startPinging() {
    this._store.dispatch({ type: START } );
  }
}
