import { FC } from 'react';
import { Crumb, CrumbType } from 'src/components/atoms/Crumb';
import { colors, fonts, fontSizes } from 'src/styles/Tokens';
import styled from 'styled-components';

export type BreadcrumbType = {
  crumbs: CrumbType[];
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

export const Breadcrumb: FC<BreadcrumbType> = (props) => {
  const { crumbs } = props;

  return (
    <nav>
      <Wrapper>
        <Crumb label="TOP" url="/" isActive={false} />
        {crumbs.map((crumb) => (
          <>
            &gt;
            <Crumb
              key={crumb.label}
              label={crumb.label}
              url={crumb.url}
              isActive={crumb.isActive}
            />
          </>
        ))}
      </Wrapper>
    </nav>
  );
};
