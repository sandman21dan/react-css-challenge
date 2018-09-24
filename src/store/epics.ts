import { combineEpics, ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { delay, mapTo } from 'rxjs/operators';
import { FETCH_INITAL_DATA, fetchInitialDataSuccess } from './actions';


const fetchInitialDataEpic = (action$: Observable<any>) => action$.pipe(
  ofType(FETCH_INITAL_DATA),
  delay(1000), // fake async fetch
  mapTo(fetchInitialDataSuccess({
    data: 'test',
    some: 'fake',
  })),
);

export default combineEpics(fetchInitialDataEpic);