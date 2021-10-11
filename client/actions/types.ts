import { ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { ApplicationState } from '@client/reducers/types';
import {
  fetchDataItemsFailure,
  fetchDataItemsRequest,
  fetchDataItemsSuccess
} from '@client/actions/dataItem.action';
import {GraphQLClient} from "@client/utils/apollo";

export enum ActionTypes {
  FETCH_DATAITEMS_REQUEST = '@@dataItems/FETCH_DATAITEMS_REQUEST',
  FETCH_DATAITEMS_SUCCESS = '@@dataItems/FETCH_DATAITEMS_SUCCESS',
  FETCH_DATAITEMS_FAILURE = '@@dataItems/FETCH_DATAITEMS_FAILURE'
}

export type FetchDataItemsRequest = ReturnType<typeof fetchDataItemsRequest>;

export type FetchDataItemsSuccess = ReturnType<typeof fetchDataItemsSuccess>;

export type FetchDataItemsFailure = ReturnType<typeof fetchDataItemsFailure>;

export type DataItemsActions =
  | FetchDataItemsRequest
  | FetchDataItemsSuccess
  | FetchDataItemsFailure;

export type Actions = DataItemsActions;

export type ThunkReturn<R> = ThunkAction<R, ApplicationState, {client: GraphQLClient}, Actions>;

export type AsyncActionCreator<R> = ActionCreator<ThunkReturn<R>>;
