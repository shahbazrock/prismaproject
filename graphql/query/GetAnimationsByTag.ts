import { gql } from "@apollo/client";

export const GET_ANIMATIONS_BY_TAG = gql`
  query getAnimationsByTag($name:String!) {
    getAnimationsByTag(name:$name) {
    animation{
    id
      user{
      name
      }
      title
      path
      description
    }
      tag{
      id
      name
      }
    }
  }
`;