import React, { useState, useEffect } from 'react';

const Header = () => {
    const [hideHeader, setHideHeader] = useState(false);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setHideHeader(true);
            } else {
                setHideHeader(false);
            }
            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = () => {
        setHideHeader(true);
        setTimeout(() => {
            setHideHeader(false);
        }, 1000);
    };

    return (
        <header
            className={`bg-[#0d0d0d] fixed top-0 left-0 w-full z-50 transition-transform duration-300 
            ${hideHeader ? '-translate-y-full' : 'translate-y-0'} shadow-lg`}
        >
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo / Name */}
                <h1 className="text-white text-xl font-semibold tracking-wide">
                    Gokul <span className="text-red-500">S</span>
                </h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 text-gray-300 font-medium">
                    {[
                        { name: "Home", href: "#" },
                        { name: "About", href: "#about" },
                        { name: "Projects", href: "#projects" },
                        { name: "Contact", href: "#contact" },
                    ].map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                onClick={handleLinkClick}
                                className="hover:text-red-500 transition-colors duration-300"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Icon */}
                <button className="md:hidden text-gray-300 focus:outline-none">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </nav>
        </header>
    );
};

export default Header;
