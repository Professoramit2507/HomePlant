import { createBrowserRouter } from "react-router-dom";
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
import ForgotPasswordPage from "../Components/ForgotPasswordPage/ForgotPasswordPage";  // <-- Import ভুলে যেও না
import Error from "../Components/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("/Home_Plants.json"),
      },
      {
        path: "home",
        element: <Home />,
        loader: () => fetch("/Home_Plants.json"),
      },
      {
        path: "plants",
        element: <Plants />,
        loader: () => fetch("/Plant_Plants.json"),
      },
      {
        path: "CardTips",
        element: <CardTips />,
        loader: () => fetch("/Tips.json"),
      },
      {
        path: "expert",
        element: <Expart />,
        loader: () => fetch("/Expert.json"),
      },
      {
        path: "profile",
        element: <My_Profile />,
      },
      {
        path: "auth",
        element: <AuthLayout />,
        children: [
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "register",
            element: <Register />,
          },
        ],
      },
      {
        path: "forgot-password",
        element: <ForgotPasswordPage />,
      },
      {
        path: "footer",
        element: <Footer />,
      },
    ],
  },

  {
    path: "/card_details/:id",
    element: (
      <PrivateRoute>
        <CardDetails />
      </PrivateRoute>
    ),
    loader: async () => {
      const homeRes = await fetch("/Home_Plants.json");
      const plantRes = await fetch("/Plant_Plants.json");

      const homeData = await homeRes.json();
      const plantData = await plantRes.json();

      return [...homeData, ...plantData];
    },
  },

  {
    path: "*",
    element: <Error></Error>,
  },
]);

export default router;

