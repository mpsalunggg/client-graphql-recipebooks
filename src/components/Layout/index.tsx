import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'
import Modal from '../Modal'
import { ModalProvider } from '../../context/ModalContext'

const Layout = () => {
  return (
    <ModalProvider>
      <div>
        <Navbar />
        <div className="lg:px-96 px-8 py-4">
          <Outlet />
        </div>
        <Modal />
      </div>
    </ModalProvider>
  )
}
export default Layout
