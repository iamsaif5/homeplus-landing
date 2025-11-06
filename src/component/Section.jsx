import React from 'react';

const Section = ({ children, className, id }) => {
  return (
    <section id={id} className={`pt-[70px] md:pt-[162px] ${className}`}>
      {children}
    </section>
  );
};

export default Section;
