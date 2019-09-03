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
           tags{
             __typename
           }
         }
         uri
       
       }
     }
 }
  }
`;

export default GET_POSTS;