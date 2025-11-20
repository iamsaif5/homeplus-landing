import React from 'react';
import Section from '../Section';
import Container from '../Container';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import Button from '../Button';
import Link from 'next/link';

const listItem = ['No credit card required', 'Free forever - no premium tiers', 'Your data never sold', 'Cancel anytime'];

const Simplify = ({ gap = true }) => {
  return (
    <Section className={`relative ${gap ? 'mt-14 md:mt-[162px]' : ''}   pb-[100px] md:pb-[162px]`}>
      <div className="absolute inset-0 bg-[url('/simplify.png')] bg-top bg-cover transform scale-x-[-1]" aria-hidden="true" />
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      <Container>
        <div className="text-center relative z-1 ">
          <div className="font-geist-mono mx-auto flex max-w-max items-center text-white gap-4 md:gap-8 bg-white/5 py-2 px-4 rounded-full text-[10px] md:text-[11px]">
            <span className="w-2 h-2  bg-white rounded-full shadow-2xl block"></span>
            <p>THREE LOCAL QUOTES IN ONE CLICK</p>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.14669 2.14645C4.31756 1.97558 4.58152 1.95383 4.7756 2.08199L4.85372 2.14645L8.35372 5.64645C8.54899 5.84171 8.54899 6.15822 8.35372 6.35348L4.85372 9.85348C4.65846 10.0488 4.34195 10.0488 4.14669 9.85348C3.95143 9.65822 3.95143 9.34171 4.14669 9.14645L7.29318 5.99996L4.14669 2.85348L4.08224 2.77535C3.95407 2.58128 3.97583 2.31731 4.14669 2.14645Z"
                fill="white"
                fillOpacity="0.4471"
              />
            </svg>
          </div>
          <h1 className="text-[64px] my-[34px] text-center leading-18 text-white font-medium"></h1>

          <Heading isLight={true}>
            Organise your <br /> home today
          </Heading>
          <Paragraph className="mb-[34px]" isLight={true}>
            Join thousands of UK homeowners protecting their <br /> property value effortlessly.
          </Paragraph>

          <div>
            <ul className="mb-[34px] items-center justify-center flex text-lg-white gap-4 flex-wrap md:gap-8">
              {listItem.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="bg-white h-4 md:h-6 w-4 md:w-6 rounded-full flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 3L4.5 8.5L2 6" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-sm text-white">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            <Link
              href="#"
              className="flex items-center gap-2  md:w-[190px] bg-white text-black  py-2 px-3 
              hover:bg-slate-100  duration-200"
            >
              {/* Apple Icon */}
              <svg width="45" height="45" fill="currentColor" viewBox="0 0 384 512" className="shrink-0">
                <path d="M318.7 268.7c-.5-54.6 44.8-80.9 46.8-82.1-25.5-37.3-65.1-42.4-79.2-43-33.7-3.4-65.7 19.8-82.8 19.8-17.1 0-43.6-19.3-71.7-18.8-36.8.5-70.7 21.4-89.6 54.4-38.2 66.3-9.7 164 27.4 217.7 18.1 26.2 39.6 55.6 67.8 54.5 27.3-1.1 37.6-17.7 70.6-17.7 32.9 0 42.1 17.7 71.8 17.2 29.7-.5 48.5-26.3 66.3-52.7 20.9-30.6 29.6-60.3 30.1-61.8-.6-.3-57.5-22-58-87.5zM259.2 87.6c14.9-18.1 25-43.4 22.3-68.6-21.6.9-47.8 14.4-63.2 32.5-13.9 16.1-26.1 41.8-22.8 66.4 24.1 1.9 48.8-12.3 63.7-30.3z" />
              </svg>

              <div className="flex flex-col leading-tight">
                <span className="text-[12px] font-semibold">Download on the</span>
                <span className="text-base font-bold">App Store</span>
              </div>
            </Link>

            {/* <Button isLight={true} href="#" title="Get Started Free" /> */}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Simplify;
