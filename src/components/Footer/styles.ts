import tw from 'tailwind-styled-components';

export const Container = tw.footer`
  flex
  flex-col
  border-t
  border-slate-600
  pb-4 py-4
`;

export const CopyrightContainer = tw.div`
  flex
  w-full
  items-center
  justify-center
`;

export const Copyright = tw.p`
  max-w-[18rem]
  align-middle
  text-center
  text-gray-500 sm:max-w-fit
`;
