import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

import { ErrorPage, Home, Project, Root } from '@/routes'
import './index.css'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Navigate to="/home" />,
        },
        {
          path: '/home',
          element: <Home />,
        },
        {
          path: '/about',
          lazy: async () => ({
            loader: () => Promise.resolve({}),
            Component: await import('@/routes').then(({ About }) => About),
            ErrorBoundary: () => <></>,
          }),
        },
        {
          path: '/project/:id',
          element: <Project />,
        },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL },
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
