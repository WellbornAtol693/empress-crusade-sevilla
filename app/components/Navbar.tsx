"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag } from "lucide-react";

const links =[
    { name: "Home", href: "/" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [bagItemCount, setBagItemCount] = useState(0);

    return (
        <header className="border-b bg-violet-300">
            <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl bg-red-400">
                <Link href="/">
                    <h1 className="text-2xl md:text-4xl font-bold">
                        SAVON<span className="text-primary">D'ILE</span>
                    </h1>
                </Link>

                <nav className="hidden gap-12 lg:flex 2xl:ml-16">
                    {links.map((link, idx) => (
                        <div key={idx}>
                            {pathname === link.href ? (
                                <Link
                                    className="text-lg font-semibold text-primary" 
                                    href={link.href}
                                >
                                    {link.name}
                                </Link>
                            ) : (
                                <Link 
                                    href={link.href}
                                    className="text-lg font-semibold text-slate-50 transition duration-100 hovwe:text-primary"
                                >
                                    {link.name}
                                </Link>
                            )}
                        </div>
                    ))}
                </nav>

                <div className="flex divide-x border-r sm:border-l">
                    <Button 
                        //variant={"outline"}//
                        className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none"
                    >
                        <ShoppingBag />
                        <span>
                            {bagItemCount}
                        </span>
                    </Button>
                </div>
            </div>
        </header>
    );    
}
