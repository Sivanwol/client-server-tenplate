import { combineReducers } from 'redux';
import { ApplicationState } from '@client/reducers/types';
import { Actions } from '@client/actions/types';
import dataItemReducer from '@client/reducers/dataItem.reducer';
export default combineReducers<ApplicationState, Actions>({
  dataItems: dataItemReducer
});
