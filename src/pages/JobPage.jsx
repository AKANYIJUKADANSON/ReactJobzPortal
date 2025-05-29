import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { NavLink } from 'react-router-dom';
import { IoAddCircleOutline } from 'react-icons/io5';

const JobPage = ( {deleteJob} ) => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [job, setJob] = useState([]);
    
    const navigate = useNavigate();

    const onDeleteClick = (jobId) => {
        const confirm = window.confirm("Are you sure you want to delete the job?");

        if (!confirm) return;

        deleteJob(jobId);

        navigate('/jobs');
    }
    
  
  /**
   * Fetching data and set into the jobs useState
   */
    useEffect( () => {
      
        // function to fetch data
        const fetchJob = async ()=>{
          try {
            const getdata = await fetch(`/api/jobs/${id}`);
            // Convert fetched data to json format
            const dataToJson = await getdata.json();
            setJob(dataToJson);
            // console.log(dataToJson)
          }catch (error){
            console.log('Error while fetching data', error)
          }finally{
            setLoading(false)
          }
        }
  
  
      fetchJob();
    }, [] );


  return loading ? <Spinner /> : 
    <>
        <section>
            <div className="container m-auto py-6 px-6">
                <NavLink
                to="/jobs"
                className="text-indigo-500 hover:text-indigo-600 flex items-center">
                <i className="fas fa-arrow-left mr-2"></i> Back to Job Listings
                </NavLink>
            </div>
        </section>

        <section className="bg-indigo-50">
            <div className="container m-auto py-10 px-6">
                <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
                    <main>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                            <div className="text-gray-500 mb-4">{job.type}</div>
                            <h1 className="text-3xl font-bold mb-4">
                                {job.title}
                            </h1>
                            <div
                                className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                                <i
                                className="fa-solid fa-location-dot text-lg text-orange-700 mr-2"
                                ></i>
                                <p className="text-orange-700">{job.location}</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                            <h3 className="text-indigo-800 text-lg font-bold mb-6">
                                Job Description
                            </h3>

                            <p className="mb-4"> {job.description} </p>

                            <h3 className="text-indigo-800 text-lg font-bold mb-2">Salary</h3>

                            <p className="mb-4">{job.salary} / Year</p>
                        </div>
                    </main>

                    <aside>
                        <div className="bg-white p-2 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-6">Company Info</h3>

                            <h2 className="text-2xl">NewTek Solutions</h2>

                            <hr className="my-4" />

                            <h3 className="text-xl">Contact Email:</h3>

                            <p className="my-2 bg-indigo-100 font-bold">
                                contact@newteksolutions.com
                            </p>

                            <p className="my-2 bg-indigo-100 p-2 font-bold">555-555-5555</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                            <h3 className="text-xl font-bold">Manage Job</h3>
                            <NavLink
                                to="/add-job.html"
                                className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                                >Edit Job</NavLink>
                            <button
                                onClick={ () => onDeleteClick(job.id) }
                                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"> Delete Job
                            </button>
                        </div>
                    </aside>

                </div>
            </div>
        </section>
    </>

}

export default JobPage