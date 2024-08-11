import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'
import Modal from '../Modal'
import { ModalProvider } from '../../context/ModalContext'
import { AlertProvider } from '../../context/AlertContext'

const Layout: FC = () => {
  return (
    <ModalProvider>
      <AlertProvider>
        <div>
          <Navbar />
          <div className="lg:px-96 px-8 py-4">
            <Outlet />
          </div>
          <Modal />
        </div>
      </AlertProvider>
    </ModalProvider>
  )
}
export default Layout
