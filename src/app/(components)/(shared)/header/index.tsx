"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";
import logo from "../../../../assets/system/neosoft-logo-2.svg";
import { IoMdClose } from "react-icons/io";
import Nav from "./nav";
import { ThemeSwitcher } from "@/app/themeSwitcher";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 relative transition-colors duration-200">
      <div
        className="w-full max-w-full min-[1024px]:max-w-[900px] min-[1181px]:max-w-[1000px] min-[1367px]:max-w-[1200px] min-[1601px]:max-w-[1500px] mx-auto flex items-center justify-between px-4 py-3"
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="Go to homepage"
          className="flex items-center gap-2"
        >
          <Image
            className="dark:invert"
            src={logo}
            alt="NeoSoft Logo"
            width={150}
            height={40}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <Nav />
        </div>

        {/* Right side - Profile + Hamburger */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 text-gray-700 dark:text-gray-300 text-lg font-medium cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition">
            <FaRegUserCircle />
            <span className="text-gray-700 dark:text-gray-300">Amit Kumar</span>
          </div>

          {/* Hamburger Menu Button (visible below 900px) */}
          <button
            className="lg:hidden text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <MdOutlineMenu size={26} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 dark:bg-black/60 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Right Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
          <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <IoMdClose size={24} />
          </button>
        </div>

        <nav className="p-4">
          <Nav onLinkClick={() => setIsOpen(false)} />
        </nav>

        <div className="border-t dark:border-gray-700 mt-4 p-4 text-gray-700 dark:text-gray-300 flex items-center gap-2 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400">
          <FaRegUserCircle />
          <span>Amit Kumar</span>
        </div>
        
        {/* mobile Theme */}
        <div className="border-t dark:border-gray-700 mt-4 p-4 flex items-center gap-2 cursor-pointer">
          <ThemeSwitcher  /> 
          <span className="text-gray-700 dark:text-gray-300">Change Theme</span>
        </div>
      </div>

      {/* Desktop Theme */}
      <div className="hidden lg:flex absolute top-4 right-2 cursor-pointer">
        <ThemeSwitcher  />
      </div>
    </header>
  );
};

export default Header;