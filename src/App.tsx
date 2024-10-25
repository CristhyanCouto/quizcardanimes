import Home from "./routes/home/index"
import { createHashRouter, RouterProvider } from "react-router-dom"
import NotFound from "./routes/notFound/index"
import Naruto from "./routes/naruto"

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/naruto",
    element: <Naruto />,
  }
];

const router = createHashRouter(routes);

export default function App() {
  return (
      <RouterProvider router={router} />
  )
}
