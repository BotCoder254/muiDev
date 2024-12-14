import React, { useState } from 'react';
import Textarea from './Textarea';

export default {
  title: 'Components/Form/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible textarea component with various styles, states, and features.',
      },
    },
  },
  argTypes: {
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    success: { control: 'boolean' },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
    variant: {
      control: { type: 'select', options: ['outlined', 'filled'] },
    },
    animate: { control: 'boolean' },
    required: { control: 'boolean' },
    autoResize: { control: 'boolean' },
    rows: { control: 'number' },
    maxLength: { control: 'number' },
    showCount: { control: 'boolean' },
  },
};

const Template = (args) => {
  const [value, setValue] = useState('');
  return (
    <div className="w-96">
      <Textarea
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Default Textarea',
  placeholder: 'Enter your message here...',
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  label: 'Message',
  placeholder: 'Type your message',
  helperText: 'Please keep your message concise and clear',
};

export const Required = Template.bind({});
Required.args = {
  label: 'Required Message',
  placeholder: 'This field is required',
  required: true,
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Error State',
  error: true,
  helperText: 'Message is too short',
  value: 'Hi',
};

export const WithSuccess = Template.bind({});
WithSuccess.args = {
  label: 'Success State',
  success: true,
  helperText: 'Message saved successfully',
  value: 'This is a complete message',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Textarea',
  disabled: true,
  value: 'This textarea is disabled',
};

export const WithCharacterCount = Template.bind({});
WithCharacterCount.args = {
  label: 'Limited Message',
  maxLength: 100,
  showCount: true,
  helperText: 'Maximum 100 characters',
};

export const AutoResize = Template.bind({});
AutoResize.args = {
  label: 'Auto-resize Textarea',
  autoResize: true,
  placeholder: 'This textarea will grow as you type...',
};

export const Variants = () => (
  <div className="space-y-4 w-96">
    <Textarea
      variant="outlined"
      label="Outlined Variant"
      placeholder="Outlined textarea..."
    />
    <Textarea
      variant="filled"
      label="Filled Variant"
      placeholder="Filled textarea..."
    />
  </div>
);

export const Sizes = () => (
  <div className="space-y-4 w-96">
    <Textarea
      size="small"
      label="Small Textarea"
      placeholder="Small size..."
    />
    <Textarea
      size="medium"
      label="Medium Textarea"
      placeholder="Medium size..."
    />
    <Textarea
      size="large"
      label="Large Textarea"
      placeholder="Large size..."
    />
  </div>
);

export const CustomRows = Template.bind({});
CustomRows.args = {
  label: 'Custom Height',
  rows: 8,
  placeholder: 'This textarea has 8 rows...',
}; 