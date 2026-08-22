import { useState, useEffect } from "react";
import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

import right from '../assets/right-blue.png';
import left from '../assets/left-blue.png';

function Footer() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleMobileLink = () => setMobileOpen(false);

    return (
        <div id="footer" className="bg-black text-white flex flex-col md:flex-row  justify-between gap-10  font-agdasima px-6 py-10 md:px-16 md:py-16">
            <img
                 src={left}
                 alt="Left"
                 className="w-[clamp(2rem,60vw,60rem)] absolute left-0  h-[clamp(40rem,30vw,60rem)]   "
                    />
            <img
                 src={right}
                 alt="Right"
                 className="w-[clamp(2rem,60vw,60rem)] h-[clamp(2rem,60vw,60rem)] absolute right-0 h-[clamp(40rem,30vw,60rem)] "
                    />
            {/* Logo + tagline */}
            <div className="flex flex-col gap-4 items-center mt-[clamp(1rem,8vw,13rem)] md:items-start z-1 text-center md:text-left">
                <img src={logo} alt="Logo" className="w-32 md:w-40" />
                <p className="text-[clamp(0.85rem,3.3vw,2.2rem)] max-w-xs">
                    Not just a Website, <br className="hidden md:block" />
                    Real Business Result
                </p>
            </div>

            {/* Quick Links + Contact Me — 2 col on mobile, separate flex columns on md+ */}
            <div className="grid grid-cols-2 gap-8 z-1 mt-[clamp(1rem,6vw,13rem)] md:flex md:gap-16">
                
                {/* Quick Links */}
                <div className="flex flex-col items-center md:items-start gap-3 text-[clamp(0.85rem,1.3vw,1.3rem)]">
                    <p className="font-bold text-[clamp(0.85rem,1.5vw,1.5rem)]">Quick Links</p>
                    <Link to="/" className="hover:no-underline" onClick={handleMobileLink}>Home</Link>
                    <Link to="/about" className="hover:no-underline" onClick={handleMobileLink}>Services</Link>
                    <Link to="/projects" className="hover:no-underline" onClick={handleMobileLink}>Projects</Link>
                    <Link to="/contact" className="hover:no-underline" onClick={handleMobileLink}>Contact</Link>
                </div>

                {/* Contact Me */}
                <div className="flex flex-col items-center md:items-start gap-3 text-[clamp(0.85rem,1.3vw,1.3rem)]">
                    <p className="font-bold text-[clamp(0.85rem,1.5vw,1.5rem)]">Contact Me</p>
                    <a href="#" className="hover:no-underline">LinkedIn</a>
                    <a href="#" className="hover:no-underline">Facebook</a>
                    <a href="#" className="hover:no-underline">Github</a>
                    <a href="#" className="hover:no-underline">Instagram</a>
                </div>

            </div>

            {/* Optional CTA button — uncomment when ready
            <button type="button" className="button font-semibold self-center md:self-start">
                <span>Start a Project</span>
                <div className="bg-white h-12 w-12 rounded-full p-1 flex items-center justify-center">
                    <img src={arrowUp} alt="Arrow Up" className="h-full w-full object-contain" />
                </div>
            </button>
            */}
        </div>
    );
}

export default Footer;