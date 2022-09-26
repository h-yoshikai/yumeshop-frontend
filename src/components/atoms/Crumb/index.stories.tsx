import React from 'react';

import type { Meta, Story } from '@storybook/react/types-6-0';
import { Crumb, CrumbType } from './index';

export default {
  component: Crumb,
  title: 'atoms/Crumb',
} as Meta;

const Template: Story<CrumbType> = (args) => <Crumb {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'TOP',
  url: '/',
  isActive: false,
};

export const Active = Template.bind({});
Active.args = {
  label: 'シャープペンシル',
  url: '',
  isActive: true,
};
