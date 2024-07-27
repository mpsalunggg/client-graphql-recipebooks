import { FC } from 'react'
import { useModal } from '../../context/ModalContext'
import ModalRecipe from './components/ModalRecipe'
import ModalDelete from './components/ModalDelete'
import { useGetRecipes } from '../../services/recipes'
import { Recipe } from '../../services/recipes/type'
import Card from './components/Card'

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
      <div className="flex flex-col gap-3">
        {loading ? (
          <p>Loading...</p>
        ) : (
          data?.recipes.map((item: Recipe) => {
            return (
              <Card
                key={item.id}
                item={item}
                handleDeleteModal={handleDeleteModal}
                handleOpenModal={handleOpenModal}
              />
            )
          })
        )}
      </div>
    </div>
  )
}

export default Main
