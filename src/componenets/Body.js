import React from 'react';
import Browser from './Browser';
import Login from './login';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login />
        },
        {
            path: '/browse',
            element: <Browser />
        }
    ]);
  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
)
}

export default Body