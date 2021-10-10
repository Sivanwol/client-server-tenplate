
import { Reducer } from 'redux';
import { ActionTypes, ProductsActions } from '@client/actions/types';
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

const dataItemReducer: Reducer<DateItemState, ProductsActions> = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_PRODUCTS_REQUEST: {
      return {
        ...state,
        loading: true
      };
    }

    case ActionTypes.FETCH_PRODUCTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload.data
      };
    }

    case ActionTypes.FETCH_PRODUCTS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true
      };
    }

    case ActionTypes.UPDATE_PRODUCT_SIZES: {
      return {
        ...state,
        sizes: action.payload.sizes
      };
    }

    case ActionTypes.FILTER_PRODUCTS: {
      return {
        ...state,
        filteredOptions: {
          ...state.filteredOptions,
          ...action.payload.filteredOptions
        }
      };
    }

    default: {
      return state;
    }
  }
};

export default dataItemReducer;
