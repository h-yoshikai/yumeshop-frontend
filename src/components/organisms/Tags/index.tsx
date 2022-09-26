import { FC } from 'react';
import { Tag } from 'src/components/atoms/Tag';
import { spacingSizes } from 'src/styles/Tokens';
import styled from 'styled-components';

export type TagsProps = {
  tags: {
    id: string;
    name: string;
    color: string;
    tag_group: string;
  }[];
};

const Wrapper = styled.div`
  display: flex;
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
