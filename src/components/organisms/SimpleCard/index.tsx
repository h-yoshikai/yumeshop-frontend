import Image from 'next/image';
import { FC } from 'react';
import { fonts, fontSizes } from 'src/styles/Tokens';
import styled from 'styled-components';

export type SimpleCardType = {
  imageUrl: string;
  description: string;
};

const Wrapper = styled.div`
  display: inline-block;
  font: ${fonts.NotoSansJP};
  font-size: ${fontSizes.fontSize12};
  overflow: hidden;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  width: 200px;
`;

const TextWrapper = styled.div`
  padding: 4px 4px;
`;

export const SimpleCard: FC<SimpleCardType> = (props) => {
  const { imageUrl, description } = props;

  return (
    <Wrapper>
      <Image src={imageUrl} alt={description} width="200px" height="200px" />
      <TextWrapper>{description}</TextWrapper>
    </Wrapper>
  );
};
