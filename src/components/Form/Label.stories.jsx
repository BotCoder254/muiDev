import React from 'react';
import Label from './Label';
import { FiUser, FiMail, FiLock, FiStar, FiHeart } from 'react-icons/fi';

export default {
  title: 'Components/Form/Label',
  component: Label,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile label component with various styles, states, and features like tooltips and icons.',
      },
    },
  },
  argTypes: {
    required: { control: 'boolean' },
    optional: { control: 'boolean' },
    error: { control: 'boolean' },
    success: { control: 'boolean' },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
    variant: {
      control: { type: 'select', options: ['default', 'primary', 'secondary', 'success', 'warning', 'error'] },
    },
    animate: { control: 'boolean' },
  },
};

const Template = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default Label',
  htmlFor: 'input-field',
};

export const Required = Template.bind({});
Required.args = {
  children: 'Required Field',
  required: true,
  htmlFor: 'required-field',
};

export const Optional = Template.bind({});
Optional.args = {
  children: 'Optional Field',
  optional: true,
  htmlFor: 'optional-field',
};

export const WithError = Template.bind({});
WithError.args = {
  children: 'Error Label',
  error: true,
  htmlFor: 'error-field',
};

export const WithSuccess = Template.bind({});
WithSuccess.args = {
  children: 'Success Label',
  success: true,
  htmlFor: 'success-field',
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  children: 'Label with Tooltip',
  tooltip: 'This is a helpful tooltip message',
  htmlFor: 'tooltip-field',
};

export const WithIcon = () => (
  <div className="space-y-4">
    <Label icon={<FiUser />}>Username</Label>
    <Label icon={<FiMail />}>Email Address</Label>
    <Label icon={<FiLock />}>Password</Label>
  </div>
);

export const Variants = () => (
  <div className="space-y-4">
    <Label variant="default">Default Variant</Label>
    <Label variant="primary">Primary Variant</Label>
    <Label variant="secondary">Secondary Variant</Label>
    <Label variant="success">Success Variant</Label>
    <Label variant="warning">Warning Variant</Label>
    <Label variant="error">Error Variant</Label>
  </div>
);

export const Sizes = () => (
  <div className="space-y-4">
    <Label size="small">Small Label</Label>
    <Label size="medium">Medium Label</Label>
    <Label size="large">Large Label</Label>
  </div>
);

export const ComplexLabel = () => (
  <div className="space-y-4">
    <Label
      icon={<FiStar className="text-yellow-500" />}
      tooltip="Premium feature"
      variant="primary"
    >
      Premium Account
    </Label>
    <Label
      icon={<FiHeart className="text-red-500" />}
      required
      tooltip="Required for account creation"
      variant="error"
    >
      Terms of Service
    </Label>
  </div>
);

export const WithCustomContent = Template.bind({});
WithCustomContent.args = {
  children: (
    <div className="flex items-center gap-2">
      <span className="font-bold">Custom</span>
      <span className="text-primary-500">Label</span>
      <span className="bg-primary-100 text-primary-700 px-2 py-0.5 rounded-full text-xs">
        New
      </span>
    </div>
  ),
}; 