import React from 'react';

import type { Meta, Story } from '@storybook/react/types-6-0';
import { SimpleCard, SimpleCardType } from './index';

export default {
  component: SimpleCard,
  title: 'organisms/SimpleCard',
} as Meta;

const Template: Story<SimpleCardType> = (args) => <SimpleCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageUrl: 'https://picsum.photos/id/1/300/200',
  description:
    'テキストテキストテキストテキストテキストテキストテキストテキスト',
};

export const NoImage = Template.bind({});
NoImage.args = {
  description:
    'テキストテキストテキストテキストテキストテキストテキストテキスト',
};
