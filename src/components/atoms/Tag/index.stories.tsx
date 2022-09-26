import React from 'react';

import type { Meta, Story } from '@storybook/react/types-6-0';
import { Tag, TagProps } from './index';

export default {
  component: Tag,
  title: 'atoms/Tag',
} as Meta;

const Template: Story<TagProps> = (args) => <Tag {...args} />;

export const NewProduct = Template.bind({});
NewProduct.args = {
  color: 'orange',
  label: '新商品',
};

export const LimitedTime = Template.bind({});
LimitedTime.args = {
  color: 'red',
  label: '期間限定',
};

export const SpecialPrice = Template.bind({});
SpecialPrice.args = {
  color: 'green',
  label: '特別価格',
};
