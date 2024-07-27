import { gql } from '@apollo/client'

export const GET_RECIPES = gql`
  query {
    recipes {
      id
      title
      description
      img
    }
  }
`
