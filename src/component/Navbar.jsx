'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';

const NavLinks = [
  { href: '#', label: 'Platform' },
  { href: '#', label: 'Solutions' },
  { href: '/blogs', label: 'Resources' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white  border-b border-gray-100 z-50 relative">
      <div className="container flex items-center justify-between mx-auto py-4 md:py-[30px]  px-5">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image className="max-w-[70px] md:max-w-[100px]" src="/Newlogo.png" alt="Logo" width={500} height={500} />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-11 text-sm">
          {NavLinks.map((link, idx) => (
            <li key={idx}>
              <Link className="opacity-60 duration-200 hover:opacity-100" href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="#" className="rounded-full opacity-60 hover:opacity-100 text-sm bg-primary px-6 py-2 text-white">
            Sign in
          </Link>
          <Button href="#" title="Sign up free" />
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-700 focus:outline-none">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu (Animated) */}
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-md md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col items-center space-y-6 py-6 text-sm">
          {NavLinks.map((link, id) => (
            <li key={id}>
              <Link href={link.href} onClick={() => setMenuOpen(false)} className="opacity-70 hover:opacity-100 duration-200">
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="#"
              onClick={() => setMenuOpen(false)}
              className="rounded-full text-sm bg-primary px-6 py-2 text-white opacity-80 hover:opacity-100"
            >
              Sign in
            </Link>
          </li>
          <li>
            <Button href="#" title="Sign up free" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
