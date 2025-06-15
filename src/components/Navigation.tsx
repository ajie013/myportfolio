"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
    const path = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { path: "/", title: "Home" },
        { path: "/education", title: "Education" },
        { path: "/skills", title: "Skills" },
        { path: "/projects", title: "Projects" },
    ];

    const linkClasses = (href: string) =>
        `block px-4 py-2 tracking-wide transition-colors duration-300
        ${
            path === href
                ? "text-secondary-text font-bold underline underline-offset-4"
                : "text-primary-text hover:text-secondary-text"
        }`;

    return (
        <header className="fixed top-0 left-0 right-0 z-50 h-[60px] bg-foreground text-secondaryText shadow-md">
            <nav className="mx-auto flex h-full max-w-6xl items-center justify-between px-4">
             
                <motion.h1
                    className="text-xl font-bold text-secondary-text"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Aljon Gemida
                </motion.h1>

                <ul className="hidden gap-8 md:flex">
                    {links.map((item, index) => (
                        <motion.li
                            key={index}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.3 }}
                            whileHover={{ scale: 1.1 }}
                        >
                            <Link href={item.path} className={linkClasses(item.path)}>
                                {item.title}
                            </Link>
                        </motion.li>
                    ))}
                </ul>

              
                    <Menu size={28} className="block md:hidden cursor-pointer"  onClick={() => setIsOpen(true)} ></Menu>
            </nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.aside
                        className="fixed top-0 right-0 z-[60] h-full w-[250px] bg-foreground shadow-lg md:hidden"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                    >
                        <div className="flex items-center justify-between px-4 py-3">
                            <span className="text-lg font-semibold text-primaryText"> </span>
                            <X size={24} className="cursor-pointer"  onClick={() => setIsOpen(false)}/>
                          
                        </div>

                        <ul className="flex flex-col gap-4 px-4">
                            {links.map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05, duration: 0.25 }}
                                    onClick={() => setIsOpen(false)}
                                >
                                    <Link href={item.path} className={linkClasses(item.path)}>
                                        {item.title}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.aside>
                )}
            </AnimatePresence>
        </header>
    );
}
