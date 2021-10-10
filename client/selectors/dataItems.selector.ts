import { createSelector } from 'reselect';
import { ApplicationState, DateItemState, FilteredOptions } from '@client/reducers/types';
import { DataItem } from '@client/modules';

export const selectDataItemsState = () => (state: ApplicationState) => state.dataItems;


export const selectDataItemsLoading = () =>
  createSelector<ApplicationState, DateItemState | undefined, boolean>(
    selectDataItemsState(),
    itemsState => (itemsState ? itemsState.loading : false)
  );

export const selectDataItemsError = () =>
  createSelector<ApplicationState, DateItemState | undefined, boolean>(
    selectDataItemsState(),
    itemsState => (itemsState ? itemsState.error : false)
  );

export const selectDataItemsData = () =>
  createSelector<ApplicationState, DateItemState | undefined, DataItem[]>(
    selectDataItemsState(),
    itemsState => {
      if (!itemsState) {
        return [];
      }

      const { data } = itemsState;

      return data;
    }
  );
