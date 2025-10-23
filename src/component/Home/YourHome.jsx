import React from 'react';
import Section from '../Section';
import Container from '../Container';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import image1 from '/public/Frame 2147238661.png';
import image2 from '/public/Frame 2147238662.png';
import image3 from '/public/Frame 2147238663.png';
import image4 from '/public/Frame 2147238664.png';
import SubHeading from '../SubHeading';
import Button from '../Button';
import Image from 'next/image';

const listItem = ['Save £847 yearly by preventing emergencies', 'Add £5,000+ to your property value'];

const mainContent = [
  {
    badge: 'Applied efficiency',
    title: 'The smart home calendar',
    description:
      'Your maintenance, automated forever. Pre-loaded with everything UK homes need: annual boiler service, EICR checks, EPC renewals, gas safety certificates. Plus bins, insurance, and seasonal tasks.',
    listItem: [
      {
        text: 'Never miss legal requirements',
        icon: (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.3333 15.503L6.76664 23.2286C5.88548 24.2653 4.30934 24.3285 3.3485 23.3654C2.38765 22.4025 2.4506 20.8229 3.48501 19.9398L11.1937 13.3586"
              stroke="white"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M24 13.4224L17.3968 20.0401M13.2698 2.6687L6.66666 9.28638M12.4445 3.49586L7.4921 8.45913C7.4921 8.45913 9.96829 11.768 12.4445 14.2496C14.9207 16.7313 18.2223 19.2129 18.2223 19.2129L23.1747 14.2496C23.1747 14.2496 20.6984 10.9408 18.2223 8.45913C15.7461 5.9775 12.4445 3.49586 12.4445 3.49586Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M26.6667 15.5453L29.3333 13.3586M26.6667 19.9185L29.3333 21.3762"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.6693 29.3318H27.9997M16.3023 29.3318C17.0376 28.0152 17.5867 25.4956 20.1893 25.3545C20.9624 25.3125 21.7489 25.3125 22.5219 25.3545C25.1245 25.4956 25.6763 28.0152 26.4116 29.3318"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ),
      },
      {
        text: 'Prevent £3,400 yearly losses',
        icon: (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M28 14.9113V11.0405C28 8.8538 28 7.76047 27.4612 7.04713C26.9224 6.33381 25.7041 5.98749 23.2676 5.29488C21.6029 4.82168 20.1355 4.25159 18.9631 3.73113C17.3645 3.02155 16.5653 2.66675 16 2.66675C15.4347 2.66675 14.6355 3.02155 13.0369 3.73113C11.8645 4.25159 10.3971 4.82168 8.73244 5.29488C6.29591 5.98749 5.07763 6.33381 4.53881 7.04713C4 7.76047 4 8.8538 4 11.0405V14.9113C4 22.4114 10.7504 26.9114 14.1253 28.6926C14.9348 29.1198 15.3395 29.3334 16 29.3334C16.6605 29.3334 17.0652 29.1198 17.8747 28.6926C21.2496 26.9114 28 22.4114 28 14.9113Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M16 21.3332C16.1861 21.3332 16.3592 21.2484 16.7052 21.0788L19.4869 19.7156C20.7179 19.1124 21.3333 18.8108 21.3333 18.3332V12.3333M16 21.3332C15.8139 21.3332 15.6408 21.2484 15.2948 21.0788L12.513 19.7156C11.2821 19.1124 10.6667 18.8108 10.6667 18.3332V12.3333M16 21.3332V15.3332M21.3333 12.3333C21.3333 11.8556 20.7179 11.554 19.4869 10.9508L16.7052 9.58765C16.3592 9.41805 16.1861 9.33325 16 9.33325C15.8139 9.33325 15.6408 9.41805 15.2948 9.58765L12.513 10.9508C11.2821 11.554 10.6667 11.8556 10.6667 12.3333M21.3333 12.3333C21.3333 12.8109 20.7179 13.1125 19.4869 13.7156L16.7052 15.0788C16.3592 15.2484 16.1861 15.3332 16 15.3332M10.6667 12.3333C10.6667 12.8109 11.2821 13.1125 12.513 13.7156L15.2948 15.0788C15.6408 15.2484 15.8139 15.3332 16 15.3332"
              stroke="white"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
        ),
      },
      {
        text: 'Get reminded before things break',
        icon: (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M26.6667 25.3348L24.9999 14.6667M5.33334 25.3348L7.53464 11.2454C8.18628 7.07468 11.7786 4 16 4"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M26.6667 25.3333C26.6667 23.1241 21.8911 21.3333 16 21.3333C10.109 21.3333 5.33334 23.1241 5.33334 25.3333C5.33334 27.5425 10.109 29.3333 16 29.3333C21.8911 29.3333 26.6667 27.5425 26.6667 25.3333Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M17.3333 25.3333H14.6667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path
              d="M20.0213 2.66675H24.9179C25.9481 2.66675 26.4632 2.66675 26.6004 2.98689C26.7376 3.30705 26.3871 3.69111 25.6861 4.45923L21.1292 8.87427C20.4283 9.64239 19.8841 10.0264 20.0213 10.3466C20.1585 10.6667 20.8672 10.6667 21.8973 10.6667H26.6667"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ),
      },
    ],
    image: image1,
  },

  {
    badge: 'Watch your investment grow',
    title: 'Protect and grow your home value',
    description: 'Track your property value and see how maintenance protects your biggest asset.',
    listItem: [
      {
        text: 'Property value tracking with local market data',
        icon: (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.6667 29.3333H8.00002C5.48586 29.3333 4.22878 29.3333 3.44774 28.5523C2.66669 27.7712 2.66669 26.5141 2.66669 24V21.3333C2.66669 18.8192 2.66669 17.5621 3.44774 16.7811C4.22878 16 5.48586 16 8.00002 16H10.6667C13.1808 16 14.4379 16 15.219 16.7811C16 17.5621 16 18.8192 16 21.3333V24C16 26.5141 16 27.7712 15.219 28.5523C14.4379 29.3333 13.1808 29.3333 10.6667 29.3333Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M8 20H10.6667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path
              d="M24 2.66675C21.0546 2.66675 18.6667 5.07864 18.6667 8.05385C18.6667 9.75509 19.3334 11.0779 20.6667 12.2594C21.6066 13.0922 22.7451 14.4755 23.4286 15.5967C23.7564 16.1345 24.22 16.1345 24.5715 15.5967C25.2896 14.4978 26.3935 13.0922 27.3334 12.2594C28.6667 11.0779 29.3334 9.75509 29.3334 8.05385C29.3334 5.07864 26.9455 2.66675 24 2.66675Z"
              stroke="white"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M24 20V24C24 26.5141 24 27.7712 23.3752 28.5523C22.7785 29.298 21.8348 29.3317 20 29.3332"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M24.0104 8H23.9984" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        text: 'Maintenance history adds £5,000-7,000 to sale price',
        icon: (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16 29.3334H14C8.97162 29.3334 6.45745 29.3334 4.89535 27.7713C3.33325 26.2091 3.33327 23.695 3.33331 18.6666L3.33337 13.3333C3.33341 8.30504 3.33342 5.79091 4.89553 4.22883C6.45762 2.66675 8.97175 2.66675 14 2.66675H15.3332C20.3616 2.66675 22.8757 2.66675 24.4378 4.22884C25.9998 5.79095 25.9998 8.30509 25.9998 13.3334V14.6667"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.33331 9.33325H20M9.33331 15.9999H15.3333"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M23.3333 27.6969C25.6897 27.6969 27.6 25.7433 27.6 23.3333C27.6 20.9233 25.6897 18.9697 23.3333 18.9697M23.3333 27.6969C20.9769 27.6969 19.0667 25.7433 19.0667 23.3333C19.0667 20.9233 20.9769 18.9697 23.3333 18.9697M23.3333 27.6969V29.3333M23.3333 18.9697V17.3333M19.4551 20.9531L18.0005 20.0606M28.6667 26.6059L27.2123 25.7134M27.2116 20.9531L28.6661 20.0606M18 26.6059L19.4544 25.7134"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        ),
      },
      {
        text: 'Digital home pack exports in one click',
        icon: (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.66669 13.3333L14.8102 3.74635C15.149 3.47879 15.5682 3.33325 16 3.33325C16.4319 3.33325 16.8511 3.47879 17.1899 3.74635L22 7.54377V5.33325C22 4.59688 22.597 3.99992 23.3334 3.99992H24.6667C25.4031 3.99992 26 4.59687 26 5.33325V10.7017L29.3334 13.3333"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M26.6666 15.3333V20.6666C26.6666 24.4378 26.6666 26.3234 25.495 27.495C24.3234 28.6666 22.4378 28.6666 18.6666 28.6666H13.3333C9.56207 28.6666 7.67646 28.6666 6.50489 27.495C5.33331 26.3234 5.33331 24.4378 5.33331 20.6666V15.3333"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.0015 20.6667C18.9355 21.4966 17.5351 22.0001 16.0015 22.0001C14.4679 22.0001 13.0675 21.4966 12.0015 20.6667"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ),
      },
      {
        text: 'Complete service records for buyers and lenders',
        icon: (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16 10.6667C21.891 10.6667 26.6666 8.87589 26.6666 6.66675C26.6666 4.45761 21.891 2.66675 16 2.66675C10.1089 2.66675 5.33331 4.45761 5.33331 6.66675C5.33331 8.87589 10.1089 10.6667 16 10.6667Z"
              stroke="white"
              strokeWidth="2"
            />
            <path d="M26.6666 16C26.6666 18.2092 21.891 20 16 20C10.1089 20 5.33331 18.2092 5.33331 16" stroke="white" strokeWidth="2" />
            <path
              d="M26.6666 6.66675V25.3334C26.6666 27.5426 21.891 29.3334 16 29.3334C10.1089 29.3334 5.33331 27.5426 5.33331 25.3334V6.66675"
              stroke="white"
              strokeWidth="2"
            />
            <path d="M10.6667 10.6667V13.3334" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M10.6667 20V22.6667" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ),
      },
    ],
    image: image2,
  },

  {
    badge: 'Every document, one tap away',
    title: 'Smart, searchable document vault',
    description:
      'Every certificate, warranty, and receipt in one secure place. Auto-categorized.Never lose important documents. Export everything when selling.',
    listItem: [
      {
        text: 'Legal certificates (Gas, EICR, EPC)',
        icon: (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15.3333 29.3332C9.99075 29.3332 7.31945 29.3332 5.65973 27.3805C4 25.428 4 22.2852 4 15.9998C4 9.71445 4 6.57174 5.65973 4.61913C7.31945 2.6665 9.99075 2.6665 15.3333 2.6665C20.6759 2.6665 23.3472 2.6665 25.0069 4.61913C26.3429 6.19093 26.6036 8.53389 26.6544 12.6665"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.6667 10.6665H20M10.6667 17.3332H14.6667"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M26.1456 24.1405C27.2695 23.3224 28 21.9965 28 20.5C28 18.0147 25.9853 16 23.5 16H23.1667C20.6813 16 18.6667 18.0147 18.6667 20.5C18.6667 21.9965 19.3972 23.3224 20.5211 24.1405M26.1456 24.1405C25.4031 24.6811 24.4888 25 23.5 25H23.1667C22.1779 25 21.2636 24.6811 20.5211 24.1405M26.1456 24.1405L26.9227 26.5872C27.2191 27.5204 27.3673 27.9871 27.3268 28.2776C27.2424 28.8823 26.7492 29.3312 26.1669 29.3333C25.8872 29.3344 25.468 29.1144 24.6297 28.6745C24.2703 28.4859 24.0905 28.3915 23.9067 28.336C23.532 28.2231 23.1347 28.2231 22.76 28.336C22.5761 28.3915 22.3964 28.4859 22.0369 28.6745C21.1987 29.1144 20.7795 29.3344 20.4997 29.3333C19.9175 29.3312 19.4243 28.8823 19.3399 28.2776C19.2993 27.9871 19.4476 27.5204 19.744 26.5872L20.5211 24.1405"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        ),
      },
      {
        text: 'Insurance documents',
        icon: (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 22.6665H25.3333" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 28H16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path
              d="M4 10.6667C4 7.52397 4 5.95263 4.97631 4.97631C5.95263 4 7.52397 4 10.6667 4H21.3333C24.476 4 26.0473 4 27.0237 4.97631C28 5.95263 28 7.52397 28 10.6667C28 13.8093 28 15.3807 27.0237 16.3571C26.0473 17.3333 24.476 17.3333 21.3333 17.3333H10.6667C7.52397 17.3333 5.95263 17.3333 4.97631 16.3571C4 15.3807 4 13.8093 4 10.6667Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ),
      },
      {
        text: 'Service history',
        icon: (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.6753 28.0002H12.8073C8.02694 28.0002 5.63678 28.0002 4.15172 26.4868C2.66666 24.9736 2.66666 22.538 2.66666 17.6668C2.66666 12.7956 2.66666 10.3601 4.15172 8.84678C5.63678 7.3335 8.02694 7.3335 12.8073 7.3335H17.8776C22.6579 7.3335 25.0481 7.3335 26.5332 8.84678C27.6757 10.0111 27.9392 11.7214 28 14.6668"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M25.1333 25.1335L23.3333 23.9335V20.9335M17.3333 23.3335C17.3333 26.6472 20.0196 29.3335 23.3333 29.3335C26.6471 29.3335 29.3333 26.6472 29.3333 23.3335C29.3333 20.0198 26.6471 17.3335 23.3333 17.3335C20.0196 17.3335 17.3333 20.0198 17.3333 23.3335Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.3333 7.33317L21.2009 6.92109C20.5408 4.86769 20.2108 3.841 19.4252 3.25374C18.6395 2.6665 17.596 2.6665 15.5088 2.6665H15.1579C13.0707 2.6665 12.0271 2.6665 11.2415 3.25374C10.4558 3.841 10.1258 4.86769 9.46579 6.92109L9.33334 7.33317"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ),
      },
      {
        text: 'Warranties and guarantees',
        icon: (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 5.3335H13.3333M5.33334 13.3335V8.00016M16 8.00016V13.3335M8 16.0002H13.3333M18.6667 16.0002H24M26.6667 18.6668V24.0002M16 18.6668V24.0002M18.6667 26.6668H24"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.33333 7.99984C6.80609 7.99984 8 6.80593 8 5.33317C8 3.86041 6.80609 2.6665 5.33333 2.6665C3.86057 2.6665 2.66666 3.86041 2.66666 5.33317C2.66666 6.80593 3.86057 7.99984 5.33333 7.99984Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.33333 18.6668C6.80609 18.6668 8 17.4729 8 16.0002C8 14.5274 6.80609 13.3335 5.33333 13.3335C3.86057 13.3335 2.66666 14.5274 2.66666 16.0002C2.66666 17.4729 3.86057 18.6668 5.33333 18.6668Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 7.99984C17.4728 7.99984 18.6667 6.80593 18.6667 5.33317C18.6667 3.86041 17.4728 2.6665 16 2.6665C14.5272 2.6665 13.3333 3.86041 13.3333 5.33317C13.3333 6.80593 14.5272 7.99984 16 7.99984Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 18.6668C17.4728 18.6668 18.6667 17.4729 18.6667 16.0002C18.6667 14.5274 17.4728 13.3335 16 13.3335C14.5272 13.3335 13.3333 14.5274 13.3333 16.0002C13.3333 17.4729 14.5272 18.6668 16 18.6668Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M26.6667 18.6668C28.1394 18.6668 29.3333 17.4729 29.3333 16.0002C29.3333 14.5274 28.1394 13.3335 26.6667 13.3335C25.1939 13.3335 24 14.5274 24 16.0002C24 17.4729 25.1939 18.6668 26.6667 18.6668Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 29.3333C17.4728 29.3333 18.6667 28.1394 18.6667 26.6667C18.6667 25.1939 17.4728 24 16 24C14.5272 24 13.3333 25.1939 13.3333 26.6667C13.3333 28.1394 14.5272 29.3333 16 29.3333Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M26.6667 29.3333C28.1394 29.3333 29.3333 28.1394 29.3333 26.6667C29.3333 25.1939 28.1394 24 26.6667 24C25.1939 24 24 25.1939 24 26.6667C24 28.1394 25.1939 29.3333 26.6667 29.3333Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ),
      },
    ],
    image: image3,
  },

  {
    badge: '3 trusted pros, 3 quotes, 3 seconds',
    title: 'When a task is due, we bring the pros to you',
    description:
      'Your maintenance, automated forever. Pre-loaded with everything UK homes need: annual boiler service, EICR checks, EPC renewals, gas safety certificates. Plus bins, insurance, and seasonal tasks.',
    listItem: [
      {
        text: 'Task becomes due',
        icon: (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.6667 8H28" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M14.6667 16H28" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M14.6667 24H28" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path
              d="M4 9.85731C4 9.85731 5.33333 10.7264 6 12.0002C6 12.0002 8 7.00016 10.6667 5.3335"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 24.5239C4 24.5239 5.33333 25.3929 6 26.6667C6 26.6667 8 21.6667 10.6667 20"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ),
      },
      {
        text: 'We match 3 trades instantly',
        icon: (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 17.3332L22.6666 23.3332M16 17.3332L9.33331 23.3332M16 17.3332V10.6665" stroke="white" strokeWidth="2" />
            <path
              d="M24.2553 21.9276C24.9441 21.5315 25.2885 21.3335 25.6667 21.3335C26.0448 21.3335 26.3892 21.5315 27.078 21.9276L27.922 22.4131C28.6108 22.8092 28.9552 23.0072 29.1443 23.3335C29.3333 23.6598 29.3333 24.0559 29.3333 24.848V25.819C29.3333 26.6111 29.3333 27.0072 29.1443 27.3335C28.9552 27.6598 28.6108 27.8578 27.922 28.2539L27.078 28.7394C26.3892 29.1355 26.0448 29.3335 25.6667 29.3335C25.2885 29.3335 24.9441 29.1355 24.2553 28.7394L23.4113 28.2539C22.7225 27.8578 22.3781 27.6598 22.1891 27.3335C22 27.0072 22 26.6111 22 25.819V24.848C22 24.0559 22 23.6598 22.1891 23.3335C22.3781 23.0072 22.7225 22.8092 23.4113 22.4131L24.2553 21.9276Z"
              stroke="white"
              strokeWidth="2"
            />
            <path
              d="M4.92205 21.9276C5.61082 21.5315 5.95519 21.3335 6.33335 21.3335C6.71151 21.3335 7.05589 21.5315 7.74466 21.9276L8.58871 22.4131C9.27749 22.8092 9.62186 23.0072 9.81094 23.3335C10 23.6598 10 24.0559 10 24.848V25.819C10 26.6111 10 27.0072 9.81094 27.3335C9.62186 27.6598 9.27749 27.8578 8.58871 28.2539L7.74466 28.7394C7.05589 29.1355 6.71151 29.3335 6.33335 29.3335C5.95519 29.3335 5.61082 29.1355 4.92205 28.7394L4.07799 28.2539C3.38922 27.8578 3.04485 27.6598 2.85577 27.3335C2.66669 27.0072 2.66669 26.6111 2.66669 25.819V24.848C2.66669 24.0559 2.66669 23.6598 2.85577 23.3335C3.04485 23.0072 3.38922 22.8092 4.07799 22.4131L4.92205 21.9276Z"
              stroke="white"
              strokeWidth="2"
            />
            <path
              d="M14.5886 3.26068C15.2774 2.86456 15.6218 2.6665 16 2.6665C16.3781 2.6665 16.7225 2.86456 17.4113 3.26068L18.2553 3.7461C18.9441 4.14222 19.2885 4.34028 19.4776 4.6665C19.6666 4.99273 19.6666 5.38884 19.6666 6.18108V7.15193C19.6666 7.94417 19.6666 8.34028 19.4776 8.6665C19.2885 8.99273 18.9441 9.19078 18.2553 9.5869L17.4113 10.0723C16.7225 10.4685 16.3781 10.6665 16 10.6665C15.6218 10.6665 15.2774 10.4685 14.5886 10.0723L13.7446 9.5869C13.0558 9.19078 12.7115 8.99273 12.5224 8.6665C12.3333 8.34028 12.3333 7.94417 12.3333 7.15193V6.18108C12.3333 5.38884 12.3333 4.99273 12.5224 4.6665C12.7115 4.34028 13.0558 4.14222 13.7446 3.7461L14.5886 3.26068Z"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        ),
      },
      {
        text: 'You compare and choose',
        icon: (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M25.3333 22.6668V14.6668C25.3333 10.8956 25.3333 9.00998 24.1617 7.8384C22.9901 6.66683 21.1045 6.66683 17.3333 6.66683H13.3333M13.3333 6.66683C13.3333 5.73319 15.9924 3.98887 16.6666 3.3335M13.3333 6.66683C13.3333 7.60047 15.9924 9.34479 16.6666 10.0002"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.66669 10V18C6.66669 21.7712 6.66669 23.6568 7.83826 24.8284C9.00983 26 10.8954 26 14.6667 26H18.6667M18.6667 26C18.6667 26.9336 16.0076 28.678 15.3334 29.3333M18.6667 26C18.6667 25.0664 16.0076 23.322 15.3334 22.6667"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M25.3334 27.9998C26.8061 27.9998 28 26.8059 28 25.3332C28 23.8604 26.8061 22.6665 25.3334 22.6665C23.8606 22.6665 22.6667 23.8604 22.6667 25.3332C22.6667 26.8059 23.8606 27.9998 25.3334 27.9998Z"
              stroke="white"
              strokeWidth="2"
            />
            <path
              d="M6.66667 9.33333C8.13943 9.33333 9.33333 8.13943 9.33333 6.66667C9.33333 5.19391 8.13943 4 6.66667 4C5.19391 4 4 5.19391 4 6.66667C4 8.13943 5.19391 9.33333 6.66667 9.33333Z"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        ),
      },
      {
        text: 'Everything documented',
        icon: (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19.9741 9.354C19.9741 9.354 20.6407 10.0207 21.3074 11.354C21.3074 11.354 23.425 8.02067 25.3074 7.354"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.3265 2.6952C9.99526 2.55416 7.42158 2.93792 7.42158 2.93792C5.79644 3.05412 2.68203 3.96522 2.68205 9.28614C2.68208 14.5618 2.6476 21.0658 2.68205 23.6586C2.68205 25.2428 3.66288 28.9378 7.05776 29.1358C11.1842 29.3766 18.6171 29.4278 22.0273 29.1358C22.9403 29.0844 25.9796 28.3677 26.3643 25.0609C26.7628 21.6352 26.6835 19.2544 26.6835 18.6877"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M29.3332 9.35417C29.3332 13.0361 26.3456 16.0209 22.6601 16.0209C18.9747 16.0209 15.9871 13.0361 15.9871 9.35417C15.9871 5.67227 18.9747 2.6875 22.6601 2.6875C26.3456 2.6875 29.3332 5.67227 29.3332 9.35417Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path d="M9.30737 17.354H14.6407" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M9.30737 22.6875H19.974" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ),
      },
    ],
    image: image4,
  },
];

const YourHome = () => {
  return (
    <Section>
      <Container>
        {/* Title section */}
        <div className="text-center">
          <div className="font-geist-mono mx-auto uppercase flex max-w-max items-center text-black gap-4 bg-black/5 py-2 px-4 rounded-full text-[11px]">
            <span className="w-2 h-2  bg-black rounded-full shadow-2xl block"></span>
            <p>Never miss what matters</p>
          </div>
          <Heading>Your home managed</Heading>
          <Paragraph>
            Home+ is the UK's first intelligent home management system that combines maintenance scheduling, instant trade matching, and
            document storage. Designed for UK homes, pre-loaded with legal requirements like Gas Safety Certificates, EICR testing, and EPC
            ratings.
          </Paragraph>

          {/* List item */}
          <div className="">
            <ul className="mt-[34px] flex justify-center text-lg-white gap-8">
              {listItem.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="bg-black h-6 w-6 rounded-full flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-base font-medium text-black">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Content */}
        <div>
          {mainContent.map((content, index) => (
            <div
              key={index}
              className={` flex flex-col lg:flex-row items-center mt-[107px] gap-[72px] ${index % 2 == 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="lg:w-1/2 w-full">
                <Image
                  width={1800}
                  height={1700}
                  src={content.image.src}
                  alt={content.title}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
              <div className="lg:w-1/2 w-full">
                <div>
                  <span className="font-geist-mono font-medium uppercase text-[13px]  text-[#3B3B33]">[{content.badge}]</span>
                  <SubHeading className="">{content.title}</SubHeading>
                  <p className=" text-base text-black">{content.description}</p>
                  <Button className="my-[37px]" href={'#'} title={'Get Started Free'} />
                  <ul className=" gap-4">
                    {content.listItem.map((item, idx) => (
                      <li key={idx} className="flex border-t py-6 border-[#3B3B3366] border-dashed items-center gap-4">
                        <div className="h-[60px] w-[60px] flex bg-[#3B3B33] items-center justify-center rounded-md">{item.icon}</div>
                        <p className="text-[#3B3B33] text-base">{item.text}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default YourHome;
