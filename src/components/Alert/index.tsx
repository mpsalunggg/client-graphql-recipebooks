import { FC } from 'react'
import { useAlert } from '../../context/AlertContext'
import { FaCheckCircle, FaMinusCircle } from 'react-icons/fa'

const Alert: FC = () => {
  const { alertMessage, alertType } = useAlert()

  return (
    <div
      className={`toast toast-center transition-all ${
        !alertMessage ? 'scale-0' : 'visible'
      }`}
    >
      <div className="alert alert-success rounded-md">
        {alertType === 'success' ? <FaCheckCircle /> : <FaMinusCircle />}
        <span>Success add recipe</span>
      </div>
    </div>
  )
}
export default Alert
