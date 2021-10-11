import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import {logger} from "redux-logger";
import { createGQLClient } from './apollo';

import {ApplicationState} from '@client/reducers/types';
import {Dispatch, Thunk} from '@client/types';
import {Actions} from '@client/actions/types';
import reducers from '@client/reducers';
const {composeWithDevTools} = require('redux-devtools-extension');

const store = (initialState: ApplicationState) => {
  const middlewares = [thunk.withExtraArgument({ client: createGQLClient() }) as Thunk];

  if (process.env.NODE_ENV === 'development') {
    const {logger} = require('redux-logger'); //eslint-disable-line
    middlewares.push(logger);
  }

  return createStore<ApplicationState, Actions, { dispatch: Dispatch }, {}>(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
};

export default store;
