import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Cart } from './pages/Cart/Cart.tsx'
import { NotFound } from './pages/NotFound/NotFound.tsx'
import { Layout } from './layout/Layout/Layout.tsx'
import { Menu } from './pages/Menu/Menu.tsx'
import { ProductItem } from './pages/Product/Product.tsx'
import Success from './components/Success/Success.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Menu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/product/:id",
        element: <ProductItem />,
      },
      {
        path: "/success",
        element: <Success />,
      }
    ]
  },
  {
    path: "*",
    element: <NotFound />,
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>,
)
