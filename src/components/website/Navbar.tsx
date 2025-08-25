import { Book, Menu, Sunset, Trees, Zap } from "lucide-react";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/elements/accordion";
import { Button } from "@/components/elements/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/elements/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/elements/sheet";
import { Link, NavLink, useLocation } from "react-router";
import { Separator } from "../elements/separator";

interface MenuItem {
    title: string;
    url: string;
    description?: string;
    icon?: React.ReactNode;
    items?: MenuItem[];
}

interface Navbar1Props {
    logo?: {
        url: string;
        src: string;
        alt: string;
        title: string;
    };
    menu?: MenuItem[];
    auth?: {
        login: {
            title: string;
            url: string;
        };
        signup: {
            title: string;
            url: string;
        };
    };
}

const Navbar1 = ({
    logo = {
        url: "/",
        src: "/src/assets/di_logo.png",
        alt: "logo",
        title: "DigitInvo",
    },
    menu = [
        { title: "Home", url: "/" },
        {
            title: "Resources",
            url: "#",
            items: [
                {
                    title: "Help Center",
                    icon: <Zap className="size-5 shrink-0" />,
                    url: "#",
                },
            ],
        },
        {
            title: "Pricing",
            url: "",
        },
        {
            title: "Blog",
            url: "",
        },
    ],
    auth = {
        login: { title: "Login", url: "/auth/login" },
        signup: { title: "Sign up", url: "#" },
    },
}: Navbar1Props) => {
    return (
        <section>
            <div className="container-fluid">
                {/* Desktop Menu */}
                <nav className="hidden justify-between lg:flex py-2 px-2">
                    <div className="flex items-center gap-2">
                        {/* Logo */}
                        <Link to={logo.url} className="flex items-center gap-2">
                            <img
                                src={logo.src}
                                className="max-h-15 dark:invert"
                                alt={logo.alt}
                            />
                            <span className="text-lg font-semibold tracking-tighter">
                                {logo.title}
                            </span>
                        </Link>
                        <div className="flex items-center">
                            <NavigationMenu>
                                <NavigationMenuList>
                                    {menu.map((item) => renderMenuItem(item))}
                                </NavigationMenuList>
                            </NavigationMenu>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Button asChild variant="outline" size="sm">
                            <Link to={auth.login.url}>{auth.login.title}</Link>
                        </Button>
                        <Button asChild size="sm">
                            <Link to={auth.signup.url}>{auth.signup.title}</Link>
                        </Button>
                    </div>
                </nav>
                <Separator className=" h-6 bg-border" />


                {/* Mobile Menu */}
                <div className="block lg:hidden">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link to={logo.url} className="flex items-center">
                            <img
                                src={logo.src}
                                className="max-h-12 dark:invert"
                                alt={logo.alt}
                            />
                            <span className="text-lg font-semibold tracking-tighter">
                                {logo.title}
                            </span>
                        </Link>
                        {/* Mobile Menu Button */}
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <Menu className="size-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent className="overflow-y-auto">
                                <SheetHeader>
                                    <SheetTitle>
                                        <Link to={logo.url} className="flex items-center gap-2">
                                            <img
                                                src={logo.src}
                                                className="max-h-12 dark:invert"
                                                alt={logo.alt}
                                            />
                                            <span className="text-lg font-semibold tracking-tighter">
                                                {logo.title}
                                            </span>
                                        </Link>
                                    </SheetTitle>
                                </SheetHeader>
                                <div className="flex flex-col gap-6 p-4">
                                    <Accordion
                                        type="single"
                                        collapsible
                                        className="flex w-full flex-col gap-4"
                                    >
                                        {menu.map((item) => renderMobileMenuItem(item))}
                                    </Accordion>

                                    <div className="flex flex-col gap-3">
                                        <Button asChild variant="outline">
                                            <Link to={auth.login.url}>{auth.login.title}</Link>
                                        </Button>
                                        <Button asChild>
                                            <Link to={auth.signup.url}>{auth.signup.title}</Link>
                                        </Button>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </section>
    );
};

const renderMenuItem = (item: MenuItem) => {
    const {pathname} = useLocation()
    if (item.items) {
        return (
            <NavigationMenuItem key={item.title}>
                <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                    {item.items.map((subItem) => ( 
                        <NavigationMenuLink asChild key={subItem.title} className="w-lg">
                           {/* <SubMenuLink item={subItem} /> */}
                        </NavigationMenuLink>
                    ))}
                </NavigationMenuContent>
            </NavigationMenuItem>
        );
    }

    return (
        <NavigationMenuItem key={item.title}>
            <NavLink
                to={item.url}
                className={`${pathname === item.url ? 'text-accent-foreground' : ''} bg-background hover:bg-muted hover:text-accent-foreground group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors`}
            >
                {item.title}
            </NavLink>
        </NavigationMenuItem>
    );
};

const renderMobileMenuItem = (item: MenuItem) => {
    if (item.items) {
        return (
            <AccordionItem key={item.title} value={item.title} className="border-b-0">
                <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
                    {item.title}
                </AccordionTrigger>
                <AccordionContent className="mt-2">
                    {item.items.map((subItem) => (
                        <SubMenuLink key={subItem.title} item={subItem} />
                    ))}
                </AccordionContent>
            </AccordionItem>
        );
    }

    return (
        <Link key={item.title} to={item.url} className="text-md font-semibold">
            {item.title}
        </Link>
    );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
    return (
        <Link
            className="hover:bg-muted hover:text-accent-foreground flex select-none flex-row gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors"
            to={item.url}
        >
            <div className="text-foreground">{item.icon}</div>
            <div>
                <div className="text-sm font-semibold">{item.title}</div>
                {item.description && (
                    <p className="text-muted-foreground text-sm leading-snug">
                        {item.description}
                    </p>
                )}
            </div>
        </Link>
    );
};

export default Navbar1;
