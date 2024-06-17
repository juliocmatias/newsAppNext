'use client'

import Link from "next/link";

import { MainNavType } from "@/types";

import { ToggleBtn } from "./components";
import { useMainNav } from "./Hooks";
import * as S from './styles';

type MainNavProps = {
  items: MainNavType
};

export const MainNav = ({ items }: MainNavProps ) => {
  const { handleToggleMenu, isOpen } = useMainNav();

  return (
    <>
      <S.Nav>
        <S.List className="flex justify-center space-x-4">
          {items.map(({ href, title }) => (
            <S.ListItem key={title}>
              <Link href={href}>{title}</Link>
            </S.ListItem>
          ))}
        </S.List>
      </S.Nav>
      <S.Content>
        <ToggleBtn isOpen={ isOpen } handleToggleMenu={ handleToggleMenu }/>
      </S.Content>
      {isOpen && (
        <S.ContainerMobible>
          <S.NavMobible>
            <S.ListMobible>
              {items.map((item) => (
                <S.ListItemMobible key={item.title}>
                  <Link href={item.href}>{item.title}</Link>
                </S.ListItemMobible>
              ))}
            </S.ListMobible>
          </S.NavMobible>
        </S.ContainerMobible>
      )}
    </>
  )
};