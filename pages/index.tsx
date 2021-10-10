import React from 'react';
import { NextPage } from 'next';
import Helmet from 'react-helmet';
import { PageProps } from '@client/types/pages';
import { fetchDataItemsIfNeeded } from '@client/actions/dataItem.action';
import DataItemsList from '@client/containers/DataItemsListByRedux';

const HomePage: NextPage<Partial<PageProps>> = () => (
  <>
    <Helmet title="With Redux demo" meta={[{ property: 'og:title', content: 'With Redux demo' }]} />
    <DataItemsList />
  </>
);

HomePage.getInitialProps = async ({ store, query: { size } }: PageProps) => {
  // Fetch products before page is rendered
  await store.dispatch<any>(fetchDataItemsIfNeeded()); //eslint-disable-line

  return {};
};

export default HomePage;
