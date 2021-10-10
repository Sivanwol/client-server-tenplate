import React from 'react';
import NextDocument, {Html, Head, Main, NextScript, DocumentContext, DocumentProps} from 'next/document';
import {ServerStyleSheet} from 'styled-components';
import Helmet, {HelmetData} from 'react-helmet';

interface DocumentPageProps extends DocumentProps {
  helmet: HelmetData;
  styleTags: object;
}

export default class Document extends NextDocument<DocumentPageProps> {
  static async getInitialProps({renderPage}: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();

    return {...page, styleTags, helmet: Helmet.rewind()};
  }

  helmetHtmlAttrComponents() {
    return this.props.helmet.htmlAttributes.toComponent();
  }

  helmetHeadComponents() {
    const keys = Object.keys(this.props.helmet)
      .filter(el => el !== 'htmlAttributes')
      .map((el: keyof HelmetData) => this.props.helmet[el].toComponent())
      .filter(el => !(Object.keys(el).length === 0 && el.constructor === Object));

    return keys.length ? keys : [];
  }

  render() {
    const {styleTags,helmet} = this.props;
    return (
      <Html lang="en" {...this.helmetHtmlAttrComponents()}>
        <Head>
          <meta name="robots" content="index,follow"/>
          <meta httpEquiv="expires" content="10800"/>
          <meta name="generator" content="Akqa coding test app"/>
          <meta name="Description" content="Akqa coding test app"/>
          {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
          {this.helmetHeadComponents()}
          {styleTags}
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    );
  }
}
