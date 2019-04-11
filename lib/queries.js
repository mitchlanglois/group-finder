import gql from 'graphql-tag';

const CURRENT_USER_QUERY = gql`
  query {
    me {
      id
      email
      name
    }
  }
`;

const FEED_QUERY = gql`
  query {
    feed {
      id
      title
      content
      author {
        id
        name
      }
    }
  }
`;

export { CURRENT_USER_QUERY, FEED_QUERY }
