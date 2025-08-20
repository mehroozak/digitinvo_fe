import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/website/Navbar';

const WebsiteLayout: React.FC<{ children?: React.ReactNode }> = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default WebsiteLayout;