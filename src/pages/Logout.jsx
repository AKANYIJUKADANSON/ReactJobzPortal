import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Perform any necessary cleanup or side effects here
        const handleLogout = () => {
            localStorage.clear();
            navigate('/');
        };

        handleLogout();
    }, []);
    // Clear local storage to log out the user

}

export default Logout