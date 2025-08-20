import React from 'react';
import { Outlet } from 'react-router';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '../components/elements/sidebar';
import { AppSidebar } from '../components/portal/shared/AppSideBar';

const PortalLayout: React.FC<{ children?: React.ReactNode }> = () => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                    <SidebarTrigger className="-ml-1" />

                </header>
                <div className="flex flex-1 flex-col gap-4 p-4">
                    <Outlet />
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
};

export default PortalLayout;