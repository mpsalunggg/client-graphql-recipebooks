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

export const ADD_RECIPE = gql`
  mutation AddRecipe(
    $title: String!
    $description: String!
    $img: String!
    $ingredients: [String!]!
    $instructions: String!
  ) {
    addRecipe(
      title: $title
      description: $description
      img: $img
      ingredients: $ingredients
      instructions: $instructions
    ) {
      id
      title
      description
      img
      ingredients
      instructions
      isFavorite
    }
  }
`

export const DELETE_RECIPE = gql`
  mutation DeleteRecipe($id: ID!) {
    deleteRecipe(id: $id) {
      id
      title
    }
  }
`
