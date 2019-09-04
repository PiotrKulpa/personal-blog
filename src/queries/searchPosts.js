import gql from 'graphql-tag';

const SEARCH_POSTS = gql`
  query SEARCH_POSTS ($searchQuery: String) {
    posts (where: {search: $searchQuery}) {
      edges {
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

export default SEARCH_POSTS;