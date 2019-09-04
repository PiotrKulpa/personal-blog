import gql from 'graphql-tag';

const GET_POST = gql`
query GET_POST($uri: String) {
  postBy(uri: $uri) {
    title
    content
    date
    uri
    featuredImage{
     sourceUrl
    }
  categories {
    edges {
      node {
        name
      }
    }
  }
  tags {
    edges {
      node {
        name
      }
    }
  }
  }
}
`;

export default GET_POST;