import { FC } from 'react';
import { Tag } from 'src/components/atoms/Tag';
import { spacingSizes } from 'src/styles/Tokens';
import styled from 'styled-components';

type Tag = {
  id: string;
  name: string;
  color: string;
  tag_group: string;
};

export type TagsProps = {
  tags: Tag[];
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacingSizes.xxs};
`;

export const Tags: FC<TagsProps> = (props) => {
  const { tags } = props;

  return (
    <Wrapper>
      {tags.map((tag) => (
        <Tag key={tag.id} label={tag.name} color={tag.color} />
      ))}
    </Wrapper>
  );
};
