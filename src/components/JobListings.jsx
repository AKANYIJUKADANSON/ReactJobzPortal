import React, { useState, useEffect } from "react";
// import jobs from "../jobs.json";
import JobListing from "./JobListing";
import { DataTable } from "simple-datatables";
import Spinner from "./Spinner";

const JobListings = ({ isHome = false }) => {

  const [loading, setLoading] = useState(true);
  const [jobs, setJob] = useState([]);
  

/**
 * Fetching data and set into the jobs useState
 */
  useEffect( () => {
    
      // function to fetch data
      const fetchJobs = async ()=>{
        try {
          const getdata = await fetch('/api/jobs');
          // Convert fetched data to json format
          const dataToJson = await getdata.json();

          // console.log(dataToJson);
          // set the jobs state
          const recentJobs = isHome ? dataToJson.slice(0, 3) : dataToJson;
          setJob(recentJobs);
        }catch (error){
          console.log('Error while fetching data', error)
        }finally{
          setLoading(false)
        }
      }


    fetchJobs();
  }, [isHome] );

  // const recentJobs = isHome ? jobs.slice(0, 3) : jobs;
  return (
      <section className="bg-blue-50 px-4 py-10 datatable">
        
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? "Recent Jobs" : "Browse Jobs"}
          </h2>

          {loading ? (<Spinner loading = {loading} />) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
              {jobs.map((job) => (          
                <JobListing key={job.id} job = {job} />
              ))}
            </div>
          )}
            
        </div>

      </section>
  );
};
export default JobListings;
