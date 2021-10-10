import React from 'react';
import {Row, Col} from 'antd';

class DataItemsListPlaceholder extends React.Component {
  props: any = {
    message: ''
  };
  render() {
    const {message} = this.props;
    return (<Row>
      <Col span={24}>{message}</Col>
    </Row>);
  }
}


export default DataItemsListPlaceholder;
