import type { AppStoreType } from './model/store'

//react

//router
import { createBrowserRouter, RouterProvider, redirect } from 'react-router-dom'
import { Button } from '@mui/material'

// ** Layouts

// ** Pages

// api

const createRoutes = (store: AppStoreType) => {
  return [
    {
      path: '/',
      element: <Button variant='contained'>Start</Button>,
    }
  ]
}

const App = ({ store }: { store: AppStoreType }) => {
  
  return <RouterProvider router={createBrowserRouter(createRoutes(store))} />
  
}

export default App