import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./layout/Main";
import Shop from "../src/components/Shop/Shop.jsx";
import About from "./components/About/About";
import Order from "./components/Order/Order";
import { ProductAndCartLoader } from "./components/Loader/ProductAndCartLOader";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Shop></Shop>,
          loader: ProductAndCartLoader,
        },
        { path: "/about", element: <About></About> },
        {
          path: "/order",
          element: <Order></Order>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
