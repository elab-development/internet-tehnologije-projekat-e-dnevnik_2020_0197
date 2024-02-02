import { Navigate, createBrowserRouter} from "react-router-dom";
import NotFound from "./views/NotFound";
import Login from "./views/Login"
import DefaultLayout from "./components/DefaultLayout";
import RoditeljLayout from "./components/RoditeljLayout";
import ProfesorHomePage from "./views/ProfesorHomePage";
import RoditeljHomePage from "./views/RoditeljHomePage";
import UcenikHomePage from "./views/UcenikHomePage";
import UcenikLayout from "./components/UcenikLayout";
import ProfesorLayout from "./components/ProfesorLayout";
import Pocetna from "./views/Pocetna";
import GuestLayout from "./components/GuestLayout";
import PredmetiDeteta from "./views/PredmetiDeteta";
import OceneDeteta from "./views/OceneDeteta";
import UceniciOdeljenja from "./views/UceniciOdeljenja";
import Informacije from "./views/Informacije";


const router=createBrowserRouter([
    {
        path: "/",
        element: <GuestLayout/>,
        children: [
       
          {
            path: "/pocetna",
            element: <Pocetna />,
          },
          {
            path: "/",
            element: <Pocetna />,
          },
        ],
      },

    {
        path: '/',
        element: <DefaultLayout/>,
        children:[
         
        
            {
                path:'/roditelj-home',
                element:<RoditeljHomePage/>
            },
            {
                path:'/ucenik-home',
                element:<PredmetiDeteta/>
            },
            {
                path:'/profesor-home',
                element:<ProfesorHomePage/>
            },
            {
                path:'/predmeti/:id',
                element:<PredmetiDeteta/>
            },
            {
                path:'/ocene/:id/:id',
                element:<OceneDeteta/>
            },
            {
                path:'/odeljenje/:id/',
                element:<UceniciOdeljenja/>
            },
            {
                path:'/odeljenje/:id/:id',
                element:<OceneDeteta/>
            },
            {
                path:'/info',
                element:<Informacije/>
            },
        ],
    },
    {
    
            path:'*',
            element:<NotFound/>    
    }
    /*
    {
       path: '/',
        element: <RoditeljLayout/>,
        children:[
            {
                path:'/roditelj-home',
                element:<RoditeljHomePage/>
            },
        
        ]
    },
        path: '/',
        element: <UcenikLayout/>,
        children:[
            {
                path:'/ucenik-home',
                element:<UcenikHomePage/>
            }
        
        ],

        path: '/',
        element: <ProfesorLayout/>,
        children:[
            {
                path:'/profesor-home',
                element:<ProfesorHomePage/>
            }
        
        ]*/
   // },



])

export default router;