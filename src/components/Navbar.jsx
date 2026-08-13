import { useState, useEffect } from "react";
import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import arrowUp from '../assets/arrow-up.png';

function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleMobileLink = () => setMobileOpen(false);

    return (
        <div className="bg-black text-white px-4 py-4  fixed top-0 left-0 w-full flex items-center justify-between z-30">

            <img src={logo} alt="Logo" className="h-8 md:h-10" />

            {/* Desktop nav */}
            <div className="hidden md:flex items-center space-x-6 ml-auto">
                <Link to="/" className="hover:nounderline font-semibold">Home</Link>
                <Link to="/about" className="hover:nounderline font-semibold">About</Link>
                <Link to="/projects" className="hover:nounderline font-semibold">Projects</Link>
                <Link to="/contact" className="hover:nounderline font-semibold">Contact</Link>
                <button type="button" className="button font-semibold">
                    <span>Start a Project</span>
                    <div className="bg-white h-12 w-12 rounded-full p-1 flex items-center justify-center">
                        <img src={arrowUp} alt="Arrow Up" className="h-full w-full object-contain" />
                    </div>
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
                    <Link to="/" className="font-semibold text-xl" onClick={handleMobileLink}>Home</Link>
                    <Link to="/about" className="font-semibold text-xl" onClick={handleMobileLink}>About</Link>
                    <Link to="/projects" className="font-semibold text-xl" onClick={handleMobileLink}>Projects</Link>
                    <Link to="/contact" className="font-semibold text-xl" onClick={handleMobileLink}>Contact</Link>
                    <button type="button" className="button font-semibold" onClick={handleMobileLink}>
                        <span>Start a Project</span>
                        <div className="bg-white h-12 w-12 rounded-full p-1 flex items-center justify-center">
                            <img src={arrowUp} alt="Arrow Up" className="h-full w-full object-contain" />
                        </div>
                    </button>
                </div>
            )}

        </div>
    );
}

export default Navbar;