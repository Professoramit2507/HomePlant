import { createBrowserRouter, Router } from "react-router";
import HomeLayout from '../Components/Layout/HomeLayout';
import Footer from "../Components/Footer/Footer";
import Plants from "../Components/Plants/Plants";
import My_Profile from "../Components/My_Profile/My_Profile";
import Home from "../Components/Home/Home";
import CardTips from "../Components/Tips/CardTips";
import Expart from "../Components/Expart/Expart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children:[
        
            {
                path:"/home",
                element:<Home></Home>,
                loader:() => fetch('/Home_Plants.json')
            },
            {
                path:'/plants',
                element:<Plants></Plants>,
                loader: () => fetch('/Plant_Plants.json')
            },
            {
                path:'/CardTips',
                element:<CardTips></CardTips>,
                loader: () => fetch('/Tips.json')
            },
            {
                path:'/expert',
                element:<Expart></Expart>,
                loader:() => fetch('/Expert.json')
            },

            {
                path:'/profile',
                element:<My_Profile></My_Profile>
            },
            {
                path:'/footer',
                element:<Footer></Footer>
            }
        
    ]
  },

  {
    path:'/*',
    element:<h1>Page not found</h1>
  }
  
]);

export default router;