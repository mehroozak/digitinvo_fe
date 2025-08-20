import * as React from "react"
import { ChevronRight } from "lucide-react"

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/elements/collapsible"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from "@/components/elements/sidebar"
import { Link, useLocation } from "react-router"

// This is sample data.
const data = [
    {
        title: "Post Invoice",
        url: "/app",  
    },
    {
        title: "All Invoices",
        url: '/app/invoices',       
    },
    {
        title: "Customers",
        url: "/app/customers",       
    },

    {
        title: "Settings",
        url: "#",
        items: [
            {
                title: "Organization config",
                url: "#",
            },
        ],
    },
]


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

    const {pathname} = useLocation()

    return (
        <Sidebar {...props}>
            <SidebarHeader>

                Header Here
            </SidebarHeader>
            <SidebarContent className="gap-0">
                {/* We create a collapsible SidebarGroup for each parent. */}
                {data.map((item) => (
                    item.items && item.items.length ?
                        <Collapsible
                            key={item.title}
                            title={item.title}
                            className="group/collapsible"
                        >
                            <SidebarGroup>
                                <SidebarGroupLabel
                                    asChild
                                    className="group/label text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sm"
                                >
                                    <CollapsibleTrigger>
                                        {item.title}{" "}
                                        <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                                    </CollapsibleTrigger>
                                </SidebarGroupLabel>
                                <CollapsibleContent>
                                    <SidebarGroupContent>
                                        <SidebarMenu>
                                            {item.items.map((item) => (
                                                <SidebarMenuItem key={item.title}>
                                                    <SidebarMenuButton asChild isActive={item.url === pathname}>
                                                        <a href={item.url}>{item.title}</a>
                                                    </SidebarMenuButton>
                                                </SidebarMenuItem>
                                            ))}
                                        </SidebarMenu>
                                    </SidebarGroupContent>
                                </CollapsibleContent>
                            </SidebarGroup>
                        </Collapsible> :
                        <SidebarGroup key={item.title}>
                            <SidebarGroupLabel
                                asChild
                                className="group/label text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sm"
                            >
                                    <SidebarMenuButton asChild isActive={item.url === pathname}>
                                        <Link to={item.url}>{item.title}</Link>
                                    </SidebarMenuButton>
                            </SidebarGroupLabel>
                        </SidebarGroup>

                ))}
            </SidebarContent>
            <SidebarRail />
        </Sidebar >
    )
}
