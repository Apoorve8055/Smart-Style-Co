import { createBrowserRouter } from "react-router-dom";
import MasterLayout from "../pages/masterLayout/MasterLayout";
import Home from "../pages/home/Home";
import ProductDetail from "../pages/productDetail/ProductDetail";
import ProductList from "../pages/productList/ProductList";
import Checkout from "../pages/checkout/checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MasterLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <ProductList />,
      },
      {
        path: "/shop/:category",
        element: <ProductList />,
      },
      {
        path: "/shop/product/:id",
        element: <ProductDetail />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);

export default router;
