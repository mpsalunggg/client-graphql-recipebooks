import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../pages/Home'
import Main from '../pages/Main'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: 'main',
        element: <Main />,
      },
    ],
  },
])

export default router
