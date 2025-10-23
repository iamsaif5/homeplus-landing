import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Button from './Button';

const NavLinks = [
  { href: '/platform', label: 'Platform' },
  { href: '/services', label: 'Solutions' },
  { href: '/contact', label: 'Resources' },
];

const Navbar = () => {
  return (
    <nav className="  bg-white">
      <div className="container flex items-center justify-between  mx-auto py-[30px]">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={100} height={100} />
        </Link>
        {/* Menu */}
        <ul className="flex space-x-11 text-sm ">
          {NavLinks.map(link => (
            <li key={link.href}>
              <Link className=" opacity-60 duration-200 hover:opacity-100" href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* CTA Button */}
        <div className="flex items-center">
          <Link href="/get-started" className="rounded-full opacity-60 hover:opacity-100 text-sm bg-primary px-6 py-2 ">
            Sign in
          </Link>
          <Button href="/login" title="Sign up free" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
