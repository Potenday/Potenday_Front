import { createBrowserRouter } from 'react-router-dom'
import { Router as RemixRouter } from '@remix-run/router/dist/router'
import GeneralLayout from './GereralLayout'
import Main from "./pages/Main"
import Login from './pages/Login'

interface RouterBase {
    id: number,
    path: string,
    page: React.ReactNode
}

interface UserAccessibleRouterElement extends RouterBase {
    withAuth?: boolean 
  }

  const routerData: UserAccessibleRouterElement[] = [
    {
      id: 0,
      path: '/login',
      page: <Login/>,
      withAuth: false
    },
    {
        id: 1,
        path: '/', 
        page: <Main/>,
        withAuth: true
    }
  ]

  export const routers: RemixRouter = createBrowserRouter(
    routerData.map((router) => {
      if (router.withAuth) {
        return {
          path: router.path,
          element: <GeneralLayout>
            { router.page }
          </GeneralLayout>
        }
      } else {
        return {
          path: router.path,
          element: router.page
        }
      }
    })
  )