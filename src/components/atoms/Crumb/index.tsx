import Link from 'next/link';
import { FC } from 'react';
import { colors, fonts, fontSizes } from 'src/styles/Tokens';
import styled from 'styled-components';

export type CrumbType = {
  label: string;
  url: string;
  /* 現在のページであるか */
  isActive: boolean;
};

const Wrapper = styled.li<Pick<CrumbType, 'isActive'>>`
  display: inline-block;
  padding: 8px;
  font: ${fonts.NotoSansJP};
  font-size: ${fontSizes.fontSize12};
  background-color: ${(props) => (!props.isActive ? colors.White : '')};
  text-align: center;
  box-shadow: ${(props) =>
    !props.isActive ? '0px 1px 4px rgba(0, 0, 0, 0.25)' : ''};
  border-radius: 4px;
`;

export const Crumb: FC<CrumbType> = (props) => {
  const { label, url, isActive } = props;
  return (
    <Wrapper isActive={isActive}>
      {!isActive ? (
        <Link href={url} passHref>
          <a href={url}>{label}</a>
        </Link>
      ) : (
        <span>{label}</span>
      )}
    </Wrapper>
  );
};
