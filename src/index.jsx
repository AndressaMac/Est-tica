import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter , RouterProvider, Route} from 'react-router-dom'
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import './styles/home.css';




const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path:'/signup',
    element: <SignUp/>

  },
  {
    path:'/login',
    element: <Login/>
  }
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


