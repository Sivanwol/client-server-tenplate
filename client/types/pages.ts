import { AppProps } from 'next/app';
import { NextPageContext } from 'next';
import { ApolloClient } from 'apollo-client';
import { AppStore } from '@client/types';

export interface AppPageProps extends AppProps {
  pageProps: object;
  store: AppStore;
  apollo: ApolloClient<{}>;
}

export interface PageProps extends Pick<AppPageProps, 'store'>, NextPageContext {}

