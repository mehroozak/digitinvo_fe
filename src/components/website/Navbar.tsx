import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/elements/navigation-menu";
import { cn } from "@/lib/utils";
import { Home, Rss } from "lucide-react";
import { Link, useLocation } from "react-router";
import type { FC } from "react";
const navigationMenuItems = [
    { title: "Home", href: "/", icon: Home, isActive: true },
    { title: "Login", href: "/auth/login", icon: Rss },
];
const Navbar: FC<any> = () => {
    const {pathname} = useLocation()

    return (
        <NavigationMenu>
            <NavigationMenuList className="space-x-8">
                {navigationMenuItems.map((item) => (
                    <NavigationMenuItem key={item.title}>
                        <NavigationMenuLink
                            className={cn(
                                "relative group inline-flex h-9 w-max items-center justify-center px-0.5 py-2 text-sm font-medium",
                                "before:absolute before:bottom-0 before:inset-x-0 before:h-[2px] before:bg-primary before:scale-x-0 before:transition-transform",
                                "hover:before:scale-x-100 hover:text-accent-foreground",
                                "focus:before:scale-x-100 focus:text-accent-foreground focus:outline-none",
                                "disabled:pointer-events-none disabled:opacity-50",
                                "data-[active]:before:scale-x-100 data-[state=open]:before:scale-x-100"
                            )}
                            asChild
                            active={item.href === pathname}
                        >
                            <Link to={item.href}>
                                <item.icon className="h-5 w-5 mr-2" />
                                {item.title}
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    );
}

export default Navbar