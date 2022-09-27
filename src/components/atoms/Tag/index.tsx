import { FC } from 'react';
import { colors, fonts, fontSizes } from 'src/styles/Tokens';
import styled from 'styled-components';

export type TagProps = {
  label: string;
  color: string;
};

const Wrapper = styled.div<Pick<TagProps, 'color'>>`
  display: inline-block;
  padding: 0px 4px;
  font-family: ${fonts.NotoSansJP};
  font-size: ${fontSizes.fontSize12};
  color: ${colors.White};
  background-color: ${(props) => props.color};
  text-align: center;
`;

export const Tag: FC<TagProps> = (props) => {
  const { label, color } = props;
  return <Wrapper color={color}>{label}</Wrapper>;
};
