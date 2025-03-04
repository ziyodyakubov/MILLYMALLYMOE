"use client";

import "../app/globals.css";
import {MainLogo} from "@/public/assets/images/svg";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>

            <header className="py-[15px] lg:py-[25px] px-[20px]  lg:px-[80px] bg-[#70372A] border-b-[1px] border-b-[#ffffff3e]">
                <ul className="flex items-center justify-between">
                    <li><a href="#"><Image src={MainLogo} className="lg:w-[240px] w-[150px]" alt="Mainlogo" /></a></li>

                    <li className="lg:flex hidden">
                        <ul className="flex gap-[40px] mr-[50px] items-center text-[#fff]">
                            <li className="hover:underline duration-250 transition-all">
                                <a href="/">BOSH SAHIFA</a>
                            </li>
                            <li className="hover:underline duration-250 transition-all">
                                <a href="/konsertlar">KONSERTLAR</a>
                            </li>
                            <li className="hover:underline duration-250 transition-all">
                                <a href="/biografiya">BIOGRAFIYA</a>
                            </li>
                            <li className="hover:underline duration-250 transition-all">
                                <a href="/ijod">IJOD</a>
                            </li>
                            <li className="hover:underline duration-250 transition-all">
                                <a href="/aloqa">ALOQA</a>
                            </li>
                        </ul>
                    </li>

                    <li onClick={() => setIsOpen(!isOpen)} className="lg:hidden active: block">
                        {isOpen ? <X size={30} /> : <Menu className="text-[#fff]" size={32} />}
                    </li>

                    {isOpen && (
                        <div
                            className="fixed inset-0 bg-black bg-opacity-50"
                            onClick={() => setIsOpen(false)}
                        />
                    )}

                    <li className="lg:flex hidden">
                        <ul className="flex gap-[40px] items-center text-[#fff]">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </li>
                </ul>

                <motion.nav
                    initial={{ y: "-100%", opacity: 0 }}
                    animate={{ y: isOpen ? "0%" : "-100%", opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="fixed top-[0px] z-[999] left-0 w-full md:w-1/2 h-1/1 bg-[#70372A] text-[#fff] shadow-lg p-6"
                >

                    <div className="flex items-center justify-between">
                        <a href="#"><Image src={MainLogo} className="w-[150px]" alt="Mainlogo" /></a>
                        <button onClick={() => setIsOpen(false)}>
                            <X size={32} />
                        </button>
                    </div>
                    <ul className="space-y-4 py-[25px] text-lg">
                        <li className="hover:underline duration-250 transition-all">
                            <a href="/">BOSH SAHIFA</a>
                        </li>
                        <li className="hover:underline duration-250 transition-all">
                            <a href="/konsertlar">KONSERTLAR</a>
                        </li>
                        <li className="hover:underline duration-250 transition-all">
                            <a href="/biografiya">BIOGRAFIYA</a>
                        </li>
                        <li className="hover:underline duration-250 transition-all">
                            <a href="/ijod">IJOD</a>
                        </li>
                        <li className="hover:underline duration-250 transition-all">
                            <a href="/aloqa">ALOQA</a>
                        </li>
                    </ul>
                </motion.nav>
            </header>

        </>
    );
};

export default Header;
