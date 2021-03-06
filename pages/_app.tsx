import '../styles/globals.scss'
import {Provider} from "react-redux";
import NextApp from "next/app";
import {compose} from "redux";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import MainSiteLayout from "@client/layouts/MainSite/MainSiteLayout";
import {AppPageProps} from '@client/types/pages';
import makeStore from '@client/utils/store';
import withRedux from '@client/utils/withRedux';
import apolloClient from '@client/utils/apollo';

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
