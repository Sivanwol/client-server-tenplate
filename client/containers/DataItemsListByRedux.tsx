import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import {
  selectDataItemsLoading,
  selectDataItemsData,
  selectDataItemsError,
} from '@client/selectors/dataItems.selector';
import DataItemsList from '@client/components/DataItemsList';

export default connect(
  createSelector(
    selectDataItemsLoading(),
    selectDataItemsData(),
    selectDataItemsError(),
    ( loading,products, error) => ({
      loading,
      products,
      error
    })
  ),
)(DataItemsList);
