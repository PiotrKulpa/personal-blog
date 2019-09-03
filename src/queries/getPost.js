import gql from 'graphql-tag';

const GET_POST = gql`
query GET_POST($uri: String) {
  postBy(uri: $uri) {
      treWpisuBloga {
          date
          title
          text
          image {
            sourceUrl
          }
          tags {
            ... on Tag{
              name
            }
          }
        }
    id
    postId
    title
    date
    uri
  }
}
`;

export default GET_POST;