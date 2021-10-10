import gql from 'graphql-tag';

export const DataItem_QUERY = gql`
  query dataItems {
    dataItems {
      id,
      name
    }
  }
`;
