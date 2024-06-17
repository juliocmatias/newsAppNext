import tw from 'tailwind-styled-components';

export const Container = tw.div`
  flex
  flex-col
  items-center
  justify-center
  gap-4
`;

export const IconContainer = tw.div`
  flex
  w-full
  justify-items-start
`;

export const ImageContainer = tw.div`
  sm:h[30rem]
  relative
  w-full
`;

export const Image = tw.img`
  rounded-xl
  object-cover
  object-center
`;

export const Content = tw.div`
  w-full
  max-w-5xl
`;

export const DateContainer = tw.div`
  mt-10
`;

export const Date = tw.p`
  mb-2
  text-gray-400
`;

export const Title = tw.h1`
  mb-4
  text-5xl
  font-bold
  sm:text-6xl
`;

export const Description = tw.p`
  mb-8
  text-2xl
  text-gray-400
`;
