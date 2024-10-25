import Home from "./routes/home/index"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import NotFound from "./routes/notFound/index"
import Naruto from "./routes/naruto"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/naruto",
    element: <Naruto />,
  }
])

export default function App() {
  return (
      <RouterProvider router={router} />
  )
}
