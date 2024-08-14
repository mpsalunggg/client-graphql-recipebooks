import { useMutation, useQuery } from '@apollo/client'
import { ADD_RECIPE, DELETE_RECIPE, GET_RECIPES } from './queries'
import { Recipes } from './type'

export const useGetRecipes = () => {
  const { loading, error, data } = useQuery<Recipes>(GET_RECIPES)
  return { loading, error, data }
}

export const useAddRecipe = () => {
  const [addRecipe, { data, loading, error }] = useMutation<Recipes>(ADD_RECIPE)
  return { addRecipe, data, loading, error }
}

export const useDeleteRecipe = () => {
  const [deleteRecipe, { data, loading, error }] = useMutation<
    {
      deleteRecipe: {
        id: string
      }
    },
    { id: string }
  >(DELETE_RECIPE)
  return { deleteRecipe, data, loading, error }
}
