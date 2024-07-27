export interface Recipe {
  id: string
  title: string
  description?: string
  img?: string
}

export interface Recipes {
  recipes: Recipe[]
}
