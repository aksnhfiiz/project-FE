// src/components/navbar.tsx
import React, { useState } from "react";
import Profile from '../assets/profile photo.jpeg';

const Navbar: React.FC = () => {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    // Fungsi untuk toggle sidebar
    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    return (
        <>
            <div className="navbar bg-base-100 sticky w-full z-40 top-0">
                <div className="flex-none">
                    <button className="btn btn-square btn-ghost" onClick={toggleSidebar} aria-label="Toggle sidebar">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-5 w-5 stroke-current"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
                <div className="flex-1">
                    <h2 className="text-xl absolute h-15 w-13 text-white font-bold">
                        Portofolio
                    </h2>
                    <a className="btn btn-ghost text-xl absolute h-15 w-13 right-3 text-white font-bold" href="/account">
                        Premium
                    </a>
                    <a className="btn btn-ghost text-xl absolute h-15 w-13 text-white right-4 mr-64 font-bold" href="/">
                        Home
                    </a>
                    <a className="btn btn-ghost text-xl absolute h-15 w-13 text-white right-4 mr-32  font-bold" href="/contact">
                        Contact
                    </a>
                </div>
            </div>

            {/* Sidebar */}
            <div
                className={`fixed inset-y-0 left-0 z-50 w-1/4 bg-gray-300 p-1 rounded-e-box flex flex-col transition-transform duration-300 ${sidebarVisible ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <button className="btn btn-square btn-ghost mb-4" onClick={toggleSidebar} aria-label="Close sidebar">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block h-5 w-5 stroke-current"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
                <div className="flex flex-col items-center">
                    <img
                        src={Profile}
                        alt="Profile"
                        className="rounded-full mb-4 h-36 w-36 object-cover"
                    />
                    <h1 className="text-2xl font-bold text-black">Mochamad Akhsan</h1>
                    <p className="text-black">UI/UX Designer dari Bandung</p>
                    <nav className="mt-8 text-center">
                        <ul className="space-y-4">
                            <li><a href="/skill" className="text-black hover:text-blue-500">Keahlian</a></li>
                            <li><a href="/pendidikan" className="text-black hover:text-blue-500">Pendidikan</a></li>
                            <li><a href="/pengalaman" className="text-black hover:text-blue-500">Pengalaman</a></li>
                            <li><a href="/account" className="text-black hover:text-blue-500">Premium</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Navbar;
