import React from 'react';
import Container from '../Container';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import Button from '../Button';

const listItem = ['No credit card required', 'Free forever - no premium tiers', 'Your data never sold', 'Cancel anytime'];

const Header = () => {
  return (
    <header className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[url('/header.jpg')] bg-top bg-cover transform scale-x-[-1]" aria-hidden="true" />
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      <div className="relative z-10 flex h-full items-center">
        <Container>
          <div>
            <div className="font-geist-mono flex max-w-max items-center text-white gap-8 bg-white/5 py-2 px-4 rounded-full text-[11px]">
              <span className="w-2 h-2  bg-white rounded-full shadow-2xl block"></span>
              <p>NEW ERA: WE’VE CHNAGE OUR LOGO</p>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4.14669 2.14645C4.31756 1.97558 4.58152 1.95383 4.7756 2.08199L4.85372 2.14645L8.35372 5.64645C8.54899 5.84171 8.54899 6.15822 8.35372 6.35348L4.85372 9.85348C4.65846 10.0488 4.34195 10.0488 4.14669 9.85348C3.95143 9.65822 3.95143 9.34171 4.14669 9.14645L7.29318 5.99996L4.14669 2.85348L4.08224 2.77535C3.95407 2.58128 3.97583 2.31731 4.14669 2.14645Z"
                  fill="white"
                  fill-opacity="0.4471"
                />
              </svg>
            </div>
            <h1 className="text-[64px] my-[34px] leading-18 text-white font-medium"></h1>

            <Heading isLight={true}>
              Your home runs <br /> better with Home +
            </Heading>
            <Paragraph className="mb-[34px]" isLight={true}>
              Your complete home management system. Maintenance, <br />
              trades, documents - all sorted. Forever free.
            </Paragraph>
            <Button isLight={true} href="#" title="Get Started Free" />
            <div>
              <ul className="mt-[34px] flex text-lg-white gap-8">
                {listItem.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="bg-white h-6 w-6 rounded-full flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3L4.5 8.5L2 6" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </span>
                    <span className="text-sm text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
