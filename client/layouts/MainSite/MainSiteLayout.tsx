import React from 'react';
import { Layout } from 'antd';
import FooterContent from "client/components/FooterContent/FooterContent";
import HeaderContent from "client/components/HeaderContent/HeaderContent";

const { Header, Content, Footer } = Layout;

export default class MainSiteLayout extends React.Component {
  render() {
    return <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <HeaderContent />
      </Header>
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        {this.props.children}
      </Content>
      <Footer style={{ textAlign: 'center' }}><FooterContent /></Footer>
    </Layout>;
  }
}
