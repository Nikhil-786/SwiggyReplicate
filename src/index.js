import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Help from "./components/Help";
import Offers from "./components/Offers";
import Search from "./components/Search";
import Cart from "./components/Cart";
import SignIn from "./components/SignIn";
import RestaurantMenu from "./components/RestaurantMenu";
import Browse from "./components/Browse";
import Shimmer from "./components/Shimmer";


const Grocery = lazy(()=>import('./components/Grocery'));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/Help",
        element: <Help />,
      },
      {
        path: "/",
        element: <Browse />,
      },
      {
        path: "/Search",
        element: <Search />,
      },
      {
        path: "/Offers",
        element: <Offers />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
      {
        path: "/Grocery",
        element: <Suspense fallback={<Shimmer/>}><Grocery /></Suspense>,
      },
      {
        path: "/SignIn",
        element: <SignIn />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
   
  </React.StrictMode>
);

root.render(<RouterProvider router={appRouter} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
