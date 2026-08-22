import { useState } from "react";
import React from 'react';
import logo from '../assets/logo.png';

function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const scrollToSection = (id) => (e) => {
        e.preventDefault();
        const el = document.getElementById(id);
        if (el) {
            const navbarOffset = 90; // adjust to match your navbar's actual height
            const y = el.getBoundingClientRect().top + window.pageYOffset - navbarOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
        setMobileOpen(false);
    };

    const navLinks = [
        { label: 'Home', id: 'hero' },
        { label: 'About', id: 'about' },
        { label: 'Projects', id: 'projects' },
        { label: 'Testimonials', id: 'testimonials' },
        { label: 'Contact', id: 'contact' }, // matches id="contact" in Home.jsx
    ];

    return (
        <div className="bg-black text-white fixed top-0 left-0 w-full pl-5 pr-5 flex items-center justify-between z-30">

            <img src={logo} alt="Logo" className="h-13 md:h-13" />

            {/* Desktop nav */}
            <div className="hidden md:flex items-center space-x-6 ml-auto p-5">
                {navLinks.map((link) => (
                    <a
                        key={link.id}
                        href={`#${link.id}`}
                        onClick={scrollToSection(link.id)}
                        className="hover:nounderline font-semibold cursor-pointer"
                    >
                        {link.label}
                    </a>
                ))}
                <button
                    type="submit"
                    className="w-fit flex items-center gap-3 bg-blue-700 hover:bg-blue-500 transition-colors text-white font-semibold rounded-full pl-6 pr-2 py-2"
                >
                    My Resume
                    <span className="bg-white text-blue-700 rounded-full w-8 h-8 flex items-center justify-center">
                        ↗
                    </span>
                </button>
            </div>

            {/* Burger button (mobile only) */}
            <button
                type="button"
                className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 ml-auto z-50"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
            >
                <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>

            {/* Mobile dropdown */}
            {mobileOpen && (
                <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-black/95 flex flex-col items-center justify-center space-y-6 z-40">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            onClick={scrollToSection(link.id)}
                            className="font-semibold text-xl cursor-pointer"
                        >
                            {link.label}
                        </a>
                    ))}
                    <button
                        type="submit"
                        className="w-fit flex items-center gap-3 bg-blue-700 hover:bg-blue-500 transition-colors text-white font-semibold rounded-full pl-6 pr-2 py-2"
                    >
                        My Resume
                        <span className="bg-white text-blue-700 rounded-full w-8 h-8 flex items-center justify-center">
                            ↗
                        </span>
                    </button>
                </div>
            )}

        </div>
    );
}

export default Navbar;