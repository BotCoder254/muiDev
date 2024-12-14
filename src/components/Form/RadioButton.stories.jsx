import React, { useState } from 'react';
import RadioButton from './RadioButton';
import { FiWifi } from 'react-icons/fi';

export default {
  title: 'Components/Form/RadioButton',
  component: RadioButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customizable radio button component with various styles and states.',
      },
    },
  },
  argTypes: {
    checked: { control: 'boolean' },
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
  const [selected, setSelected] = useState(false);
  return (
    <RadioButton
      {...args}
      checked={selected}
      onChange={() => setSelected(!selected)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Default Radio Button',
  name: 'default',
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  label: 'Select Option',
  helperText: 'Additional information about this option',
  name: 'helper',
};

export const Required = Template.bind({});
Required.args = {
  label: 'Required Option',
  required: true,
  name: 'required',
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Error State',
  error: true,
  helperText: 'Please select an option',
  name: 'error',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Option',
  disabled: true,
  name: 'disabled',
};

export const Sizes = () => (
  <div className="space-y-4">
    <RadioButton size="small" label="Small Radio" name="size" value="small" />
    <RadioButton size="medium" label="Medium Radio" name="size" value="medium" />
    <RadioButton size="large" label="Large Radio" name="size" value="large" />
  </div>
);

export const Variants = () => (
  <div className="space-y-4">
    <RadioButton variant="primary" label="Primary Variant" name="variant" value="primary" />
    <RadioButton variant="secondary" label="Secondary Variant" name="variant" value="secondary" />
    <RadioButton variant="success" label="Success Variant" name="variant" value="success" />
    <RadioButton variant="warning" label="Warning Variant" name="variant" value="warning" />
    <RadioButton variant="error" label="Error Variant" name="variant" value="error" />
  </div>
);

export const RadioGroup = () => {
  const [selected, setSelected] = useState('option1');

  return (
    <div className="space-y-4">
      <RadioButton
        label="Option 1"
        name="group"
        value="option1"
        checked={selected === 'option1'}
        onChange={() => setSelected('option1')}
      />
      <RadioButton
        label="Option 2"
        name="group"
        value="option2"
        checked={selected === 'option2'}
        onChange={() => setSelected('option2')}
      />
      <RadioButton
        label="Option 3"
        name="group"
        value="option3"
        checked={selected === 'option3'}
        onChange={() => setSelected('option3')}
      />
    </div>
  );
};

export const WithCustomLabel = Template.bind({});
WithCustomLabel.args = {
  label: (
    <div className="flex items-center gap-2">
      <FiWifi className="text-blue-500" />
      <span>WiFi Connection</span>
    </div>
  ),
  name: 'custom',
}; 