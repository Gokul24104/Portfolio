import React, { useState, useEffect } from 'react';

const Header = () => {
    const [hideHeader, setHideHeader] = useState(false);

    // Optional: Show header when scrolling up
    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setHideHeader(true); // Scrolling down
            } else {
                setHideHeader(false); // Scrolling up
            }
            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = () => {
        setHideHeader(true); // Hide on click
        setTimeout(() => {
            setHideHeader(false); // Show it again after scroll completes
        }, 1000); // adjust if needed
    };

    return (
        <header
            className={`bg-white shadow-md fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${hideHeader ? '-translate-y-full' : 'translate-y-0'
                }`}
        >
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Gokul S</h1>
                <ul className="flex gap-6 text-gray-700">
                    <li><a href="#about" onClick={handleLinkClick} className="hover:text-blue-500">About</a></li>
                    <li><a href="#skills" onClick={handleLinkClick} className="hover:text-blue-500">Skills</a></li>
                    <li><a href="#projects" onClick={handleLinkClick} className="hover:text-blue-500">Projects</a></li>
                    <li><a href="#resume" onClick={handleLinkClick} className="hover:text-blue-500">Resume</a></li>
                    <li><a href="#contact" onClick={handleLinkClick} className="hover:text-blue-500">Contact</a></li>

                </ul>
            </nav>
        </header>
    );
};

export default Header;
