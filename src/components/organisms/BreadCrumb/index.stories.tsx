import React from 'react';

import type { Meta, Story } from '@storybook/react/types-6-0';
import { Breadcrumb, BreadcrumbType } from './index';

export default {
  component: Breadcrumb,
  title: 'organisms/BreadCrumb',
} as Meta;

const Template: Story<BreadcrumbType> = (args) => <Breadcrumb {...args} />;

export const Default = Template.bind({});
Default.args = {
  crumbs: [
    {
      label: '文房具の一覧',
      url: '/stationary',
      isActive: false,
    },
    {
      label:
        'シャープペンシルシャープペンシルシャープペンシルシャープペンシルシャープペンシルシャープペンシルシャープペンシルシャープペンシルシャープペンシル',
      url: '',
      isActive: true,
    },
  ],
};
