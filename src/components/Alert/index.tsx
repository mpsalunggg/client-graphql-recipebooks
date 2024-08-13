import { FC } from 'react'
import { useAlert } from '../../context/AlertContext'
import { FaCheckCircle, FaMinusCircle } from 'react-icons/fa'

const Alert: FC = () => {
  const { alertMessage, alertType } = useAlert()

  return (
    <div
      className={`toast toast-center min-w-full lg:px-96 px-8 z-[99] transition-all ${
        !alertMessage ? 'scale-0' : 'visible'
      }`}
    >
      <div
        className={`alert ${
          alertType === 'success' ? 'bg-green-500' : 'bg-red-500'
        } rounded-xl flex items-center gap-2 border-none`}
      >
        <div className="w-6">
          {alertType === 'success' ? (
            <FaCheckCircle className="text-white" />
          ) : (
            <FaMinusCircle className="text-white" />
          )}
        </div>
        <div className="overflow-y-auto">
          <p className="text-white">{alertMessage}</p>
        </div>
      </div>
    </div>
  )
}
export default Alert
