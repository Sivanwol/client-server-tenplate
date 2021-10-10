import '../styles/globals.scss'
import {Provider} from "react-redux";
import { ApolloProvider } from 'react-apollo';
import NextApp from "next/app";
import {compose} from "redux";
import ApolloClient, {InMemoryCache} from "apollo-boost";
import MainSiteLayout from "@client/layouts/MainSite/MainSiteLayout";
import {AppPageProps} from '@client/types/pages';
import makeStore from '@client/utils/store';
import withApollo from '@client/utils/withApollo';
import withRedux from '@client/utils/withRedux';

const apolloClient = new ApolloClient({
  uri: process.env.GRAPHQL_URI,
  cache: new InMemoryCache()
})

class App extends NextApp<AppPageProps> {
  render() {
    const {Component, pageProps, store} = this.props;
    return (
      <ApolloProvider client={apolloClient}>
        <Provider store={store}>
          <MainSiteLayout>
            <Component {...pageProps} />
          </MainSiteLayout>
        </Provider>
      </ApolloProvider>
    );
  }
}

export default compose(
  withRedux(makeStore)
)(App);
