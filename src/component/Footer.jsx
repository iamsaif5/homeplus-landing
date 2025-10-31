import React from 'react';
import Container from './Container';
import Link from 'next/link';
import Image from 'next/image';

const items = [
  {
    title: 'Platform',
    links: [
      { link: '#', name: 'Features' },
      { link: '#', name: 'How it works' },
      { link: '#', name: 'Pricing' },
      { link: '#', name: 'Mobile app' },
    ],
  },

  {
    title: 'Trade Pilot',
    links: [
      { link: '#', name: 'For homeowners' },
      { link: '#', name: 'For trades' },
      { link: '#', name: 'Quality guarantee' },
      { link: '#', name: 'Blog' },
    ],
  },

  {
    title: 'Support',
    links: [
      { link: '#', name: 'Help center' },
      { link: '#', name: 'Contact us' },
      { link: '#', name: 'Privacy policy' },
      { link: '#', name: 'Terms of service' },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-black pt-20 md:pt-[120px] pb-10  md:pb-[70px] ">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-sm md:text-base text-white">
          <div>
            <Link href={'/'}>
              <Image className="w-24 md:w-[100px]" src="/while-logo.png" alt="Logo" width={200} height={200} />
            </Link>
            <p className="my-4">Your digital home MOT logbook connected to the best local trades through Trade Pilot.</p>
            <p className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.3333 6.66634C13.3333 9.99501 9.64067 13.4617 8.40067 14.5323C8.28515 14.6192 8.14453 14.6662 8 14.6662C7.85547 14.6662 7.71485 14.6192 7.59933 14.5323C6.35933 13.4617 2.66667 9.99501 2.66667 6.66634C2.66667 5.25185 3.22857 3.8953 4.22877 2.89511C5.22896 1.89491 6.58551 1.33301 8 1.33301C9.41449 1.33301 10.771 1.89491 11.7712 2.89511C12.7714 3.8953 13.3333 5.25185 13.3333 6.66634Z"
                  stroke="white"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 8.66699C9.10457 8.66699 10 7.77156 10 6.66699C10 5.56242 9.10457 4.66699 8 4.66699C6.89543 4.66699 6 5.56242 6 6.66699C6 7.77156 6.89543 8.66699 8 8.66699Z"
                  stroke="white"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-sm">Serving the UK</span>
            </p>
            <Link className="flex items-center text-sm gap-2 mt-3" href={'mailto:hello@myhomeplus.io'}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.3334 2.66699H2.66671C1.93033 2.66699 1.33337 3.26395 1.33337 4.00033V12.0003C1.33337 12.7367 1.93033 13.3337 2.66671 13.3337H13.3334C14.0698 13.3337 14.6667 12.7367 14.6667 12.0003V4.00033C14.6667 3.26395 14.0698 2.66699 13.3334 2.66699Z"
                  stroke="white"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.6667 4.66699L8.68671 8.46699C8.48089 8.59594 8.24292 8.66433 8.00004 8.66433C7.75716 8.66433 7.51919 8.59594 7.31337 8.46699L1.33337 4.66699"
                  stroke="white"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>hello@myhomeplus.io</span>
            </Link>
          </div>

          {items.map((item, index) => (
            <div key={index}>
              <h3 className="font-semibold text-lg mb-4">{item.title}</h3>
              <ul className="flex flex-col gap-3">
                {item.links.map((linkItem, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={linkItem.link} className="hover:underline">
                      {linkItem.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex gap-10  flex-col md:flex-row items-center justify-between mt-16 md:mt-[140px] mb-12 md:mb-[97px]">
          <p className="text-white text-sm">© 2025 Home+. All rights reserved.</p>
          <ul className="flex items-center flex-row gap-8">
            <li>
              <Link href={'/'} className="hover:underline">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_1_985)">
                    <path
                      d="M9 7.09959C8.185 5.51459 5.965 2.55959 3.901 1.10359C1.925 -0.292414 1.171 -0.0504138 0.676 0.173586C0.104 0.430586 0 1.30959 0 1.82559C0 2.34359 0.283 6.06359 0.468 6.68459C1.079 8.73659 3.253 9.42959 5.255 9.20759C5.357 9.19259 5.462 9.17859 5.566 9.16559C5.463 9.18259 5.359 9.19559 5.255 9.20759C2.321 9.64259 -0.285 10.7116 3.133 14.5166C6.893 18.4086 8.285 13.6816 9 11.2856C9.715 13.6816 10.537 18.2386 14.8 14.5166C18 11.2856 15.679 9.64259 12.745 9.20759C12.641 9.19659 12.537 9.18259 12.433 9.16559C12.538 9.17859 12.643 9.19259 12.745 9.20759C14.747 9.43059 16.921 8.73659 17.532 6.68459C17.716 6.06359 18 2.34259 18 1.82659C18 1.30859 17.896 0.430586 17.323 0.171586C16.829 -0.0514137 16.076 -0.293414 14.098 1.10159C12.034 2.56059 9.815 5.51459 9 7.09959Z"
                      fill="#F8F8F3"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_985">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </li>
            <li>
              <Link href={'/'} className="hover:underline">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_1_987)">
                    <g clipPath="url(#clip1_1_987)">
                      <path
                        d="M4.77306 0.0631232C3.81506 0.108123 3.16106 0.261123 2.58906 0.486123C1.99806 0.716123 1.49606 1.02612 0.997059 1.52612C0.498059 2.02712 0.191059 2.52912 -0.0379414 3.12212C-0.258941 3.69412 -0.409941 4.34912 -0.451941 5.30712C-0.493941 6.26512 -0.503941 6.57312 -0.498941 9.01712C-0.493941 11.4611 -0.482941 11.7681 -0.436941 12.7281C-0.390941 13.6851 -0.238941 14.3391 -0.0139415 14.9111C0.217059 15.5031 0.526059 16.0041 1.02706 16.5031C1.52806 17.0021 2.02906 17.3091 2.62306 17.5381C3.19506 17.7591 3.85006 17.9101 4.80806 17.9521C5.76606 17.9941 6.07406 18.0041 8.51806 17.9991C10.9611 17.9941 11.2691 17.9831 12.2291 17.9381C13.1881 17.8921 13.8391 17.7391 14.4111 17.5151C15.0031 17.2841 15.5041 16.9751 16.0031 16.4741C16.5021 15.9731 16.8091 15.4711 17.0381 14.8781C17.2591 14.3061 17.4101 13.6511 17.4521 12.6941C17.4941 11.7331 17.5031 11.4261 17.4991 8.98312C17.4941 6.53912 17.4831 6.23312 17.4381 5.27312C17.3921 4.31312 17.2401 3.66112 17.0151 3.08912C16.7841 2.49712 16.4751 1.99712 15.9741 1.49712C15.4741 0.998123 14.9711 0.691123 14.3781 0.462123C13.8061 0.241123 13.1511 0.0901232 12.1931 0.0481232C11.2351 0.00712323 10.9271 -0.0038767 8.48306 0.0011233C6.03806 0.0061233 5.73206 0.0161232 4.77306 0.0631232ZM4.87806 16.3331C4.00006 16.2951 3.52406 16.1491 3.20606 16.0271C2.78606 15.8651 2.48606 15.6691 2.17006 15.3561C1.85306 15.0421 1.65906 14.7421 1.49506 14.3221C1.37106 14.0041 1.22306 13.5291 1.18206 12.6511C1.13706 11.7031 1.12806 11.4181 1.12306 9.01512C1.11706 6.61212 1.12706 6.32812 1.16806 5.37912C1.20606 4.50212 1.35206 4.02512 1.47406 3.70812C1.63606 3.28712 1.83106 2.98812 2.14506 2.67212C2.46006 2.35512 2.75906 2.16112 3.17906 1.99712C3.49606 1.87312 3.97206 1.72512 4.84906 1.68412C5.79906 1.63912 6.08306 1.63012 8.48506 1.62412C10.8881 1.61912 11.1731 1.62812 12.1231 1.67012C12.9991 1.70812 13.4761 1.85312 13.7941 1.97612C14.2141 2.13812 14.5141 2.33312 14.8301 2.64712C15.1461 2.96212 15.3411 3.26012 15.5051 3.68112C15.6291 3.99812 15.7761 4.47312 15.8181 5.35112C15.8631 6.30012 15.8731 6.58512 15.8771 8.98712C15.8821 11.3891 15.8731 11.6751 15.8321 12.6231C15.7931 13.5001 15.6481 13.9771 15.5261 14.2951C15.3641 14.7151 15.1681 15.0151 14.8541 15.3311C14.5401 15.6471 14.2411 15.8421 13.8201 16.0061C13.5041 16.1301 13.0271 16.2771 12.1511 16.3191C11.2021 16.3641 10.9171 16.3731 8.51406 16.3781C6.11006 16.3841 5.82706 16.3741 4.87806 16.3331ZM12.2151 4.19012C12.2151 4.40312 12.2791 4.61212 12.3981 4.79012C12.5171 4.96712 12.6861 5.10512 12.8831 5.18712C13.0811 5.26812 13.2981 5.28912 13.5071 5.24712C13.7171 5.20512 13.9091 5.10212 14.0601 4.95012C14.2111 4.79912 14.3131 4.60612 14.3541 4.39712C14.3961 4.18712 14.3741 3.97012 14.2921 3.77312C14.2101 3.57612 14.0711 3.40712 13.8931 3.28912C13.7151 3.17012 13.5061 3.10812 13.2921 3.10812C13.0061 3.10912 12.7321 3.22312 12.5301 3.42612C12.3271 3.62912 12.2141 3.90312 12.2151 4.19012ZM3.87906 9.00912C3.88406 11.5611 5.95706 13.6261 8.50906 13.6211C11.0611 13.6161 13.1261 11.5431 13.1221 8.99112C13.1171 6.43912 11.0431 4.37412 8.49106 4.37912C5.93906 4.38412 3.87406 6.45712 3.87906 9.00912ZM5.50006 9.00612C5.49906 8.41212 5.67406 7.83212 6.00206 7.33812C6.33106 6.84412 6.79906 6.45912 7.34606 6.23112C7.89406 6.00212 8.49706 5.94212 9.07906 6.05612C9.66206 6.17112 10.1971 6.45612 10.6171 6.87412C11.0381 7.29312 11.3241 7.82712 11.4411 8.40912C11.5581 8.99012 11.5001 9.59412 11.2741 10.1421C11.0481 10.6911 10.6641 11.1601 10.1721 11.4911C9.67906 11.8221 9.09906 11.9991 8.50606 12.0001C8.11206 12.0011 7.72206 11.9241 7.35706 11.7741C6.99306 11.6241 6.66206 11.4041 6.38306 11.1261C6.10406 10.8481 5.88206 10.5171 5.73106 10.1541C5.57906 9.79012 5.50106 9.40012 5.50006 9.00612Z"
                        fill="#F8F8F3"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_1_987">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                    <clipPath id="clip1_1_987">
                      <rect width="19" height="20" fill="white" transform="translate(-1.5 -1)" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </li>
            <li>
              <Link href={'/'} className="hover:underline">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_1_1003)">
                    <path
                      d="M17.82 5.01227C17.82 5.01227 17.645 3.77227 17.104 3.22627C16.418 2.50927 15.652 2.50627 15.3 2.46327C12.783 2.28027 9.004 2.28027 9.004 2.28027H8.996C8.996 2.28027 5.217 2.28027 2.7 2.46327C2.348 2.50527 1.582 2.50927 0.896 3.22627C0.356 3.77127 0.183 5.01227 0.183 5.01227C0.183 5.01227 0 6.47227 0 7.92727V9.29127C0 10.7453 0.18 12.2053 0.18 12.2053C0.18 12.2053 0.355 13.4463 0.893 13.9913C1.579 14.7083 2.479 14.6843 2.879 14.7613C4.321 14.8983 9 14.9413 9 14.9413C9 14.9413 12.783 14.9333 15.3 14.7543C15.652 14.7123 16.418 14.7083 17.103 13.9913C17.645 13.4463 17.821 12.2053 17.821 12.2053C17.821 12.2053 18 10.7503 18 9.29127V7.92727C18 6.47127 17.82 5.01227 17.82 5.01227ZM7.14 10.9463V5.88727L12.002 8.42627L7.14 10.9453V10.9463Z"
                      fill="#F8F8F3"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_1003">
                      <rect width="18" height="13" fill="white" transform="translate(0 2.11035)" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </li>
            <li>
              <Link href={'/'} className="hover:underline">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M14.176 0.865234H16.936L10.906 7.75723L18 17.1342H12.445L8.095 11.4472L3.117 17.1342H0.355L6.806 9.76223L0 0.865234H5.696L9.628 6.06423L14.176 0.865234ZM13.208 15.4832H14.737L4.865 2.43023H3.224L13.208 15.4832Z"
                    fill="#F8F8F3"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link href={'/'} className="hover:underline">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_1_995)">
                    <path
                      d="M16.668 0H1.329C0.594 0 0 0.58 0 1.297V16.699C0 17.416 0.594 18 1.329 18H16.668C17.402 18 18 17.416 18 16.703V1.297C18 0.58 17.402 0 16.668 0ZM5.34 15.339H2.668V6.746H5.34V15.339ZM4.004 5.576C3.146 5.576 2.454 4.883 2.454 4.029C2.454 3.175 3.146 2.482 4.004 2.482C4.859 2.482 5.551 3.175 5.551 4.029C5.551 4.88 4.859 5.576 4.004 5.576ZM15.339 15.339H12.67V11.162C12.67 10.167 12.653 8.884 11.282 8.884C9.893 8.884 9.682 9.97 9.682 11.092V15.339H7.017V6.746H9.577V7.921H9.612C9.967 7.246 10.839 6.532 12.136 6.532C14.839 6.532 15.339 8.311 15.339 10.624V15.339Z"
                      fill="#F8F8F3"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_995">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </li>
          </ul>
        </div>

        <p className="text-[#F8F8F3] text-[10px] md:text-[12px] max-w-[800px] opacity-70">
          This text is a legal disclaimer designed for the footer of a website. Begin with a statement acknowledging the company&apos;s
          registration status. This should include a placeholder for a generic location and a fictitious registration number, for example,
          &quot;Registered in [Location], USA (No. XX-123456)&quot;. The text should mention the company&apos;s authorization under a
          specific state department, citing a relevant act. Include a placeholder for a license number, like &quot;Authorized by the [State
          Department of Business Oversight] under the [State Money Transmission Act] (License No. YZ-987654)&quot;.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
