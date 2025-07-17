import {React} from 'react'
import './index.css'

// routing for pages
import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider 
} from 'react-router-dom'

import LoginPage from './pages/LoginPage';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import PageNotFound from './pages/PageNotFound';
import JobPage from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import TabularTable from './components/TabularTable';
import Logout from './pages/Logout';
import FilesPage from './pages/FilesPage'


const App = ()=> {

  // Add new job
  const addNewJob = async (newJob) => {

    // adding the job
    await fetch('/api/jobs/add-job', {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },

      body: JSON.stringify(newJob)
      
    });
    
    return;
  };
  // Delete a job
  const deleteJob = async (id) => {

    // const res = await fetch(`/api/jobs/delete/${id}`, {
    await fetch(`/api/jobs/delete/${id}`, {
      method: 'DELETE'
    });

    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements( 
      <>
        <Route index element={<LoginPage />} />
        <Route path='/logout' element={<Logout />} />

          <Route path='/' element={ <MainLayout /> }>
            <Route path='/home' element={<HomePage />} />
            <Route path='/jobs' element={<JobsPage />} />
            <Route path='/add-job' element={<AddJobPage addJobSubmit = {addNewJob} />} />
            <Route path='/add-job' element={<AddJobPage />} />
            <Route path='/jobs/:id' element={<JobPage deleteJob = {deleteJob} />} />
            <Route path='/jobs-tabular' element={<TabularTable />} />
            <Route path='/files' element={<FilesPage />} />
          </Route> 

        {/* Page Not Found */} 

        <Route path='*' element={<PageNotFound />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default App
