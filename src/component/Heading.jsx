import React from 'react';

const Heading = ({ isLight = false, children }) => {
  return (
    <h1
      className={`text-[40px] md:text-[64px] my-5 md:my-[34px] leading-10 md:leading-18  ${
        isLight ? 'text-white' : 'text-black'
      } font-medium`}
    >
      {children}
    </h1>
  );
};

export default Heading;
