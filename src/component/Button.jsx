import Link from 'next/link';
import React from 'react';

const Button = ({ href = '#', title, isLight, className }) => {
  return (
    <Link
      className={`bg-black justify-center items-center flex w-[140px] md:w-[166px] font-medium border-2  hover:bg-transparent hover:text-black duration-200 py-1.5 md:py-2.5 text-sm leading-6 ${
        isLight ? 'text-black bg-white border-white hover:text-white' : 'text-white border-black'
      } ${className}`}
      href={href}
    >
      <span> {title}</span>
    </Link>
  );
};

export default Button;
