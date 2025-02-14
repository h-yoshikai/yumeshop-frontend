import { VFC } from 'react';
import styled from 'styled-components';
import { Logo } from 'src/components/atoms/Icons/logo';
import { colors } from 'src/styles/Tokens';
import Link from 'next/link';

const Wrapper = styled.header`
  width: 100%;
  padding: 8px 0;
  background-color: ${colors.White};
  display: flex;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const Header: VFC = () => (
  <Wrapper>
    <Link href="/" passHref>
      <a href="replace">
        <Logo />
      </a>
    </Link>
  </Wrapper>
);
