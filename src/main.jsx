import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRoute, RouterProvider } from 'react-router-dom'
import Home from './routes/Home'
import Servicos from './routes/Servicos'
import Integrantes from './routes/Integrantes'
import Error from './routes/Error'

const router = createBrowserRoute([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/servicos",
        element: <Servicos/>
      },
      {
        path: "/integrantes",
        element: <Integrantes/>
      },
    ]
  }
]

)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
