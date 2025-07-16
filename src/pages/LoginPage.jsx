import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import login_image from '../assets/login_image.jpg';


const LoginPage = () => {
    // const [loginUser, setLoginUser] = useState({});

    const [useremail, setUseremail] = useState();
    const [password, setUserPassword] = useState();

    const navigate = new useNavigate();

    const login = async (event) => {
        event.preventDefault();

        try{
                
            const response = await fetch('/api/', {
                method: 'POST',
                headers: {
                    'Content-type' : 'application/json'
                },

                body: JSON.stringify({useremail, password})
            });

            const data = await response.json();
            console.log(data);

            if (data.status == 200) {
                // Save the authenticated user data in the context
                localStorage.setItem('authenticated_user', JSON.stringify(data));
                navigate('/home');

            } else {
                // toast.error(data.message);
                console.log(data.message);
                return navigate('/');
            }

        }catch(e){
            // setError('An error occurred. Please try again.');
            console.log(e.message || 'Internal server error. please try again later.');
        }

    }

    return (
        <>
            <div className="min-h-screen flex flex-col md:flex-row">
                {/* Image Section */}
                <div className="md:w-1/2 bg-gray-100 flex items-center justify-center">
                    <img
                    src={login_image}
                    alt="Beach Landscape"
                    className="object-cover w-full h-full md:h-screen"
                    />
                </div>
            
                {/* Login Form Section */}
                <form onSubmit={login} className="md:w-1/2 flex items-center justify-center p-6 bg-white">
                    <div className="w-full max-w-md">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Login</h2>
                        <div className="space-y-4">
                            <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your email" name='useremail'
                                value={useremail}
                                onChange={ (e)=> setUseremail(e.target.value) }
                            />
                            </div>
                            <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your password" name='password'
                                value={password}
                                onChange={ (e)=> setUserPassword(e.target.value) }

                            />
                            </div>
                            <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                id="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                Remember me
                                </label>
                            </div>
                            <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
                            </div>
                            <button type='submit'
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            Sign In
                            </button>
                        </div>
                    </div>
                </form>
            </div>

        </>
    )
}

export { LoginPage as default };