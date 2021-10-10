import React, {FC} from 'react';
import {DataItemProps} from "@client/components/DataItemsList/DataItemView/types";
import {Card} from "antd";

const DataItemView: FC<DataItemProps> = ({
                                           item
                                         }) => {

  const {name, id} = item;
  const title = `Data Item ${id}`;
  return (
    <div className="site-card-border-less-wrapper">
      <Card title={title} bordered={false} style={{ width: 300 }}>
        <p>{name}</p>
      </Card>
    </div>
  );
};

DataItemView.displayName = 'DataItemView';

export default DataItemView;
