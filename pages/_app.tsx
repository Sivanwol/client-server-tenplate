import '../styles/globals.scss'
import {Provider} from "react-redux";
import {ApolloProvider} from 'react-apollo';
import NextApp from "next/app";
import {compose} from "redux";
import MainSiteLayout from "@client/layouts/MainSite/MainSiteLayout";
import {AppPageProps} from '@client/types/pages';
import makeStore from '@client/utils/store';
import withApollo from '@client/utils/withApollo';
import withRedux from '@client/utils/withRedux';

class App extends NextApp<AppPageProps> {
  render() {
    const {Component, pageProps, store, apollo} = this.props;
    return (
      <ApolloProvider client={apollo}>
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
  withApollo,
  withRedux(makeStore)
)(App);
