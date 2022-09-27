import React from 'react';

import type { Meta, Story } from '@storybook/react/types-6-0';
import { Carousel } from './index';

export default {
  component: Carousel,
  title: 'organisms/Carousel',
} as Meta;

const Template: Story = (args) => <Carousel {...args} />;

export const Default = Template.bind({});
// Default.args = {
//   imageUrl: 'https://picsum.photos/id/1/300/200',
//   description:
//     'テキストテキストテキストテキストテキストテキストテキストテキスト',
// };

// export const NoImage = Template.bind({});
// NoImage.args = {
//   imageUrl: '',
//   description:
//     'テキストテキストテキストテキストテキストテキストテキストテキスト',
// };
