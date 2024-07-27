import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloProvider } from '@apollo/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import router from './routes'
import { ThemeProvider } from './context/ThemeContext'
import client from './apollo/config'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>
)
