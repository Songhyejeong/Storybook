import type { Meta, StoryObj } from '@storybook/react';
import { action as fn } from '@storybook/addon-actions';

import DefaultTextField from '../components/DefaultTextField.tsx';

export interface DefaultTextFieldProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  DefaultTextField: string;
  onClick?: () => void;
}

const meta = {
  title: 'Text/DefaultTextField',
  component: DefaultTextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    iconAlt: {
      control: 'text',
      description: '아이콘 이미지의 alt 속성',
      defaultValue: '',
    },
    iconPath: {
      control: 'text',
      description: '아이콘 이미지의 경로',
      defaultValue: '',
    },
    onIconClick: { action: 'clicked', description: '버튼 클릭 이벤트' },
    placeholder: {
      control: 'text',
      description: '텍스트 필드의  placeholder',
      defaultValue: '',
    },
    isError: {
      control: 'text',
      description: '에러 상태 여부',
      defaultValue: '',
    },
    value: {
      control: 'text',
      description: '텍스트 필드의  값',
      defaultValue: '',
    },
    id: {
      control: 'text',
      description: '텍스트 필드의  아이디',
      defaultValue: '',
    },
  },
  args: {
    onIconClick: fn('Button clicked'),
    onChange: fn('Button clicked'),
  },
} satisfies Meta<typeof DefaultTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    errormessage: '텍스트를 확인해주세요',
    iconAlt: 'icon',
    iconPath: '/ic-asset-delete-dark.svg',
    placeholder: '텍스트를 입력해주세요',
    value: '텍스트',
    isError: false,

    id: 'email',
  },
};
