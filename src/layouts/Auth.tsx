import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/website/Navbar';

const AuthLayout: React.FC<{ children?: React.ReactNode }> = () => {
    return (
        <div>
            <Navbar />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <Outlet />
                <div className='w-full h-screen hidden md:block bg-primary flex items-center justify-center'>
                    <img className='max-h-96 max-w-96' src="/src/assets/di_logo.png" alt="DigitInvo Logo" />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;