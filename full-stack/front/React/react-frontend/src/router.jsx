import { Navigate, createBrowserRouter} from "react-router-dom";

import NotFound from "./views/NotFound";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";

import WelcomePage from "./views/WelcomePage";
import LoginUcenik from "./views/LoginUcenik";
import LoginRoditelj from "./views/LoginRoditelj";
import LoginProfesor from "./views/LoginProfesor";
import HomeUcenik from "./views/HomeUcenik";
import OcenaAll from "./views/OcenaAll";
import PredmetiUcenik from "./views/PredmetiUcenik";
import OcenaPredmet from "./views/OcenaPredmet";
import Saradnja from "./views/Saradnja";
import HomeRoditelj from "./views/HomeRoditelj";
import HomeProfesor from "./views/HomeProfesor";
import OdeljenjeUcenici from "./views/OdeljenjeUcenici";
import OcenaUcenik from "./views/OcenaUcenik";

const router=createBrowserRouter([
    {
        path: "/",
        element: <GuestLayout/>,
        children: [
       
          {
            path: "/pocetna",
            element: <WelcomePage />,
          },
          {
            path: "/",
            element: <WelcomePage />,
          },
          {
            path:"/ucenik-login",
            element:<LoginUcenik/>
          },
          {
            path:"/roditelj-login",
            element:<LoginRoditelj />
          },
          {
            path:"/profesor-login",
            element:<LoginProfesor />
          }

        ],
      },

    {
        path: '/',
        element: <DefaultLayout/>,
        children:[
         
        
            {
                //roditelj
                path:'/home-roditelj',
                element:<HomeRoditelj/>
            },
            {
                //ucenik
                path:'/home-ucenik',
                element:<HomeUcenik/>
            },
            {
                //profesor
                path:'/home-profesor',
                element:<HomeProfesor/>
            },
            {
                //ucenik
                path:'/sve-ocene-ucenik',
                element:<OcenaAll/>
            },
            {
                //ucenik
                path:'/predmeti-ucenik',
                element:<PredmetiUcenik/>
            },
            {
                //ucenik
                path:'/ocene-iz-predmeta/:predmetId',
                element: <OcenaPredmet/>
            },
            {
                //ucenik
                path:'/saradnja',
                element: <Saradnja/>
            },
            {
                //profesor
                path:'/odeljenje-ucenici',
                element: <OdeljenjeUcenici/>
            },
            {
                //profesor
                path:'/ocene-ucenika',
                element: <OcenaUcenik/>
            },
        ],
    },
    {
    
            path:'*',
            element:<NotFound/>    
    }


])

export default router;