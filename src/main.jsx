import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import ContentInfo from './components/ContentInfo/ContentInfo';
import jobLoader from './Loader/jobLoader';
import JobFeaturedDetail from './components/JobFeaturedDetail/JobFeaturedDetail';
import AppliedJob from './components/AppliedJob/AppliedJob';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <ContentInfo/>,
        loader:jobLoader
      },
      {
        path:'featured_details/:id',
        element:<JobFeaturedDetail/>,
      },
     {
      path:'appliedJob',
      element:<AppliedJob></AppliedJob>
     },
    ],
  },
])
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
