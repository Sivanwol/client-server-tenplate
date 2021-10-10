import {DataItemsListProps} from "@client/components/DataItemsList/types";
import DataItemsListPlaceholder from "@client/components/DataItemsList/DataItemsListPlaceholder";
import React, {FC, useCallback, useEffect} from 'react';
import {DataItem} from "@client/modules";
import {Col, Row} from "antd";
import DataItemView from "@client/components/DataItemsList/DataItemView";
import ProductsList from "@client/containers/DataItemsListByRedux";

const DataItemsList: FC<DataItemsListProps> = ({
                                                items,
                                                loading,
                                                error,
                                              }) => {

  const renderProduct = useCallback(
    (dataItem: DataItem) => (
      <Col span={4}>
        <DataItemView
          item={dataItem}
        />
      </Col>
    ),
    []
  );

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

  return (
    <Row>
      {items.map(renderProduct)}
    </Row>
  );
};

ProductsList.displayName = 'ProductsList';

export default ProductsList;
