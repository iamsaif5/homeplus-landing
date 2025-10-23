import React from 'react';
import Section from '../Section';
import Container from '../Container';
import SubHeading from '../SubHeading';
import image1 from '/public/blog-1.png';
import image2 from '/public/blog-2.png';
import image3 from '/public/blog-3.png';
import Image from 'next/image';
import Link from 'next/link';

const articles = [
  {
    title: 'Smart Logistics',
    description: 'Optimizing freight systems with data-driven strategies.',
    link: '#',
    image: image1,
  },

  {
    title: 'Regenerative Agriculture',
    description: 'Helping scale climate-smart practices that restore land health.',
    link: '#',
    image: image2,
    link: '#',
  },

  {
    title: 'Enviro-Intelligence',
    description: 'Turning raw environmental data into actionable insight.',
    link: '#',
    image: image3,
  },
];

const Resources = () => {
  return (
    <Section>
      <Container>
        <div className="">
          <span className="font-geist-mono font-medium uppercase text-[10px] md:text-[13px] text-[#3B3B33]">[more information]</span>
          <SubHeading>Resources & Information</SubHeading>
        </div>

        <div>
          <div className="mt-[62px] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            {articles.map((article, index) => (
              <div key={index} className="bg-[#EDEDE2]  rounded-md overflow-hidden">
                <Image
                  width={600}
                  height={600}
                  src={article.image.src}
                  alt={article.title}
                  className="w-full h-[200px] md:h-[281px] object-cover "
                />
                <div className="p-[18px] h-full ">
                  <div>
                    <h3 className="text-[#3B3B33] font-medium mb-2 text-base md:text-[18px]">{article.title}</h3>
                    <p className="text-[#3B3B33B2] text-sm md:text-[19px]">{article.description}</p>
                  </div>
                  <Link
                    href={article.link}
                    className="md:w-12 w-8 md:mt-12 mt-8 h-8  md:h-12 flex bg-white rounded-md items-center justify-center"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.5 12H3M13.5 5.625L19.875 12L13.5 18.375" stroke="#3B3B33" strokeWidth="1.5" strokeMiterlimit="10" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Resources;
