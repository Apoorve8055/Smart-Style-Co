import { createBrowserRouter } from "react-router-dom";
import MasterLayout from "../pages/masterLayout/MasterLayout";
import Home from "../pages/home/Home";
import ProductDetail from "../pages/productDetail/ProductDetail";
import Cart from "../pages/cart/Cart";
import ProductList from "../pages/productList/ProductList";

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
        path: "/product/:id",
        element: <ProductDetail />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <div>Checkout Page</div>,
      },
      {
        path: "/order-confirmation",
        element: <div>Order Confirmation Page</div>,
      },
      {
        path: "/account",
        element: <div>Account Page</div>,
      },
      {
        path: "/login",
        element: <div>Login Page</div>,
      },
      {
        path: "/signup",
        element: <div>Signup Page</div>,
      },
      {
        path: "/forgot-password",
        element: <div>Forgot Password Page</div>,
      },
    ],
  },
]);

export default router;
