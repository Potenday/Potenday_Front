import { RecoilRoot } from "recoil"
import { RouterProvider } from "react-router-dom"
import { routers } from "./router"
function App() {

  return (
    <RecoilRoot>
      <RouterProvider router={routers} />
    </RecoilRoot>
  )
}

export default App
