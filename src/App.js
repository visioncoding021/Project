import React from 'react';
import Header from './components/Header';
import Body from './Body.js';
import './index.css';
import { createBrowserRouter,Outlet} from 'react-router-dom';
import About from './About.js';
import Contact from './Contact.js';
import Error from './Error.js';
import RestaurantMenu from './RestaurantMenu.js';


const AppLayout = ()=>{
    return(
     <div className='app'>
       <Header></Header>  
        <Outlet/> 
     </div>
    )
  }

  export const appRouter = createBrowserRouter([
    {
        path: "/",
        element : <AppLayout/>,
        children:[
          {
            path:"/",
            element:<Body/>
          },
          {
            path : "/about",
            element :<About/>
        },{
            path:"/contactus",
            element: <Contact/>
        },{
          path:"restaurants/:resId",
          element:<RestaurantMenu></RestaurantMenu>
        }
        ],
        errorElement:<Error/>
    }
    
])
  export default AppLayout;