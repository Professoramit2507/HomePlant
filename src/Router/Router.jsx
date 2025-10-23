import { createBrowserRouter, Router } from "react-router";
import HomeLayout from "../Components/Layout/HomeLayout";
import Footer from "../Components/Footer/Footer";
import Plants from "../Components/Plants/Plants";
import My_Profile from "../Components/My_Profile/My_Profile";
import Home from "../Components/Home/Home";
import CardTips from "../Components/Tips/CardTips";
import Expart from "../Components/Expart/Expart";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Components/Layout/AuthLayout";
import CardDetails from "../Pages/CardDetails";
import PrivateRoute from "../Provider/PrivateRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch("/Home_Plants.json"),
      },
      {
        path: "home",
        element: <Home></Home>,
        loader: () => fetch("/Home_Plants.json"),
      },
      {
        path: "/plants",
        element: <Plants></Plants>,
        loader: () => fetch("/Plant_Plants.json"),
      },
      {
        path: "/CardTips",
        element: <CardTips></CardTips>,
        loader: () => fetch("/Tips.json"),
      },
      {
        path: "/expert",
        element: <Expart></Expart>,
        loader: () => fetch("/Expert.json"),
      },

      {
        path: "/profile",
        element: <My_Profile></My_Profile>,
      },
      {
        path:"/auth",
        element:<AuthLayout></AuthLayout>,
        children:[
          {
            path:'/auth/login',
            element:<Login></Login>
          },
          {
             path:'/auth/register',
            element:<Register></Register>
          }
        ]
      },
      {
        path: "/footer",
        element: <Footer></Footer>,
      },
      
    ],
  },
  {
    path:"/card_details/:id",
    element:<PrivateRoute>
      <CardDetails></CardDetails>
    </PrivateRoute>,
    loader:() => fetch('/Home_Plants.json')
  },
   {
    path:"/card_details/:id",
    element:<PrivateRoute>
      <CardDetails></CardDetails>
    </PrivateRoute>,
    loader:() => fetch('/Plant_Plants.json')
  },

  {
    path: "/*",
    element: <h1>Page not found</h1>,
  },
]);

export default router;
