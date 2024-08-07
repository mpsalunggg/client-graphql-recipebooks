import { FC } from 'react'
import { Recipe } from '../../../../services/recipes/type'
import { FaHeart, FaPencilAlt, FaTrash } from 'react-icons/fa'

interface CardProps {
  item: Recipe
  handleDeleteModal: () => void
  handleOpenModal: (type: string) => void
}

const Card: FC<CardProps> = ({ item, handleDeleteModal, handleOpenModal }) => {
  const { img, title, description } = item
  return (
    <div
      className="card w-full h-max-32 bg-cover bg-center rounded-md shadow-md"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="card-body p-4 bg-opacity-60 bg-gray-800 rounded-md h-full">
        <h2 className="card-title text-white text-xl font-bold">{title}</h2>
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
}
export default Card
