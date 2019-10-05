import gql from 'graphql-tag';

const GET_TEST_POSTS = gql`
query GET_POSTS {
  posts {
    edges {
      node {
        id
        title
        date
      }
    }
  }
}
`;

export default GET_TEST_POSTS;