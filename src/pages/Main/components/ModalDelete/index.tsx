import { FC } from 'react'
import { useModal } from '../../../../context/ModalContext'
import { useDeleteRecipe } from '../../../../services/recipes'
import { GET_RECIPES } from '../../../../services/recipes/queries'
import { useAlert } from '../../../../context/AlertContext'

const ModalDelete: FC<{ id: string }> = ({ id }) => {
  const { closeModal } = useModal()
  const { showAlert } = useAlert()
  const { deleteRecipe } = useDeleteRecipe()

  const handleDeleteRecipe = () => {
    deleteRecipe({
      variables: {
        id,
      },
      onCompleted: () => {
        showAlert('Recipe deleted successfully!', 'success')
        closeModal()
      },
      onError: (err) => {
        showAlert(`Failed to delete recipe. ${err.message}`, 'error')
      },
      refetchQueries: [
        {
          query: GET_RECIPES,
        },
      ],
    })
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-primary">Delete Recipe</h2>
      <p className="text-md label-text">
        Are you sure want to delete this recipe?
      </p>
      <div className="flex justify-end mt-4 gap-2">
        <button
          className="bg-red-500 hover:bg-red-400 text-primary-content btn btn-sm rounded-md"
          onClick={handleDeleteRecipe}
        >
          Delete
        </button>
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
export default ModalDelete
