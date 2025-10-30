import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'

import HomePage from '@/pages/home/HomePage'
import TestUIPage from '@/pages/test-ui/TestUIPage'

import AppLayout from './AppLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AppLayout>
        <Outlet />
      </AppLayout>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/create',
        element: <div>Create Page</div>,
      },
    ],
  },
  {
    path: '/test-ui',
    element: <TestUIPage />,
  },
])

const Root: React.FC = () => {
  return <RouterProvider router={router} />
}

export default Root
