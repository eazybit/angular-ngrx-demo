/**
 * Created by Yu Zhang on 4/13/17.
 * Description:
 *
 * ------ maintenance history ------
 */
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';

import { START, END } from './actions';

@Injectable()
export class RootEffects {
  constructor(private _actions$: Actions) {}

  @Effect()
  pingEffect$ = this._actions$.ofType(START)
    .delay(3000)
    .map(res => ({
      type: END
    }));
}
