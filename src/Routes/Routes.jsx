import {createBrowserRouter,} from "react-router-dom";
import Root from "../Root";
import Error from "../Error/Error";
import Home from "../Home/Home";
import Login from "../Components/Log/Login/Login";
import SignUp from "../Components/Log/SignUp/SignUp";
import NavCategory from "../Shared/NavCategory/NavCategory";


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root/> ,
        errorElement: <Error/> ,
        children: [
            {
              path: "/",
              element: <Home/> ,
            },
            {
              path: "/category/:category",
              element: <NavCategory/>
            },
            {
              path: "/login",
              element: <Login/> ,
            },
            {
              path: "/signUp",
              element: <SignUp/> ,
            },
            
          ],

    },
]);




export default Routes;