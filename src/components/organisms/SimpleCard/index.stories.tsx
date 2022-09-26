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
  imageUrl: 'https://picsum.photos/300/200',
  description:
    'テキストテキストテキストテキストテキストテキストテキストテキスト',
};
