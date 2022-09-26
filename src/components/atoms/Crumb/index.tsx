import Link from 'next/link';
import { FC } from 'react';
import { colors, fonts, fontSizes } from 'src/styles/Tokens';
import styled from 'styled-components';

export type CrumbType = {
  label: string;
  url: string;
  isActive: boolean;
};

const Wrapper = styled.li`
  display: inline-block;
  padding: 0px 4px;
  font: ${fonts.NotoSansJP};
  font-size: ${fontSizes.fontSize12};
  background-color: ${colors.White};
  text-align: center;
`;

export const Crumb: FC<CrumbType> = (props) => {
  const { label, url, isActive } = props;
  return (
    <Wrapper>
      {isActive ? (
        <Link href={url} passHref>
          <span>{label}</span>
        </Link>
      ) : (
        <span>{label}</span>
      )}
    </Wrapper>
  );
};
