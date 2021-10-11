import React, {useEffect} from 'react';
import {NextPage} from 'next';
import {useDispatch} from "react-redux";
import Helmet from 'react-helmet';
import {PageProps} from '@client/types/pages';
import {fetchDataItemsIfNeeded} from '@client/actions/dataItem.action';
import DataItemsList from '@client/containers/DataItemsListByRedux';

const HomePage: NextPage<Partial<PageProps>> = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    console.log("Init");
    // Fetch products before page is rendered
    dispatch<any>(fetchDataItemsIfNeeded());
  }, [dispatch])
  return (
    <>
      <Helmet title="Main Site Template" meta={[{property: 'og:title', content: 'Main Site Template'}]}/>
      <DataItemsList/>
    </>
  );
}

export default HomePage;
