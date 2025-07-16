import React from 'react';
import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobListings from '../components/JobListings';
import ViewAllJobs from '../components/ViewAllJobs';
// import { useContext } from 'react';
// import { AuthContext } from '../contexts/contexts';

const HomePage = () => {

  // const authenticatedUser = useContext(AuthContext);
  // console.log("Authenticated User: ", authenticatedUser);

  return (
    <>
        <Hero />
        <HomeCards />
        <JobListings isHome = {true} />
        <ViewAllJobs />
    </>
  )
}

export default HomePage