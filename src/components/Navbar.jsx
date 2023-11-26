import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Navbar = () => {
    const { user, logOut } = useAuth();
    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => {

            });
    }
    console.log('from navbar', user)
    return (
        <>
            <div className="text-gray-600 body-font container mx-auto ">
                <div className=" mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src="https://i.ibb.co/1XFsYWr/logo.png" className='h-14' alt="" />
                        <span className="text-xl">MediCamp</span>
                    </Link>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link to="/" className="mr-5 hover:text-gray-900 font-bold">Home</Link>
                        <Link to="/available-camp" className="mr-5 hover:text-gray-900 font-bold">Available Camps</Link>
                        <Link to="/dashboard" className="mr-5 hover:text-gray-900 font-bold">Dashboard</Link>
                        <Link to="/contact-us" className="mr-5 hover:text-gray-900 font-bold">Contact Us</Link>
                    </nav>

                    {
                        user ?
                            <>
                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle bg-blue-800 avatar">

                                        <div className="w-10 rounded-full">
                                            {
                                                user.photoURL ?
                                                    <img src={`${user.photoURL}`} alt="" referrerpolicy="no-referrer" />
                                                    :
                                                    <div className='font-bold text-2xl text-white'>{user.email.slice(0, 1)}</div>
                                            }
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                        <li>
                                            <a className="justify-between">
                                                {user.displayName ? user.displayName : user.email}

                                            </a>
                                        </li>
                                        <li onClick={handleLogOut}><a>Logout</a></li>
                                    </ul>
                                </div>
                            </>


                            :

                            <div className='flex'>
                                <Link to="/login" className='btn bg-red-700 text-white'>
                                    Login
                                </Link>
                                <Link to="/register" className='ml-3 btn text-white bg-red-700'>
                                    Register
                                </Link>
                            </div>
                    }
                </div>
            </div>
        </>
    );
};

export default Navbar;