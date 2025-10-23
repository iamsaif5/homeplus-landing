'use client';

import Image from 'next/image';
import Section from '../Section';
import Container from '../Container';
import SubHeading from '../SubHeading';
import john from '/public/john.jpg';
import john2 from '/public/john2.jpg';
import john3 from '/public/john3.jpg';
import Slider from 'react-slick';

const testimonials = [
  {
    name: 'John Doe',
    feedback: 'The service was absolutely impeccable. I see myself and my family visiting here much more frequently.',
    avatar: john,
    company: 'SomeCompany LLC.',
  },
  {
    name: 'Jane Smith',
    feedback: 'I was so surprised at the quality of food. I didn’t expect it to be this good for how cheap it all was. Awesome!',
    avatar: john2,
    company: 'AnotherCompany Inc.',
  },
  {
    name: 'Alice Johnson',
    feedback: 'That was amazing! I loved the pancakes. I’ve never had that type of taste hit my mouth before. Unreal!',
    avatar: john3,
    company: 'TechSolutions Co.',
  },
  {
    name: 'Bob Brown',
    feedback: 'Incredible experience. The staff was very friendly and attentive. I will definitely be coming back here soon!',
    avatar: john,
    company: 'BusinessCorp Ltd.',
  },
  {
    name: 'Alice Johnson 2',
    feedback: 'That was amazing! I loved the pancakes. I’ve never had that type of taste hit my mouth before. Unreal!',
    avatar: john3,
    company: 'TechSolutions Co.',
  },
];

const Testimonials = () => {
  const settings = {
    dots: false, // Enable dots for navigation
    arrows: false, // Enable arrows for navigation
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Section>
      <Container>
        <div className="">
          <span className="font-geist-mono font-medium uppercase text-[10px] md:text-[13px] text-[#3B3B33]">[Testimonials]</span>
          <SubHeading>
            Trusted by Homeowners <br /> Across the UK
          </SubHeading>
        </div>
      </Container>
      <div className="block w-full  mt-10 md:mt-[62px]">
        <Slider {...settings}>
          {testimonials.map(t => (
            <div key={t.name} className="px-4 h-auto md:h-[330px] md:px-[58px] border-r border-[#CCCCCC] py-5 md:py-[34px]">
              <div className="mx-auto flex  justify-between flex-col h-full max-w-[650px] ">
                <p className="relative text-center  text-black text-sm md:text-base leading-relaxed px-4 md:px-6">
                  <svg
                    className=" absolute left-0 -top-3"
                    width="28"
                    height="25"
                    viewBox="0 0 28 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.764 24.03C4.68733 24.03 3.026 23.2883 1.78 21.805C0.593333 20.2623 0 18.2747 0 15.842C0 12.5193 0.89 9.523 2.67 6.853C4.50933 4.12366 7.298 1.83933 11.036 0L12.015 1.424C10.235 2.492 8.60333 4.005 7.12 5.963C5.696 7.86166 4.984 9.79 4.984 11.748C4.984 12.282 5.13233 12.727 5.429 13.083C5.72567 13.3797 6.17067 13.528 6.764 13.528C8.24733 13.528 9.49333 14.062 10.502 15.13C11.57 16.1387 12.104 17.3847 12.104 18.868C12.104 20.3513 11.57 21.5973 10.502 22.606C9.49333 23.5553 8.24733 24.03 6.764 24.03ZM22.161 24.03C20.0843 24.03 18.423 23.2883 17.177 21.805C15.9903 20.2623 15.397 18.2747 15.397 15.842C15.397 12.5193 16.287 9.523 18.067 6.853C19.9063 4.12366 22.695 1.83933 26.433 0L27.412 1.424C25.632 2.492 24.0003 4.005 22.517 5.963C21.093 7.86166 20.381 9.79 20.381 11.748C20.381 12.282 20.5293 12.727 20.826 13.083C21.1227 13.3797 21.5677 13.528 22.161 13.528C23.6443 13.528 24.8903 14.062 25.899 15.13C26.967 16.1387 27.501 17.3847 27.501 18.868C27.501 20.3513 26.967 21.5973 25.899 22.606C24.8903 23.5553 23.6443 24.03 22.161 24.03Z"
                      fill="black"
                      fillOpacity="0.11"
                    />
                  </svg>

                  <svg
                    className=" absolute right-0 -bottom-3"
                    width="28"
                    height="25"
                    viewBox="0 0 28 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.737 -0.000211124C22.8137 -0.000211306 24.475 0.741452 25.721 2.22478C26.9077 3.76745 27.501 5.75512 27.501 8.18779C27.501 11.5105 26.611 14.5068 24.831 17.1768C22.9917 19.9061 20.203 22.1905 16.465 24.0298L15.486 22.6058C17.266 21.5378 18.8977 20.0248 20.381 18.0668C21.805 16.1681 22.517 14.2398 22.517 12.2818C22.517 11.7478 22.3687 11.3028 22.072 10.9468C21.7753 10.6501 21.3303 10.5018 20.737 10.5018C19.2537 10.5018 18.0077 9.96779 16.999 8.89979C15.931 7.89112 15.397 6.64512 15.397 5.16178C15.397 3.67845 15.931 2.43245 16.999 1.42379C18.0077 0.474454 19.2537 -0.000210995 20.737 -0.000211124ZM5.34001 -0.000209778C7.41667 -0.00020996 9.078 0.741453 10.324 2.22478C11.5107 3.76745 12.104 5.75512 12.104 8.18779C12.104 11.5105 11.214 14.5068 9.43401 17.1768C7.59467 19.9061 4.80601 22.1905 1.06801 24.0298L0.0890063 22.6058C1.86901 21.5378 3.50067 20.0248 4.98401 18.0668C6.40801 16.1681 7.12 14.2398 7.12 12.2818C7.12 11.7478 6.97167 11.3028 6.675 10.9468C6.37834 10.6501 5.93334 10.5018 5.34001 10.5018C3.85667 10.5018 2.61067 9.96779 1.60201 8.89979C0.534005 7.89113 6.10958e-06 6.64512 5.9799e-06 5.16179C5.85022e-06 3.67845 0.534004 2.43245 1.602 1.42379C2.61067 0.474455 3.85667 -0.000209649 5.34001 -0.000209778Z"
                      fill="black"
                      fillOpacity="0.11"
                    />
                  </svg>

                  {t.feedback}
                </p>

                <div className="flex justify-center items-center mt-10 gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image src={t.avatar} alt={t.name} fill sizes="128px" className="object-cover" />
                  </div>
                  <div>
                    <div className="font-bold  text-base text-black">{t.name}</div>
                    <div className="text-sm  text-[#4F4F4F]">{t.company}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </Section>
  );
};

export default Testimonials;
