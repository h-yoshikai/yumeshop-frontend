import Link from 'next/link';
import { FC, ReactNode } from 'react';
import { colors, fonts, fontSizes } from 'src/styles/Tokens';
import styled, { css } from 'styled-components';

export type CrumbType = {
  children: ReactNode;
  url: string;
  /** 現在のページであるか */
  isActive: boolean;
};

const Wrapper = styled.li<Pick<CrumbType, 'isActive'>>`
  display: inline-block;
  padding: 8px;
  font-family: ${fonts.NotoSansJP};
  font-size: ${fontSizes.fontSize12};
  background-color: ${(props) => (!props.isActive ? colors.White : '')};
  text-align: center;
  box-shadow: ${(props) =>
    !props.isActive ? '0px 1px 4px rgba(0, 0, 0, 0.25)' : ''};
  border-radius: 4px;
  white-space: nowrap;
  ${(props) =>
    props.isActive &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
    `}
`;

export const Crumb: FC<CrumbType> = (props) => {
  const { children, url, isActive } = props;
  return (
    <Wrapper isActive={isActive}>
      {!isActive ? (
        <Link href={url} passHref>
          <a href={url}>{children}</a>
        </Link>
      ) : (
        children
      )}
    </Wrapper>
  );
};
