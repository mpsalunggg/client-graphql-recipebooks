import { FC } from 'react'
import { useModal } from '../../../../context/ModalContext'

const ModalDelete: FC = () => {
  const { closeModal } = useModal()
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-primary">Delete Recipe</h2>
      <p className="text-md label-text">
        Are you sure want to delete this recipe?
      </p>
      <div className="flex justify-end mt-4 gap-2">
        <button className="bg-red-500 hover:bg-red-400 text-primary-content btn btn-sm rounded-md">
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
