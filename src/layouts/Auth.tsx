import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/website/Navbar';

const AuthLayout: React.FC<{ children?: React.ReactNode }> = () => {
    return (
        <div>
            <Navbar />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <Outlet />
                <div className='w-full h-full hidden md:block'>
                    <img
                        src="../src/assets/images/Data_security_01.jpg"
                        alt="Authentication Illustration"
                        className="w-full h-auto object-cover rounded-lg shadow-md"
                    />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;