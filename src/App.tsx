import Home from "./routes/home/index"
import { createHashRouter, RouterProvider } from "react-router-dom"
import NotFound from "./routes/notFound/index"
import Naruto from "./routes/naruto"
import OnePiece from "./routes/onePiece";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/naruto",
    element: <Naruto />,
  },
  {
    path: "/one-piece",
    element: <OnePiece />,
  }
];

const router = createHashRouter(routes);

export default function App() {
  return (
      <RouterProvider router={router} />
  )
}
