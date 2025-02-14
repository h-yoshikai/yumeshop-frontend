import { FC, Fragment } from 'react';
import { Crumb } from 'src/components/atoms/Crumb';
import { colors, fonts, fontSizes } from 'src/styles/Tokens';
import styled from 'styled-components';

type CrumbType = {
  label: string;
  url: string;
  /* 現在のページであるか */
  isActive: boolean;
};

export type BreadcrumbType = {
  crumbs: CrumbType[];
};

const Wrapper = styled.ol`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 8px;
  font-family: ${fonts.NotoSansJP};
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
        <Crumb url="/" isActive={false}>
          TOP
        </Crumb>
        {crumbs.map((crumb) => (
          <Fragment key={crumb.label}>
            &gt;
            <Crumb url={crumb.url} isActive={crumb.isActive}>
              {crumb.label}
            </Crumb>
          </Fragment>
        ))}
      </Wrapper>
    </nav>
  );
};
