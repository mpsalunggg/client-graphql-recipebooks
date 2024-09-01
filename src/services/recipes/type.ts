export interface Recipe {
  id: string
  title: string
  description?: string
  img?: string
  ingredients: string[]
  instructions: string
  isFavorite: boolean
}

export interface Recipes {
  recipes: Recipe[]
}
