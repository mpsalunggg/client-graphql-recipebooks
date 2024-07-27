import { FC } from 'react'
import { FaHeart, FaPencilAlt, FaTrash } from 'react-icons/fa'
import { useModal } from '../../context/ModalContext'
import ModalRecipe from './components/ModalRecipe'
import ModalDelete from './components/ModalDelete'
import { useGetRecipes } from '../../services/recipes'
import { Recipe } from '../../services/recipes/type'

const Main: FC = () => {
  const { openModal } = useModal()
  const { loading, data } = useGetRecipes()

  const handleOpenModal = (type: string) => {
    openModal(<ModalRecipe type={type} />)
  }
  const handleDeleteModal = () => {
    openModal(<ModalDelete />)
  }

  return (
    <div>
      <div className="toast toast-center">
        <div className="alert alert-success rounded-md">
          <span>Success add recipe</span>
        </div>
      </div>
      <button
        className="btn btn-sm w-full btn-primary rounded-md mb-4"
        onClick={() => handleOpenModal('Add')}
      >
        + Recipe
      </button>
      <div className='flex flex-col gap-3'>
        {loading ? (
          <p>Loading...</p>
        ) : (
          data?.recipes.map((item: Recipe) => {
            const { id, title, description, img } = item
            return (
              <div
                className="card w-full h-max-32 bg-cover bg-center rounded-md shadow-md"
                style={{
                  backgroundImage: `url(${img})`,
                }}
                key={id}
              >
                <div className="card-body p-4 bg-opacity-60 bg-gray-800 rounded-md h-full">
                  <h2 className="card-title text-white text-xl font-bold">
                    {title}
                  </h2>
                  <p className="text-white line-clamp-1">{description}</p>
                  <div className="flex justify-between items-center">
                    <FaHeart className="text-red-500" />
                    <div className="flex justify-end gap-2">
                      <button
                        className="bg-red-500 hover:bg-red-400 btn-sm rounded-md"
                        onClick={handleDeleteModal}
                      >
                        <FaTrash className="text-white" />
                      </button>
                      <button className="bg-green-500 hover:bg-green-400 btn-sm rounded-md">
                        <FaPencilAlt
                          className="text-white"
                          onClick={() => handleOpenModal('Edit')}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}

export default Main
