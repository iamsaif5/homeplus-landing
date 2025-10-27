import React from 'react';
import Section from '../Section';
import Container from '../Container';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import Button from '../Button';

const listItem = ['No credit card required', 'Free forever - no premium tiers', 'Your data never sold', 'Cancel anytime'];

const Simplify = () => {
  return (
    <Section className={'relative  mt-14 md:mt-[162px] pb-[100px] md:pb-[162px]'}>
      <div className="absolute inset-0 bg-[url('/simplify.png')] bg-center bg-cover transform scale-x-[-1]" aria-hidden="true" />
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/70" aria-hidden="true" />

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
            <Button isLight={true} href="#" title="Get Started Free" />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Simplify;
