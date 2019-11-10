import gql from 'graphql-tag';

const GET_POSTS = gql`
  query GET_POSTS ($first: Int, $last: Int, $after: String, $before: String) {
    posts (first: $first, last: $last, after: $after, before: $before) {
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