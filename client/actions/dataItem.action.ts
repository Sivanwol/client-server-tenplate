import {action} from 'typesafe-actions';
import {ActionTypes, AsyncActionCreator} from '@client/actions/types';
import {ApplicationState} from '@client/reducers/types';
import {DataItem} from '@client/modules';
import {DataItem_QUERY} from "@client/graphql/dataItem.queries";

export const fetchDataItemsRequest = () => action(ActionTypes.FETCH_DATAITEMS_REQUEST);

export const fetchDataItemsSuccess = (data: DataItem[]) =>
  action(ActionTypes.FETCH_DATAITEMS_SUCCESS, {data});

export const fetchDataItemsFailure = () => action(ActionTypes.FETCH_DATAITEMS_FAILURE);

export const fetchDataItems: AsyncActionCreator<Promise<void>> = () => async (dispatch, _, {client}) => {
  dispatch(fetchDataItemsRequest());
  try {
    const res = await client.query(DataItem_QUERY);
    if (!res.dataItems) {
      dispatch(fetchDataItemsFailure());
    } else {
      const data = res.dataItems;
      console.log("Data Fetching", res, DataItem_QUERY);
      dispatch(fetchDataItemsSuccess(data.map(item => item as DataItem)));
    }
  } catch (e) {
    console.error("Fetching Failed", e)
    dispatch(fetchDataItemsFailure());
  }
};

export const shouldFetchDataItems = (state: ApplicationState): boolean => {
  console.log("Do we need fetching of data", (state.dataItems.data.length !== 0 || state.dataItems.loading), state.dataItems.data.length !== 0, state.dataItems.loading)
  return (state.dataItems.data.length === 0 && !state.dataItems.loading);
};

export const fetchDataItemsIfNeeded: AsyncActionCreator<Promise<void>> = () => async (
  dispatch,
  getState
) => {
  const state = getState();
  console.log("Checking if need fetching data", state)
  // Only fetch products when data is empty or not being fetched
  if (shouldFetchDataItems(state)) {
    console.log("fetching data")
    await dispatch(fetchDataItems());
  }
};
