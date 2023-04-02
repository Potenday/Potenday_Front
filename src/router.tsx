import { createBrowserRouter } from 'react-router-dom'
import { Router as RemixRouter } from '@remix-run/router/dist/router'
import GeneralLayout from './GereralLayout'
import Main from "./pages/Main"
import Login from './pages/Login'
import MyResult from './pages/MyResult'
import SelectTree from './pages/SelectTree'
import Redirection from './pages/Redirection'

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
        path: '/login/oauth2/callback/kakao',
        page: <Redirection />,
        withAuth: false
    },
    {
        id: 2,
        path: '/', 
        page: <Main/>,
        withAuth: true
    },
    {
        id: 3,
        path: '/my-result',
        page: <MyResult/>,
        withAuth: false
    },
    {
        id: 4,
        path: '/select-tree',
        page: <SelectTree/>,
        withAuth: false
    },
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