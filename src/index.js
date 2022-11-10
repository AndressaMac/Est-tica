import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter , RouterProvider, Route} from 'react-router-dom'
import Home from './pages/Home';



const router = createBrowserRouter([
  {
    path: '/',
    element: <app/>
  }
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


