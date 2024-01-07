import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    // path: `${process.env.PUBLIC_URL}/`,
    element: <Home />,
  },
  {
    path: "/movie/:id",
    // path: `${process.env.PUBLIC_URL}/movie/:id`,
    element: <Detail />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
