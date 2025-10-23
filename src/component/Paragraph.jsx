import React from 'react';

const Paragraph = ({ children, isLight, className }) => {
  return <p className={`text-[16px] ${isLight ? 'text-white opacity-90' : 'text-black opacity-50'} ${className}`}>{children}</p>;
};

export default Paragraph;
