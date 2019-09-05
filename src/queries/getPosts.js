import gql from 'graphql-tag';

const GET_POSTS = gql`
  query GET_POSTS ($first: Int, $after: String) {
    posts (first: $first, after: $after) {
      pageInfo{
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
      edges {
        cursor
        node {
          title
          content
          date
          featuredImage {
            sourceUrl(size: THUMBNAIL)
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
          uri
        }
      }
    }
  }
`;

export default GET_POSTS;