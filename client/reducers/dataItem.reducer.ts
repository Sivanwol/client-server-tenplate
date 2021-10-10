
import { Reducer } from 'redux';
import { ActionTypes, DataItemsActions } from '@client/actions/types';
import {DateItemState} from "@client/reducers/types";

export const initialState = {
  data: [],
  loading: false,
  error: false,
  sizes: [],
  filteredOptions: {
    size: ''
  }
};

const dataItemReducer: Reducer<DateItemState, DataItemsActions> = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_DATAITEMS_REQUEST: {
      return {
        ...state,
        loading: true
      };
    }

    case ActionTypes.FETCH_DATAITEMS_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload.data
      };
    }

    case ActionTypes.FETCH_DATAITEMS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true
      };
    }

    default: {
      return state;
    }
  }
};

export default dataItemReducer;
