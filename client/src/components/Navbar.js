import React from "react";

export default function Navbar() {
    return (
        <header className="bg-gray-800 md:sticky top-0 z-10">
            
            <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
              <a href="#home" className="mr-5 hover:text-white">Home</a>
              <a href="#skills" className="mr-5 hover:text-white"> Skills </a>  
              <a href="#projects" className="mr-5 hover:text-white"> Projects </a>    
              <a href="#about" className="mr-5 hover:text-white"> About </a>  
              <a href="#contact" className="mr-5 hover:text-white"> Hire Me </a>
            </nav>
        </header>
      );
}