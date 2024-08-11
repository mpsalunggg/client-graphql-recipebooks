import { FC } from 'react'
import { useModal } from '../../context/ModalContext'
import ModalRecipe from './components/ModalRecipe'
import ModalDelete from './components/ModalDelete'
import { useGetRecipes } from '../../services/recipes'
import { Recipe } from '../../services/recipes/type'
import Card from './components/Card'
import Loading from '../../components/Loading'
import Alert from '../../components/Alert'

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
      <Alert />
      <button
        className="btn btn-sm w-full btn-primary rounded-md mb-4"
        onClick={() => handleOpenModal('Add')}
      >
        + Recipe
      </button>
      <div className="flex flex-col gap-3">
        {loading ? (
          <Loading />
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
