import React, {FC} from 'react';
import {Row, Col, Card} from 'antd';


export interface DataItemsListPlaceholderProps {
  message: string;
}

const DataItemsListPlaceholder: FC<DataItemsListPlaceholderProps> = ({
                                                                       message
                                                                     }) => {
  return (<Row>
    <Col span={24}>
      <div className="site-card-border-less-wrapper">
        <Card title="" bordered={false} style={{width: 300}}>
          <p>{message}</p>
        </Card>
      </div>
    </Col>
  </Row>);
};

DataItemsListPlaceholder.displayName = 'DataItemsListPlaceholder';

export default DataItemsListPlaceholder;
