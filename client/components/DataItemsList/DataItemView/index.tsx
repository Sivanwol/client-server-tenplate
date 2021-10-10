import React, {FC} from 'react';
import {Card} from "antd";
import {DataItemProps} from "@client/components/DataItemsList/DataItemView/types";

const DataItemView: FC<DataItemProps> = ({
                                           item
                                         }) => {

  const {name, title, id} = item;
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
