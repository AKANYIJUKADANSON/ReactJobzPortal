import React from 'react'
import './index.css'

// routing for pages
import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider 
} from 'react-router-dom'

import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import PageNotFound from './pages/PageNotFound';
import JobPage from './pages/JobPage';
import TabularTable from './components/TabularTable';



const router = createBrowserRouter(
  createRoutesFromElements( 
    <>
      <Route path='/' element={ <MainLayout /> }>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/jobs/:id' element={<JobPage />} />
        <Route path='/jobs-tabular' element={<TabularTable />} />
      </Route>  

      <Route path='*' element={<PageNotFound />} />
    </>
  )
);

const App = ()=> {

  return <RouterProvider router={router} />;
};

export default App
