import { gql } from '@apollo/client/core';

export const DataItem_QUERY = gql`
  query dataItems {
    dataItems {
      id,
      name
    }
  }
`;
