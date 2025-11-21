import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import Button from "../Button";
import Image from "next/image";
import headerImage from "/public/Header_image.png";
import BgBlock from "./BgBlock";
import overlay from "/public/overlay.png";

const listItem = [
  "No credit card required",
  "Free forever - no premium tiers",
  "Your data never sold",
  "Cancel anytime",
];

const Header = () => {
  return (
    <header className="relative pt-[80px] md:pt-[120px] overflow-hidden">
      <div className=" absolute left-[5%] w-[90%]  mx-auto top-10  grid grid-cols-9 gap-10  pointer-events-none select-none">
        {Array.from({ length: 80 }).map((_, index) => (
          <div key={index} className="col-span-3  md:col-span-1 lg:col-span-1">
            <BgBlock />
          </div>
        ))}
      </div>

      <div className="absolute -top-10 inset-0 ">
        <Image
          src={overlay}
          alt="overlay"
          className="w-full h-full fi object-cover"
        />
      </div>

      <div className="relative z-10 flex h-full items-center">
        <Container>
          <div className="flex items-center flex-col">
            <div className="font-geist-mono flex max-w-max items-center text-black gap-4 md:gap-8 bg-white/5 py-2 px-4 rounded-full text-[10px] md:text-[11px]">
              <span className="w-2 h-2  bg-black rounded-full shadow-2xl block"></span>
              {/* <p>NEW ERA: WE’VE CHNAGE OUR LOGO</p> */}
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.14669 2.14645C4.31756 1.97558 4.58152 1.95383 4.7756 2.08199L4.85372 2.14645L8.35372 5.64645C8.54899 5.84171 8.54899 6.15822 8.35372 6.35348L4.85372 9.85348C4.65846 10.0488 4.34195 10.0488 4.14669 9.85348C3.95143 9.65822 3.95143 9.34171 4.14669 9.14645L7.29318 5.99996L4.14669 2.85348L4.08224 2.77535C3.95407 2.58128 3.97583 2.31731 4.14669 2.14645Z"
                  fill="white"
                  fillOpacity="0.4471"
                />
              </svg>
            </div>
            <Heading className="text-center " isLight={false}>
              Your home runs <br /> better with Home +
            </Heading>
            <Paragraph
              className="mb-5 md:mb-[34px] mx-auto text-center "
              isLight={false}
            >
              Your complete home management system. Maintenance, <br />
              trades, documents - all sorted. Forever free.
            </Paragraph>
            <Button isLight={false} href="#" title="Get Started Free" />
            <div>
              <ul className="mt-5 md:mt-[34px] flex items-center flex-col md:flex-row text-sm md:text-lg-white gap-3 md:gap-8 flex-wrap">
                {listItem.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="bg-black h-4 md:h-6 w-4 md:w-6 rounded-full flex items-center justify-center">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-sm text-black">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-5 md:mt-1">
              <Image alt="Homeplus Dashboard" src={headerImage} />
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
