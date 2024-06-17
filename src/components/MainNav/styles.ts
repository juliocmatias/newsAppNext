import tw from 'tailwind-styled-components';

export const Nav = tw.nav`
  items-center
  justify-between
  hidden
  lg:flex
`;

export const List = tw.ul`
  flex
  gap-4
`;

export const ListItem = tw.li`
  text-base
  transition-colors
  duration-300
  ease-in-out
  hover:text-link
`;

export const Content = tw.div`
  z-50
  flex
  transition-colors
  duration-300
  hover:text-link
  lg:hidden
`;

export const ContainerMobible = tw.div`
  fixed
  left-0
  top-0
  z-30
  min-h-screen
  w-full
  overflow-hidden
  bg-primary/80
  pt-[4rem]
  lg:hidden
`;

export const NavMobible = tw.nav`
  mx-auto
  flex
  max-w-[80%]
  items-center
  justify-center
  rounded-2xl
  border
  border-gray-600
  bg-secundary
  py-3
  shadow-2xl
`;

export const ListMobible = tw.ul`
  w-full
  flex-col
  items-center
  justify-center
  px-4
`;

export const ListItemMobible = tw.li`
  text-base
  transition-colors
  duration-300
  ease-in-out
  text-center
  hover:text-link
  py-4
  w-full
  border-b
  border-gray-600
`;
