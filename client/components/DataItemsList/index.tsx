import React, {FC, useCallback} from 'react';
import {Col, Row} from "antd";
import {DataItemsListProps} from "@client/components/DataItemsList/types";
import DataItemsListPlaceholder from "@client/components/DataItemsList/DataItemsListPlaceholder";
import {DataItem} from "@client/modules";
import DataItemView from "@client/components/DataItemsList/DataItemView";

const DataItemsList: FC<DataItemsListProps> = ({
                                                 items,
                                                 loading,
                                                 error,
                                               }) => {

  const renderDataItem = useCallback(
    (dataItem: DataItem) => (
      <Col span={4}>
        <DataItemView
          item={dataItem}
        />
      </Col>
    ),
    []
  );

  console.log(items,
    loading,
    error)
  // Show loading placeholder when fetching products
  if (loading) {
    return <DataItemsListPlaceholder message="Loading Data ..."/>;
  }

  // Show error message when fetching product is failure
  if (error) {
    return (
      <DataItemsListPlaceholder message="Opp...something wrong happened! Please try again."/>
    );
  }
  // Show loading placeholder when fetching products
  if (items && items.length === 0) {
    return <DataItemsListPlaceholder message="No Data"/>;
  }

  return (
    <Row>
      {(items) ? items.map(renderDataItem): ''}
    </Row>
  );
};

DataItemsList.displayName = 'DataItemsList';

export default DataItemsList;
