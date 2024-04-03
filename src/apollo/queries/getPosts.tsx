import gql from 'graphql-tag';

export default gql`
  query getPoset {
    locations {
      id
      name
      description
      photo
    }
  }
`;
