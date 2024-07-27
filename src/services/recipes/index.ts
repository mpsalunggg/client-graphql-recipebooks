import { useQuery } from '@apollo/client'
import { GET_RECIPES } from './queries'
import { Recipes } from './type'

export const useGetRecipes = () => {
  const { loading, error, data } = useQuery<Recipes>(GET_RECIPES)
  return { loading, error, data }
}
