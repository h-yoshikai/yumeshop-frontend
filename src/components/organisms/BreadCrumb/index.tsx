import { FC } from 'react';
import { Crumb, CrumbType } from 'src/components/atoms/Crumb';
import { colors, fonts, fontSizes } from 'src/styles/Tokens';
import styled from 'styled-components';

export type BreadCrumbType = {
  crums: CrumbType[];
};

const Wrapper = styled.ol`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 8px;
  font: ${fonts.NotoSansJP};
  font-size: ${fontSizes.fontSize12};
  background-color: ${colors.YumeWhiteGreen2};
  text-align: center;
  box-shadow: inset 0px 1px 4px rgba(0, 0, 0, 0.25);
`;

export const BreadCrumb: FC<BreadCrumbType> = (props) => {
  const { crums } = props;

  return (
    <nav>
      <Wrapper>
        <Crumb label="TOP" url="/" isActive={false} />
        {crums.map((crum) => (
          <>
            &gt;
            <Crumb label={crum.label} url={crum.url} isActive={crum.isActive} />
          </>
        ))}
      </Wrapper>
    </nav>
  );
};
