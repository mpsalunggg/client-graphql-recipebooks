import { ChangeEvent, FC, useState } from 'react'
import { FaMinusCircle } from 'react-icons/fa'
import { useModal } from '../../../../context/ModalContext'

const ModalRecipe: FC<{ type: string }> = ({ type }) => {
  const { closeModal } = useModal()
  const [ingredients, setIngredients] = useState<string[]>([])
  const [recipe, setRecipe] = useState({
    title: '',
    image_url: '',
    ingredients: '',
    instructions: '',
  })

  const handleAddIngredients = (value: string) => {
    console.log(recipe)
    setIngredients([...ingredients, value])
  }

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setRecipe({
      ...recipe,
      [name]: value,
    })
  }

  const handleDeleteIngredients = (idx: number) => {
    const newData = ingredients.filter((_, index) => index !== idx)
    setIngredients(newData)
  }
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-primary">{type} Recipe</h2>
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Title</span>
        </label>
        <input
          name="title"
          type="text"
          className="input input-bordered input-sm"
          onChange={handleChange}
        />
      </div>
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Image URL</span>
        </label>
        <input
          name="image_url"
          type="text"
          className="input input-bordered input-sm"
          onChange={handleChange}
        />
      </div>
      <div>
        <div className="form-control mt-4">
          <label className="label">
            <span className="label-text">Ingredients</span>
          </label>
          <div className="flex items-center gap-2">
            <input
              name="ingredients"
              type="text"
              className="input input-bordered input-sm w-full"
              onChange={handleChange}
            />
            <button
              className="btn btn-primary btn-sm"
              onClick={() => {
                recipe.ingredients && handleAddIngredients(recipe.ingredients)
              }}
            >
              +
            </button>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap">
          {ingredients.map((item, index) => (
            <div
              key={index}
              className="badge badge-primary badge-outline rounded-sm flex items-center gap-1"
            >
              {item}
              <FaMinusCircle
                size={12}
                onClick={() => handleDeleteIngredients(index)}
                className="cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="form-control mt-4">
        <label className="label">
          <span className="label-text">Instructions</span>
        </label>
        <textarea
          name="instructions"
          className="textarea textarea-bordered"
          onChange={handleChange}
        />
      </div>
      <div className="flex justify-end mt-4 gap-2">
        {type === 'Edit' ? (
          <button className="bg-green-500 hover:bg-green-400 text-primary-content btn btn-sm rounded-md">
            Edit
          </button>
        ) : (
          <button className="text-primary-content btn-primary btn btn-sm rounded-md">
            Submit
          </button>
        )}
        <button
          className="btn btn-primary btn-sm rounded-md"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  )
}
export default ModalRecipe
