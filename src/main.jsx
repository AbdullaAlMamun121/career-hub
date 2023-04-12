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
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorPage from './ErrorPage';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorPage />,
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
        path:'statistics',
        element:<Statistics></Statistics>
      },
     {
      path:'appliedJob',
      element:<AppliedJob></AppliedJob>,
      loader:jobLoader
     },
     {
      path:'blog',
      element:<Blog></Blog>
     }
    ],
  },
])
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
