"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaAngleDown, FaSearch } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { GiHamburgerMenu } from "react-icons/gi";

const ShopDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      {/* Dropdown Button */}
      <button
        className="px-4 py-1 text-sm text-gray-700 rounded flex items-center"
        onClick={toggleDropdown}
      >
        Shop <FaAngleDown className="ml-2" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg"
          onClick={(e) => e.stopPropagation()} // Prevent closing on click inside
        >
          <Link
            href="/Men"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Men
          </Link>
          <Link
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Women
          </Link>
          <Link
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Kids
          </Link>
        </div>
      )}
    </div>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="text-gray-600 body-font border-b">
      {/* Desktop Header */}
      <div className="hidden lg:flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex text-black items-center space-x-4">
          <Link href="/" className="text-2xl font-serif font-bold">
            SHOP.CO
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex space-x-8">
          <ShopDropdown />
          <Link href="/category" className="text-base hover:text-gray-900">
            OnSale
          </Link>
          <Link href="#" className="text-base hover:text-gray-900">
            Brands
          </Link>
        </nav>

        {/* Search */}
        <div className="relative w-[350px]">
          <input
            type="text"
            placeholder="Search for product"
            className="w-full py-2 px-4 bg-gray-100 rounded-3xl outline-none text-sm"
          />
          <FaSearch className="absolute right-4 top-2/4 transform -translate-y-2/4 text-gray-500" />
        </div>

        {/* Icons */}
        <div className="flex space-x-6">
          <Link href="/cart" className="hover:text-gray-900">
            <FiShoppingCart size={20} />
          </Link>
          <link href="#" className="hover:text-gray-900" />
          <HiOutlineUserCircle size={20} />
        </div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden flex justify-between items-center px-4 py-3">
        <button
          className="text-2xl"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <GiHamburgerMenu />
        </button>

        <Link href="/" className="text-2xl font-serif font-bold">
          SHOP.CO
        </Link>

        <div className="flex space-x-4">
          <Link href="/cart" className="hover:text-gray-900">
            <FiShoppingCart size={20} />
          </Link>
          <Link href="#" className="hover:text-gray-900">
            <HiOutlineUserCircle size={20} />
          </Link>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col bg-gray-100 px-4 py-3 space-y-3">
          {/* <Link href="/" className="text-base hover:text-gray-900">
            New Arrivals
          </Link> */}
          <Link href="/category" className="text-base hover:text-gray-900">
            OnSale
          </Link>
          <Link href="#" className="text-base hover:text-gray-900">
            Brands
          </Link>
          <ShopDropdown />
        </div>
      )}
    </header>
  );
};

export default Header;
