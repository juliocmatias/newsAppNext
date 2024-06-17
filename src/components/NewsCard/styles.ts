import Link from 'next/link';

import tw from 'tailwind-styled-components';

export const LinkCard = tw(Link)`
  hover:scale-105 
  hover:border-2 
  hover:border-link 
  rounded-xl 
  transition-transform 
  duration-300 
  ease-in-out
`;

export const ContainerImg = tw.div`
  relative 
  h-80 
  w-full
`;

export const Img = tw.img`
  rounded-xl 
  object-cover 
  object-center 
  h-full 
  w-full 
`;

export const ContainerCard = tw.div`
  pt-3
`;

export const ContainerSource = tw.div`
  mb-3 
  flex 
  flex-wrap 
  gap-2
`;

export const Source = tw.p`
  rounded-xl 
  bg-gray-500 
  px-3 
  py-1 
  font-normal 
  capitalize 
  text-gray-200 
  transition-colors 
  duration-300 
  text-sm
  hover:bg-link
`;

export const NewsDate = tw.time`
  text-gray-400
  hover:text-link
`;

export const NewsTitle = tw.p`
  mt-2 
  max-w-md 
  text-ellipsis 
  text-2xl 
  font-medium 
  text-gray-50 
  hover:text-link
`;