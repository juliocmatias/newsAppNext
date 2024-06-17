import { Logo } from '@/components/Logo';

import * as S from './styles';

type HeaderProps = {
  children?: React.ReactNode;
};

export const Header = ({ children }: HeaderProps) => {
  return (
    <S.Container>
      <S.Content>
        <Logo />
        { children }
      </S.Content>
    </S.Container>
  )
}