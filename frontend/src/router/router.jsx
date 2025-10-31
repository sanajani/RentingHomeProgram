// dependencies
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

// layouts
import MainLayout from '../Layouts/MainLayout'
import PageNotFound from '../pages/PageNotFound'
// pages

export const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <h1>Home</h1>
            },
            {
                path:"about",
                element: <h1>About</h1>
            }
            ]
        
    },
    {
        path:'auth',
        element: <h1>Auth</h1>,
        children: [
            {
                path:'login',
                element: <h1>Login page</h1>
            },
            {
                path:'signup',
                element: <h1>Signup page</h1>
            }
        ]
    },
    {
        path:'*',
        element: <PageNotFound />
    }
])