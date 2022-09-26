import React from 'react';

import type { Meta, Story } from '@storybook/react/types-6-0';
import { Tags, TagsProps } from './index';

export default {
  component: Tags,
  title: 'organisms/Tags',
} as Meta;

const Template: Story<TagsProps> = (args) => <Tags {...args} />;

export const DefaultTags = Template.bind({});
DefaultTags.args = {
  tags: [
    {
      id: 'f2a63298-408b-41c0-b135-08bf15c2e66e',
      name: '新商品',
      color: 'orange',
      tag_group: 'shop_item',
    },
    {
      id: 'd77535c3-25f7-4fcd-94a7-9bd4e716c877',
      name: '期間限定',
      color: 'red',
      tag_group: 'shop_item',
    },
    {
      id: '0a0a7546-57d4-47a1-a17c-6e651e46cd1b',
      name: '特別価格',
      color: 'green',
      tag_group: 'shop_item',
    },
  ],
};
