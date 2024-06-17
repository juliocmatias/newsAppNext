import { Layout } from "@/components/Layout"

import * as S from './styles';

export const Footer = () => {
  const fullYear = new Date().getFullYear();

  return (
    <Layout>
      <S.Container>
        <S.CopyrightContainer>
          <S.Copyright>
            All rights reserved © Julio Matias {fullYear}
          </S.Copyright>
        </S.CopyrightContainer>
      </S.Container>
    </Layout>
  )
};