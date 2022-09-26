import React from 'react';

import type { Meta, Story } from '@storybook/react/types-6-0';
import { BreadCrumb, BreadCrumbType } from './index';

export default {
  component: BreadCrumb,
  title: 'organisms/BreadCrumb',
} as Meta;

const Template: Story<BreadCrumbType> = (args) => <BreadCrumb {...args} />;

export const Default = Template.bind({});
Default.args = {
  crumbs: [
    {
      label: '文房具の一覧',
      url: '/文房具',
      isActive: false,
    },
    {
      label: 'シャープペンシル',
      url: '',
      isActive: true,
    },
  ],
};
