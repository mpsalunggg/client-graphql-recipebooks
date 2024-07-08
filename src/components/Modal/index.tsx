import { FC } from 'react'
import { useModal } from '../../context/ModalContext'

const Modal: FC = () => {
  const { isModalOpen, closeModal, modalContent } = useModal()

  if (!isModalOpen) return null

  const handleClickOutside = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  return (
    <div
      className="fixed inset-0 bg-gray-600 px-8 bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={handleClickOutside}
    >
      <div className="bg-primary-content p-7 rounded-xl shadow-md lg:w-1/3 w-full">
        {modalContent}
        <div className="flex justify-end">
          <button
            className="btn btn-primary btn-sm rounded-md mt-4"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
