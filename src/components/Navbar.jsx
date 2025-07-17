import React from 'react'
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';
// import { useContext } from 'react';
// import { AuthContext } from '../contexts/contexts';
import ImageComponent from './ImageComponent';
import user_place_holder from '../assets/user_place_holder.jpg';
import { IoLockClosed } from 'react-icons/io5';


const Navbar = () => {
  // const authenticatedUser = useContext(AuthContext);
  // console.log("Authenticated User: ", authenticatedUser);

  const user = JSON.parse(localStorage.getItem('authenticated_user')).authenticated_user;
  // const username = user ? JSON.parse(user).name : '';
  // console.log("UserData: " + user)

  const linkClass = ( {isActive} ) => isActive ? "text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2" : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";

  return (
    <>
        <nav className="bg-indigo-700 border-b border-indigo-500">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">
              <div
                className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                
                <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
                  <img
                    className="h-10 w-auto"
                    src={logo}
                    alt="React Jobs"/>
                  <span className="hidden md:block text-white text-2xl font-bold ml-2">
                      React Jobs
                    </span>
                </NavLink>
                <div className="md:ml-auto flex">
                  <div className="flex space-x-2">
                    <NavLink
                      to="/home"
                      className={ linkClass} >Home</NavLink>
                    <NavLink
                      to="/jobs"
                      className={ linkClass}
                      >Jobs</NavLink>
                      
                    <NavLink
                      to="/add-job"
                      className={ linkClass}
                      >Add Job</NavLink>  

                      <NavLink
                      to="/jobs-tabular"
                      className={ linkClass}
                      >Tabular</NavLink> 

                      <NavLink
                      to="/files"
                      className={ linkClass}
                      >Files</NavLink> 

                      {user ? (
                        <>
                          <span className="text-white text-lg font-semibold my-2">
                            {user.name}
                          </span>
                          
                          <ImageComponent 
                            src={user_place_holder} 
                            classNameProps="h-10 w-10 rounded-full" />

                        </>
                      ) : (
                        <NavLink to="/" className={linkClass}>
                          Login
                        </NavLink>
                      )}

                      <NavLink to="/logout" className={linkClass}>
                        <IoLockClosed className="inline-block mr-1" />
                      </NavLink>

                  </div>



                </div>
              </div>
            </div>
          </div>
        </nav>
    </>
  )
}

export default Navbar