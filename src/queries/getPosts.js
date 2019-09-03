import gql from 'graphql-tag';

const GET_POSTS = gql`
  query GET_POSTS {
    posts {
      edges {
       node {
         treWpisuBloga {
           title
           text
           image {
             sourceUrl(size: THUMBNAIL)
           }
           tags {
            ... on Tag{
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