import '../styles/globals.scss'
import Mainsite from "../client/layouts/MainSite/MainSite";
import { ApolloProvider } from 'react-apollo';
import { AppPageProps } from '@client/types/pages';
import {Provider} from "react-redux";
import makeStore from '@client/utils/store';
import withApollo from '@client/utils/withApollo';
import withRedux from '@client/utils/withRedux';
import ApolloClient from "apollo-client";
import NextApp from "next/app";
import {compose} from "redux";

class App extends NextApp<AppPageProps> {
  render() {
    const {Component, pageProps, store, apollo} = this.props;
    return (
      <ApolloProvider client={apollo}>
        <Provider store={store}>
          <Mainsite>
            <Component {...pageProps} />
          </Mainsite>
        </Provider>
      </ApolloProvider>
    );
  }
}

export default compose(
  withApollo,
  withRedux(makeStore)
)(App);
