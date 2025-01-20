import type { Meta, StoryObj } from '@storybook/react';
import { action as fn } from '@storybook/addon-actions';

import NavigationBar from '../components/NavigationBar.tsx';

export interface NavigationBarProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  NavigationBar: string;
  onClick?: () => void;
}

const meta = {
  title: 'Navigation/NavigationBar',
  component: NavigationBar,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  decorators: [
    (Story: any) => (
      <div style={{ width: '360px', height: '100%' }}>
        <Story />
      </div>
    ),
  ],

  argTypes: {
    title: { control: 'text', description: '페이지 이름', defaultValue: '' },
    onBackButtonClick: {
      action: 'clicked',
      description: '뒤로가기 버튼 클릭 이벤트',
    },
    onCloseButtonClick: {
      action: 'clicked',
      description: '닫기 버튼 클릭 이벤트',
    },
    showBackButton: {
      control: 'boolean',
      description: '뒤로가기 버튼 표시 여부',
      defaultValue: true,
    },
    showCloseButton: {
      control: 'boolean',
      description: '닫기 버튼 표시 여부',
      defaultValue: true,
    },
    showTitle: {
      control: 'boolean',
      description: '페이지 이름 표시 여부',
      defaultValue: true,
    },
    isDark: {
      control: 'boolean',
      description: '다크 모드 여부',
      defaultValue: true,
    },
  },
  args: {
    onBackButtonClick: fn('Back button clicked'),
    onCloseButtonClick: fn('Close button clicked'),
  },
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isDark: true,
    title: '페이지 이름',
    showBackButton: true,
    showCloseButton: true,
    showTitle: true,
    onBackButtonClick: () => {},
    onCloseButtonClick: () => {},
  },
};
