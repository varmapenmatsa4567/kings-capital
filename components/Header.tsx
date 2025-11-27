"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

    const toggleSubmenu = (menu: string) => {
        if (openSubmenu === menu) {
            setOpenSubmenu(null);
        } else {
            setOpenSubmenu(menu);
        }
    };

    const aboutSubmenu = [
        "Our Values",
        "Our Culture",
        "Financial View Results",
        "Achievements",
        "Our Management",
        "Strategic Partner & Associative",
        "International Business Contact",
        "Association With International Organization",
    ];

    const solutionsSubmenu = [
        "Corporate Finance Services",
        "Capital Restructuring Services",
        "Global Wealth Management",
        "Project Financing Services",
        "Venture Capital & Joint Venture",
        "Finance Capacity",
        "Trade Finance",
        "Real Estate",
        "Islamic Finance",
        "Blockchain",
        "Banking and Finance Legal Service",
        "Syndicated Loan and Loan Participation",
    ];

    return (
        <header className="bg-white sticky top-0 z-50 shadow-sm">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-3">
                    <img
                        alt="Kings Financial Capital logo"
                        className="h-12 w-auto"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYu5dMnJo67M6Z3k8P4azzfVWZ6SFD7_e9XBvgTXXxc24TQJIGuHj_LzQ8QMSlKO_HgkFbiXxpk4Dga3NV9TpkU4KsV2kRY6qhMbOk78mvj4aZW1C9752pTGwTiwU03dTBG_k6rwmv32pzZTbTFxkp77htSL6RxrlrUPzy1I5ldDrkGaLqtpNs7jPcJzrmuIIw1wUpUBNiTybPCt4qZS7tTsi8poFKTHKEJ9_Ma2PEiV-3CGrSjiEeLJM9o9_bNPPqpaQrKP5Um94"
                    />
                    <span className="font-[family-name:var(--font-display)] text-xl font-bold text-[#333333] hidden sm:block">
                        Kings Financial Capital
                    </span>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-[#666666]">
                    <Link className="text-[#8B0000] font-semibold relative" href="/">
                        Home
                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#8B0000]"></span>
                    </Link>

                    {/* About Us Dropdown */}
                    <div className="relative group">
                        <button className="hover:text-[#8B0000] transition-colors flex items-center">
                            About Us
                            <span className="material-icons-outlined text-sm ml-1">expand_more</span>
                        </button>
                        <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-100 shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left z-50">
                            <div className="py-2">
                                {aboutSubmenu.map((item, index) => (
                                    <Link
                                        key={index}
                                        href="#"
                                        className="block px-4 py-2 text-sm text-[#666666] hover:bg-gray-50 hover:text-[#8B0000]"
                                    >
                                        {item}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Our Solutions Dropdown */}
                    <div className="relative group">
                        <button className="hover:text-[#8B0000] transition-colors flex items-center">
                            Our Solutions
                            <span className="material-icons-outlined text-sm ml-1">expand_more</span>
                        </button>
                        <div className="absolute left-0 mt-2 w-72 bg-white border border-gray-100 shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left z-50">
                            <div className="py-2">
                                {solutionsSubmenu.map((item, index) => (
                                    <Link
                                        key={index}
                                        href="#"
                                        className="block px-4 py-2 text-sm text-[#666666] hover:bg-gray-50 hover:text-[#8B0000]"
                                    >
                                        {item}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <Link className="hover:text-[#8B0000] transition-colors" href="#">Blog</Link>
                    <Link className="hover:text-[#8B0000] transition-colors" href="/contact">Contact</Link>
                </nav>

                <button
                    className="md:hidden text-[#333333]"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className="material-icons-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 top-full shadow-lg py-4 px-6 flex flex-col space-y-4 max-h-[80vh] overflow-y-auto">
                    <Link className="text-[#8B0000] font-semibold block" href="#" onClick={() => setIsMenuOpen(false)}>Home</Link>

                    {/* Mobile About Us */}
                    <div>
                        <button
                            className="flex justify-between items-center w-full text-[#666666] hover:text-[#8B0000] transition-colors"
                            onClick={() => toggleSubmenu('about')}
                        >
                            About Us
                            <span className="material-icons-outlined text-sm transform transition-transform duration-200" style={{ transform: openSubmenu === 'about' ? 'rotate(180deg)' : 'rotate(0deg)' }}>expand_more</span>
                        </button>
                        {openSubmenu === 'about' && (
                            <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-100 ml-1">
                                {aboutSubmenu.map((item, index) => (
                                    <Link
                                        key={index}
                                        href="#"
                                        className="block text-sm text-[#666666] hover:text-[#8B0000] py-1"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Mobile Our Solutions */}
                    <div>
                        <button
                            className="flex justify-between items-center w-full text-[#666666] hover:text-[#8B0000] transition-colors"
                            onClick={() => toggleSubmenu('solutions')}
                        >
                            Our Solutions
                            <span className="material-icons-outlined text-sm transform transition-transform duration-200" style={{ transform: openSubmenu === 'solutions' ? 'rotate(180deg)' : 'rotate(0deg)' }}>expand_more</span>
                        </button>
                        {openSubmenu === 'solutions' && (
                            <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-100 ml-1">
                                {solutionsSubmenu.map((item, index) => (
                                    <Link
                                        key={index}
                                        href="#"
                                        className="block text-sm text-[#666666] hover:text-[#8B0000] py-1"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <Link className="text-[#666666] hover:text-[#8B0000] transition-colors block" href="#" onClick={() => setIsMenuOpen(false)}>Blog</Link>
                    <Link className="text-[#666666] hover:text-[#8B0000] transition-colors block" href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                </div>
            )}
        </header>
    );
}
