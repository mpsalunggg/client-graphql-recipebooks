import { FC } from 'react'
import { FaHeart, FaPencilAlt, FaTrash } from 'react-icons/fa'
import { useModal } from '../../context/ModalContext'

const Main: FC = () => {
  const { openModal } = useModal()
  const handleOpenModal = () => {
    openModal(
      <div>
        <h2 className="text-xl mb-4">Modal Title</h2>
        <p>Modal content goes here.</p>
      </div>
    )
  }
  return (
    <div>
      <div className="toast toast-center">
        <div className="alert alert-success">
          <span>Message sent successfully.</span>
        </div>
      </div>
      <button
        className="btn btn-sm w-full btn-primary rounded-md mb-4"
        onClick={handleOpenModal}
      >
        + Recipe
      </button>
      <div
        className="card w-full h-max-32 bg-cover bg-center rounded-md shadow-md"
        style={{
          backgroundImage:
            "url('https://cdn1-production-images-kly.akamaized.net/5Rgd9MT6ayaE2xEUHS3XWIzpc6w=/0x281:4653x2903/800x450/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3049433/original/093267200_1581580862-shutterstock_294636281.jpg')",
        }}
      >
        <div className="card-body p-4 bg-opacity-60 bg-gray-800 rounded-md h-full">
          <h2 className="card-title text-white text-xl font-bold">Pizza</h2>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit...
          </p>
          <div className="flex justify-between items-center">
            <FaHeart className="text-red-500" />
            <div className="flex justify-end gap-2">
              <button className="bg-red-500 hover:bg-red-400 btn-sm rounded-md">
                <FaTrash className="text-white" />
              </button>
              <button className="bg-green-500 hover:bg-green-400 btn-sm rounded-md">
                <FaPencilAlt className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
