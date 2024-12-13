import React from 'react';
import Button from './Button';

const description = `
# Button Component

An enhanced button component with rich animations and features.

## Features
- Multiple variants and styles
- Different sizes from tiny to extra large
- Icon support with multiple types
- Loading state with spinner
- Ripple effect animation
- Group button support
- Rounded and elevated styles
- Custom animations
- Dark mode support

## Usage

\`\`\`jsx
import { Button } from 'mui-components';

function MyComponent() {
  return (
    <Button
      variant="primary"
      size="medium"
      icon
      iconType="arrow"
      rounded
      elevated
    >
      Click Me
    </Button>
  );
}
\`\`\`
`;

export default {
  title: 'Components/Button',
  component: Button,
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
      description: 'The visual style of the button',
      control: 'select',
      options: [
        'primary', 'secondary', 'outline', 'danger', 'success',
        'warning', 'info', 'dark', 'light', 'link', 'ghost'
      ],
    },
    size: {
      description: 'The size of the button',
      control: 'select',
      options: ['tiny', 'small', 'medium', 'large', 'xl'],
    },
    icon: {
      description: 'Whether to show an icon',
      control: 'boolean',
    },
    iconPosition: {
      description: 'Position of the icon',
      control: 'select',
      options: ['left', 'right'],
    },
    iconType: {
      description: 'Type of icon to display',
      control: 'select',
      options: [
        'arrow', 'success', 'warning', 'info', 'add',
        'remove', 'delete', 'edit', 'chevron-down', 'chevron-up'
      ],
    },
    loading: {
      description: 'Show loading spinner',
      control: 'boolean',
    },
    rounded: {
      description: 'Use rounded (pill) style',
      control: 'boolean',
    },
    elevated: {
      description: 'Add elevation shadow',
      control: 'boolean',
    },
    animated: {
      description: 'Enable hover/tap animations',
      control: 'boolean',
    },
    ripple: {
      description: 'Enable ripple effect',
      control: 'boolean',
    },
    fullWidth: {
      description: 'Make button full width',
      control: 'boolean',
    },
  },
};

const Template = (args) => (
  <div className="p-8">
    <Button {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Button',
  variant: 'primary',
  size: 'medium',
  icon: true,
  iconType: 'arrow',
};

export const AllVariants = () => (
  <div className="p-8 flex flex-wrap gap-4">
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="danger">Danger</Button>
    <Button variant="success">Success</Button>
    <Button variant="warning">Warning</Button>
    <Button variant="info">Info</Button>
    <Button variant="dark">Dark</Button>
    <Button variant="light">Light</Button>
    <Button variant="link">Link</Button>
    <Button variant="ghost">Ghost</Button>
  </div>
);

export const AllSizes = () => (
  <div className="p-8 flex items-center gap-4">
    <Button size="tiny">Tiny</Button>
    <Button size="small">Small</Button>
    <Button size="medium">Medium</Button>
    <Button size="large">Large</Button>
    <Button size="xl">Extra Large</Button>
  </div>
);

export const WithIcons = () => (
  <div className="p-8 flex flex-wrap gap-4">
    <Button icon iconType="arrow">Arrow</Button>
    <Button icon iconType="success" variant="success">Success</Button>
    <Button icon iconType="warning" variant="warning">Warning</Button>
    <Button icon iconType="info" variant="info">Info</Button>
    <Button icon iconType="add" variant="primary">Add</Button>
    <Button icon iconType="remove" variant="danger">Remove</Button>
    <Button icon iconType="delete" variant="danger">Delete</Button>
    <Button icon iconType="edit" variant="secondary">Edit</Button>
  </div>
);

export const IconPositions = () => (
  <div className="p-8 flex gap-4">
    <Button icon iconPosition="left" iconType="arrow">Left Icon</Button>
    <Button icon iconPosition="right" iconType="arrow">Right Icon</Button>
  </div>
);

export const ButtonGroup = () => (
  <div className="p-8 space-y-4">
    <div className="flex">
      <Button group groupPosition="left">Left</Button>
      <Button group groupPosition="middle">Middle</Button>
      <Button group groupPosition="right">Right</Button>
    </div>
    <div className="flex">
      <Button variant="outline" group groupPosition="left" icon iconType="edit">Edit</Button>
      <Button variant="outline" group groupPosition="middle" icon iconType="delete">Delete</Button>
      <Button variant="outline" group groupPosition="right" icon iconType="add">Add</Button>
    </div>
  </div>
);

export const Styles = () => (
  <div className="p-8 space-y-4">
    <div className="flex gap-4">
      <Button rounded>Rounded</Button>
      <Button elevated>Elevated</Button>
      <Button rounded elevated>Rounded & Elevated</Button>
    </div>
    <div className="flex gap-4">
      <Button variant="outline" rounded>Rounded Outline</Button>
      <Button variant="ghost" rounded>Rounded Ghost</Button>
    </div>
  </div>
);

export const States = () => (
  <div className="p-8 flex gap-4">
    <Button loading>Loading</Button>
    <Button disabled>Disabled</Button>
    <Button active>Active</Button>
  </div>
);

export const FullWidth = () => (
  <div className="p-8 space-y-4 max-w-md">
    <Button fullWidth>Full Width Button</Button>
    <Button fullWidth variant="outline">Full Width Outline</Button>
  </div>
);

export const WithRipple = () => (
  <div className="p-8 flex gap-4">
    <Button ripple>With Ripple</Button>
    <Button ripple variant="outline">Outline with Ripple</Button>
  </div>
); 