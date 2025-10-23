import React from 'react';
import Section from '../Section';
import Container from '../Container';
import Heading from '../Heading';
import Paragraph from '../Paragraph';

const content = [
  {
    title: 'Add Your Home',
    description: 'Enter a few details about your property and maintenance schedule.',
    icon: (
      <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M37.5833 17.9375L22.0076 4.82108C21.5856 4.46574 21.0516 4.27087 20.5 4.27087C19.9484 4.27087 19.4144 4.46574 18.9924 4.82108L3.41666 17.9375"
          stroke="#141B34"
          strokeWidth="1.57692"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M35.0208 8.54163V26.4791C35.0208 31.311 35.0208 33.7269 33.5197 35.228C32.0186 36.7291 29.6027 36.7291 24.7708 36.7291H16.2292C11.3973 36.7291 8.98132 36.7291 7.48024 35.228C5.97916 33.7269 5.97916 31.311 5.97916 26.4791V16.2291"
          stroke="#141B34"
          strokeWidth="1.57692"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.9375 19.6459H16.2292V21.3542H17.9375V19.6459Z"
          stroke="#141B34"
          strokeWidth="1.57692"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24.7708 19.6459H23.0625V21.3542H24.7708V19.6459Z"
          stroke="#141B34"
          strokeWidth="1.57692"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.9375 26.4791H16.2292V28.1875H17.9375V26.4791Z"
          stroke="#141B34"
          strokeWidth="1.57692"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24.7708 26.4791H23.0625V28.1875H24.7708V26.4791Z"
          stroke="#141B34"
          strokeWidth="1.57692"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },

  {
    title: 'Get Smart Reminders',
    description: 'We track everything automatically boiler, electrics, garden, and more.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M19.1667 5.83325H17.5C11.2146 5.83325 8.07191 5.83325 6.11927 7.78587C4.16666 9.7385 4.16666 12.8812 4.16666 19.1666V22.4999C4.16666 28.7853 4.16666 31.9281 6.11927 33.8806C8.07191 35.8333 11.2146 35.8333 17.5 35.8333H20.8333C27.1187 35.8333 30.2615 35.8333 32.214 33.8806C34.1667 31.9281 34.1667 28.7853 34.1667 22.4999V20.8333"
          stroke="#141B34"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M35.8333 9.99996C35.8333 13.2216 33.2217 15.8333 30 15.8333C26.7783 15.8333 24.1667 13.2216 24.1667 9.99996C24.1667 6.77829 26.7783 4.16663 30 4.16663C33.2217 4.16663 35.8333 6.77829 35.8333 9.99996Z"
          stroke="#141B34"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M12.5 20.8333H19.1667" stroke="#141B34" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.5 27.5001H25.8333" stroke="#141B34" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },

  {
    title: 'Receive 3 Quotes',
    description: 'Compare trusted local trades instantly. Book with one click.',
    icon: (
      <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M19.36 22.5867L28.2334 29.8467M19.36 22.5867L10.4867 29.8467M19.36 22.5867V11.2933"
          stroke="#141B34"
          strokeWidth="2.42001"
        />
        <path
          d="M16.7648 5.95397C17.9167 4.13578 18.4927 3.22668 19.36 3.22668C20.2274 3.22668 20.8033 4.13578 21.9552 5.95397L22.7827 7.25995C23.9192 9.05374 24.4874 9.95062 24.0555 10.622C23.6234 11.2934 22.4781 11.2934 20.1875 11.2934H18.5326C16.2419 11.2934 15.0966 11.2934 14.6646 10.622C14.2327 9.95062 14.8009 9.05374 15.9374 7.25995L16.7648 5.95397Z"
          stroke="#141B34"
          strokeWidth="2.42001"
        />
        <path
          d="M34.255 30.8806C35.2609 32.8318 35.7638 33.8072 35.3458 34.5656C34.9277 35.3239 33.8697 35.3554 31.7535 35.4186L30.2336 35.4639C28.1458 35.5262 27.1019 35.5574 26.7338 34.8312C26.3654 34.1049 26.9174 33.1035 28.0214 31.1008L28.8188 29.654C29.9227 27.6512 30.4748 26.6498 31.2593 26.6208C32.0439 26.5917 32.54 27.5541 33.5325 29.4791L34.255 30.8806Z"
          stroke="#141B34"
          strokeWidth="2.42001"
        />
        <path
          d="M4.4651 30.8806C3.45923 32.8318 2.95629 33.8072 3.37428 34.5656C3.79224 35.3239 4.85033 35.3554 6.96648 35.4186L8.48651 35.4639C10.5743 35.5262 11.6182 35.5574 11.9864 34.8312C12.3546 34.1049 11.8027 33.1035 10.6987 31.1008L9.90124 29.654C8.79732 27.6512 8.24536 26.6498 7.46078 26.6208C6.67618 26.5917 6.17998 27.5541 5.18762 29.4791L4.4651 30.8806Z"
          stroke="#141B34"
          strokeWidth="2.42001"
        />
      </svg>
    ),
  },

  {
    title: 'Relax',
    description: 'We store all your proofs, receipts, and certificates securely.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20 36.6667C29.2048 36.6667 36.6667 29.2048 36.6667 20C36.6667 10.7953 29.2048 3.33337 20 3.33337C10.7953 3.33337 3.33337 10.7953 3.33337 20C3.33337 29.2048 10.7953 36.6667 20 36.6667Z"
          stroke="#141B34"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.6666 15C12.0158 15.971 12.9579 16.6667 14.0653 16.6667C15.1727 16.6667 16.1149 15.971 16.464 15M23.536 15C23.8851 15.971 24.8271 16.6667 25.9346 16.6667C27.042 16.6667 27.9841 15.971 28.3333 15"
          stroke="#141B34"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.3334 25C14.8536 27.024 17.2739 28.3333 20 28.3333C22.7262 28.3333 25.1465 27.024 26.6667 25"
          stroke="#141B34"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const HowItWork = () => {
  return (
    <Section>
      <Container>
        <div className="text-center">
          <div className="font-geist-mono mx-auto uppercase flex max-w-max items-center text-black gap-4 text-[8px] bg-black/5 py-2 px-4 rounded-full md:text-[11px]">
            <span className="w-2 h-2  bg-black rounded-full shadow-2xl block"></span>
            <p>Never miss what matters</p>
          </div>
          <Heading>How It Works</Heading>
          <Paragraph>Four simple steps to effortless home management</Paragraph>
        </div>
        <div className="mt-10 md:mt-[50px]">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.map((step, index) => (
              <div key={index} className="bg-white p-[18px] pb-10 rounded-md">
                <div className="flex h-12 md:h-20 w-12 md:w-20 mb-16 md:mb-[120px] rounded-md bg-light items-center justify-center ">
                  {step.icon}
                </div>
                <h3 className="text-lg md:text-[20px]  mb-3 font-medium text-[#3B3B33]">{step.title}</h3>
                <p className="text-sm  text-[#3B3B33B2]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default HowItWork;
