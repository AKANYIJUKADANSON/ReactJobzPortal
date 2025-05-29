
import React, { useState, useEffect } from "react";
// import jobs from "../jobs.json";
import JobListing from "./JobListing";
import { DataTable } from "simple-datatables";
import { BsThreeDotsVertical } from "react-icons/bs";

const TabularTable = () => {

    // const recentJobs = 
  const [jobs, setJob] = useState([]);
  // const [loading, setLoading] = useState(true);

/**
 * Fetching data and set into the jobs useState
 */
  useEffect( () => {
    // function to fetch data
    const fetchJobs = async ()=>{
      const getdata = await fetch('http://localhost:8080/jobs');
      // Convert fetched data to json format
      const dataToJson = await getdata.json();

      // console.log(dataToJson);
      // set the jobs state
      const recentJobs = dataToJson;
      setJob(recentJobs);
      
    }

    fetchJobs();
  }, [] );

  return (
      <section className="bg-blue-50 px-4 py-10 datatable">
        <h2>Number of Jobs: <span>{jobs.length}</span></h2>
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            { "Browse Jobs"}
          </h2>
          <div className="w-full relative flex flex-col overflow-auto bg-white shadow-md rounded-md p-4">

            <table className="w-full">
                <thead>
                    <tr>
                        <th className="border-b-2 text-left">Title</th>
                        <th className="border-b-2 text-left">Type</th>
                        <th className="border-b-2 text-left">Description</th>
                        <th className="border-b-2 text-left">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {jobs.map((job) => (          
                        <tr>
                            <td className="border-b-2">{job.title}</td>
                            <td className="border-b-2">{job.type}</td>
                            <td className="border-b-2">{job.description}</td>
                            <td className="border-b-2"> <BsThreeDotsVertical className="text-center" /> </td>
                        </tr>
                    ))}
                </tbody>

             </table>

          </div>
        </div>

      </section>
  );
};

export default TabularTable





  

  

