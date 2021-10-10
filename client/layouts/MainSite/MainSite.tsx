import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import Footercontent from "client/components/FooterContent/FooterContent";
import Headercontent from "client/components/HeaderContent/HeaderContent";

const { Header, Content, Footer } = Layout;
export type MainsiteProps = {}

export default class Mainsite extends React.Component<MainsiteProps> {
  render() {
    let {} = this.props;
    return <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <Headercontent />
      </Header>
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        {this.props.children}
      </Content>
      <Footer style={{ textAlign: 'center' }}><Footercontent /></Footer>
    </Layout>;
  }
}
