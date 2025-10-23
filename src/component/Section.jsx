import React from 'react';

const Section = ({ children, className }) => {
  return <section className={`pt-[162px] ${className}`}>{children}</section>;
};

export default Section;
