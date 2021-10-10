import { action } from 'typesafe-actions';
import { gql, useQuery } from '@apollo/client';
import { ActionTypes, AsyncActionCreator } from '@client/actions/types';
import { FilteredOptions, ApplicationState } from '@client/reducers/types';
import { DataItem } from '@client/modules';
import {DataItem_QUERY} from "@client/graphql/dataItem.queries";

export const fetchDataItemsRequest = () => action(ActionTypes.FETCH_DATAITEMS_REQUEST);

export const fetchDataItemsSuccess = (data: DataItem[]) =>
  action(ActionTypes.FETCH_DATAITEMS_SUCCESS, { data });

export const fetchDataItemsFailure = () => action(ActionTypes.FETCH_DATAITEMS_FAILURE);

export const fetchDataItems: AsyncActionCreator<Promise<void>> = () => async dispatch => {
  dispatch(fetchDataItemsRequest()) ;
  try {
    const { loading, error, data } = await useQuery(DataItem_QUERY,{
      variables: { },
    });
    if (!loading&&!error) {
      // Add products to store
      dispatch(fetchDataItemsSuccess(data.map(item => item as DataItem)));
    } else {
      if (error)
        dispatch(fetchDataItemsFailure());
    }
  } catch {
    dispatch(fetchDataItemsFailure());
  }
};

export const shouldFetchDataItems = (state: ApplicationState): boolean => {
  return (state.dataItems.data.length !== 0 || state.dataItems.loading);
};

export const fetchDataItemsIfNeeded: AsyncActionCreator<Promise<void>> = () => async (
  dispatch,
  getState
) => {
  const state = getState();

  // Only fetch products when data is empty or not being fetched
  if (shouldFetchDataItems(state)) {
    await dispatch(fetchDataItems());
  }
};