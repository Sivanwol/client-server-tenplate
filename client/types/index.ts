
import { Store } from 'redux';
import { ThunkMiddleware, ThunkAction } from 'redux-thunk';
import { ApplicationState } from '@client/reducers/types';
import { Actions } from '@client/actions/types';

export interface NavLink {
  label: string;
  path: string;
}

export interface AppStore extends Store<ApplicationState, Actions> {}

export interface Thunk extends ThunkMiddleware<ApplicationState, Actions> {}

export interface ThunkDispatch<S, E, A extends Actions> {
  // @ts-ignore
  <R>(asyncAction: ThunkAction<R, S, E, A>): R;
  <T extends A>(action: T): T;
}

export type Dispatch = ThunkDispatch<ApplicationState, {}, Actions>;
