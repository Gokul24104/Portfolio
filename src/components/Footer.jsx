import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0d0d0d] py-10 text-center border-t border-gray-800">
      <p className="text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} <span className="text-white">Gokul S</span>. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
