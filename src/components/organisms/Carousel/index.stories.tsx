import React from 'react';

import type { Meta, Story } from '@storybook/react/types-6-0';
import { Carousel, CarouselType } from './index';

export default {
  component: Carousel,
  title: 'organisms/Carousel',
} as Meta;

const Template: Story<CarouselType> = (args) => <Carousel {...args} />;

export const Default = Template.bind({});
Default.args = {
  images: [
    'http://placehold.jp/700x400.png?text=1',
    'http://placehold.jp/700x400.png?text=2',
    'http://placehold.jp/700x400.png?text=3',
    'http://placehold.jp/700x400.png?text=4',
  ],
};

export const NoImage = Template.bind({});
NoImage.args = {
  images: [],
};
