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
          //  path: "/login",
          //  element: <Login />,
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
                element:<UcenikHomePage/>
            },
            {
                path:'/profesor-home',
                element:<ProfesorHomePage/>
            }
        
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