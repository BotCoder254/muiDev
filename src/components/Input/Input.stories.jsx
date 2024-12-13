import React, { useState } from 'react';
import Input from './Input';

const description = `
# Input Component

An enhanced input component with rich features and animations.

## Features
- Multiple variants (default, filled, outlined, underlined)
- Different sizes and styles
- Icon support with multiple types
- Prefix and suffix support
- Loading state
- Copy to clipboard
- Clear button
- Character counter
- Password visibility toggle
- Required field indicator
- Smooth animations and transitions
- Dark mode support
`;

export default {
  title: 'Components/Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#1a1a1a' },
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'The visual style of the input',
      control: 'select',
      options: ['default', 'filled', 'outlined', 'underlined'],
    },
    size: {
      description: 'The size of the input',
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    type: {
      description: 'The type of input',
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'tel', 'url', 'search'],
    },
    startIcon: {
      description: 'Icon at the start of the input',
      control: 'select',
      options: [null, 'search', 'email', 'user', 'password', 'card', 'phone', 'calendar', 'link', 'globe', 'hash', 'chat'],
    },
    endIcon: {
      description: 'Icon at the end of the input',
      control: 'select',
      options: [null, 'search', 'email', 'user', 'password', 'card', 'phone', 'calendar', 'link', 'globe', 'hash', 'chat'],
    },
    label: {
      description: 'Label text',
      control: 'text',
    },
    helperText: {
      description: 'Helper text below the input',
      control: 'text',
    },
    error: {
      description: 'Error message',
      control: 'text',
    },
    success: {
      description: 'Success state',
      control: 'boolean',
    },
    disabled: {
      description: 'Disabled state',
      control: 'boolean',
    },
    required: {
      description: 'Required field',
      control: 'boolean',
    },
    loading: {
      description: 'Loading state',
      control: 'boolean',
    },
    clearable: {
      description: 'Show clear button',
      control: 'boolean',
    },
    copyable: {
      description: 'Show copy button',
      control: 'boolean',
    },
    rounded: {
      description: 'Use rounded style',
      control: 'boolean',
    },
    animated: {
      description: 'Enable animations',
      control: 'boolean',
    },
  },
};

const Template = (args) => {
  const [value, setValue] = useState('');
  return (
    <div className="p-8 max-w-md">
      <Input
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  placeholder: 'Enter text...',
  helperText: 'This is a helper text',
};

export const Variants = () => (
  <div className="p-8 space-y-4 max-w-md">
    <Input label="Default" placeholder="Default variant" />
    <Input label="Filled" variant="filled" placeholder="Filled variant" />
    <Input label="Outlined" variant="outlined" placeholder="Outlined variant" />
    <Input label="Underlined" variant="underlined" placeholder="Underlined variant" />
  </div>
);

export const WithIcons = () => (
  <div className="p-8 space-y-4 max-w-md">
    <Input startIcon="search" placeholder="Search..." />
    <Input startIcon="email" placeholder="Enter email" />
    <Input startIcon="user" placeholder="Username" />
    <Input type="password" startIcon="password" placeholder="Password" />
    <Input startIcon="card" placeholder="Card number" />
    <Input startIcon="phone" placeholder="Phone number" />
    <Input startIcon="calendar" placeholder="Select date" />
    <Input startIcon="link" placeholder="Enter URL" />
    <Input startIcon="globe" placeholder="Website" />
    <Input startIcon="hash" placeholder="Enter tag" />
    <Input startIcon="chat" placeholder="Message" />
  </div>
);

export const WithPrefixSuffix = () => (
  <div className="p-8 space-y-4 max-w-md">
    <Input prefix="$" placeholder="Enter amount" />
    <Input suffix=".com" placeholder="Enter domain" />
    <Input prefix="+" suffix="px" placeholder="Enter size" />
    <Input
      prefix={<span className="text-gray-500">https://</span>}
      suffix={<span className="text-gray-500">.com</span>}
      placeholder="Enter domain"
    />
  </div>
);

export const Sizes = () => (
  <div className="p-8 space-y-4 max-w-md">
    <Input size="small" label="Small" placeholder="Small input" />
    <Input size="medium" label="Medium" placeholder="Medium input" />
    <Input size="large" label="Large" placeholder="Large input" />
  </div>
);

export const States = () => (
  <div className="p-8 space-y-4 max-w-md">
    <Input label="Normal" placeholder="Normal state" />
    <Input label="Disabled" placeholder="Disabled state" disabled />
    <Input label="Loading" placeholder="Loading state" loading />
    <Input
      label="With Error"
      placeholder="Error state"
      error="This field is required"
    />
    <Input
      label="Success"
      placeholder="Success state"
      success
      value="Valid input"
    />
  </div>
);

export const Features = () => (
  <div className="p-8 space-y-4 max-w-md">
    <Input
      label="Clearable"
      placeholder="Type something..."
      clearable
      value="Clear me!"
    />
    <Input
      label="Copyable"
      placeholder="Type to copy..."
      copyable
      value="Copy this text!"
    />
    <Input
      label="With Counter"
      placeholder="Limited input..."
      maxLength={50}
    />
    <Input
      label="Required Field"
      placeholder="This field is required"
      required
    />
  </div>
);

export const Styles = () => (
  <div className="p-8 space-y-4 max-w-md">
    <Input placeholder="Default style" />
    <Input placeholder="Rounded style" rounded />
    <Input
      placeholder="Custom style"
      className="border-purple-500 focus:border-purple-600 focus:ring-purple-500"
    />
  </div>
);

export const Password = () => (
  <div className="p-8 space-y-4 max-w-md">
    <Input
      type="password"
      label="Password"
      placeholder="Enter password"
      startIcon="password"
    />
    <Input
      type="password"
      label="Password with Requirements"
      placeholder="Enter password"
      pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
      helperText="Minimum 8 characters, at least one letter and one number"
    />
  </div>
);

export const Animated = () => (
  <div className="p-8 space-y-4 max-w-md">
    <Input
      label="Animated Input"
      placeholder="Focus me!"
      animated
      startIcon="star"
    />
    <Input
      label="Non-animated Input"
      placeholder="Focus me!"
      animated={false}
      startIcon="star"
    />
  </div>
); 