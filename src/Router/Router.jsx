import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home/Home';
import Login from '../pages/Home/Login/Login';
import Error from '../components/Error/Error';
import SingIn from '../pages/Home/SingIn/SingIn';
const myCreateRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement:<Error></Error>,
        children: [
            {
                path:'/',
                element: <Home></Home>,
                loader: () => fetch('/data.json')
            },
            {
                path:'/login',
               element: <Login></Login>
               
            },
            {
                path:'/signIn',
                element: <SingIn></SingIn>
               
            },
            {
                path: '/donations/:id',
               
                loader: () => fetch('/data.json')
            }
        ]
    }
])

export default myCreateRoute;