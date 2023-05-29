import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Pages/Home/Home';
import AllToys from './Pages/AllToys/AllToys';
import MyToys from './Pages/MyToys/MyToys';
import AddToy from './Pages/AddToy/AddToy';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Blog from './Pages/Blog/Blog';
import SingleToy from './Pages/SingleToy/SingleToy';
import ToyCategories from './Pages/Home/ToyCategories';
import PrivateRoute from './Routers/PrivateRouters/PrivateRouter';
import UpdateToy from './Pages/AddToy/UpdateToy';
import Page404 from './Page404/Page404';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
        loader: () => fetch("https://toys-zone-server.vercel.app/toy?limit=20"),
      },      
      {
        path: "/details/:id",
        element: <AllToys></AllToys>,
        loader: () => fetch("https://toys-zone-server.vercel.app/toy"),
      },
      {
        path: "/myToys/:email", 
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
      },
      {
        path: "/toy/subcategory/:subCategory",
        element: <ToyCategories></ToyCategories>,
        loader: () => fetch("https://toys-zone-server.vercel.app/toy"),
      },
      {
        path: "/addToy",
        element: <PrivateRoute><AddToy></AddToy></PrivateRoute>,
      },
      {
        path: "/updateToy/:id",
        element: <PrivateRoute><UpdateToy></UpdateToy></PrivateRoute>,
        loader: () => fetch("https://toys-zone-server.vercel.app/toy"),
      },
      {
        path: "/toy/:id",
        element: <PrivateRoute><SingleToy></SingleToy></PrivateRoute>,
        loader: ({ params }) => fetch(`https://toys-zone-server.vercel.app/toy/${params.id}`),
      },
      {
        path: "/myBlog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
    
  },
  {
    path: "/*",
    element: <Page404></Page404>,
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>
);

