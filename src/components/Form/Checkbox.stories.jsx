import React, { useState } from 'react';
import Checkbox from './Checkbox';
import { FiStar } from 'react-icons/fi';

export default {
  title: 'Components/Form/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile checkbox component with various styles, states, and animations.',
      },
    },
  },
  argTypes: {
    checked: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
    variant: {
      control: { type: 'select', options: ['primary', 'secondary', 'success', 'warning', 'error'] },
    },
    animate: { control: 'boolean' },
    required: { control: 'boolean' },
  },
};

const Template = (args) => {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox
      {...args}
      checked={checked}
      onChange={() => setChecked(!checked)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Default Checkbox',
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  label: 'Terms and Conditions',
  helperText: 'Please read and accept the terms and conditions',
};

export const Required = Template.bind({});
Required.args = {
  label: 'Required Checkbox',
  required: true,
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Error State',
  error: true,
  helperText: 'This field is required',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Checkbox',
  disabled: true,
};

export const Indeterminate = () => {
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(true);

  const handleChange = () => {
    if (indeterminate) {
      setIndeterminate(false);
      setChecked(true);
    } else {
      setChecked(!checked);
    }
  };

  return (
    <Checkbox
      label="Indeterminate State"
      checked={checked}
      indeterminate={indeterminate}
      onChange={handleChange}
    />
  );
};

export const Sizes = () => (
  <div className="space-y-4">
    <Checkbox size="small" label="Small Checkbox" />
    <Checkbox size="medium" label="Medium Checkbox" />
    <Checkbox size="large" label="Large Checkbox" />
  </div>
);

export const Variants = () => (
  <div className="space-y-4">
    <Checkbox variant="primary" label="Primary Variant" />
    <Checkbox variant="secondary" label="Secondary Variant" />
    <Checkbox variant="success" label="Success Variant" />
    <Checkbox variant="warning" label="Warning Variant" />
    <Checkbox variant="error" label="Error Variant" />
  </div>
);

export const WithCustomLabel = Template.bind({});
WithCustomLabel.args = {
  label: (
    <div className="flex items-center gap-2">
      <FiStar className="text-yellow-500" />
      <span>Custom Label with Icon</span>
    </div>
  ),
}; 