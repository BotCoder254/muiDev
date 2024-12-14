import React, { useState } from 'react';
import Select from './Select';

export default {
  title: 'Components/Form/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A feature-rich select component with search, multiple selection, and custom styling options.',
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
    multiple: { control: 'boolean' },
    searchable: { control: 'boolean' },
    clearable: { control: 'boolean' },
    loading: { control: 'boolean' },
  },
};

const sampleOptions = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'next', label: 'Next.js' },
];

const Template = (args) => {
  const [value, setValue] = useState(null);
  return (
    <div className="w-72">
      <Select
        {...args}
        value={value}
        onChange={setValue}
        options={sampleOptions}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Select Framework',
  placeholder: 'Choose a framework',
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  label: 'Framework',
  placeholder: 'Select your preferred framework',
  helperText: 'Choose the framework you are most comfortable with',
};

export const Required = Template.bind({});
Required.args = {
  label: 'Required Selection',
  placeholder: 'This field is required',
  required: true,
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Error State',
  error: true,
  helperText: 'Please select a framework',
};

export const WithSuccess = Template.bind({});
WithSuccess.args = {
  label: 'Success State',
  success: true,
  helperText: 'Great choice!',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Select',
  disabled: true,
  placeholder: 'Cannot select',
};

export const Searchable = Template.bind({});
Searchable.args = {
  label: 'Searchable Select',
  searchable: true,
  placeholder: 'Search and select...',
};

export const MultipleSelection = () => {
  const [value, setValue] = useState([]);
  return (
    <div className="w-72">
      <Select
        label="Multiple Selection"
        placeholder="Select frameworks"
        multiple
        searchable
        clearable
        value={value}
        onChange={setValue}
        options={sampleOptions}
      />
    </div>
  );
};

export const LoadingState = Template.bind({});
LoadingState.args = {
  label: 'Loading State',
  loading: true,
  placeholder: 'Loading options...',
};

export const Variants = () => {
  const [outlinedValue, setOutlinedValue] = useState(null);
  const [filledValue, setFilledValue] = useState(null);
  
  return (
    <div className="space-y-4 w-72">
      <Select
        variant="outlined"
        label="Outlined Variant"
        placeholder="Select option..."
        options={sampleOptions}
        value={outlinedValue}
        onChange={setOutlinedValue}
      />
      <Select
        variant="filled"
        label="Filled Variant"
        placeholder="Select option..."
        options={sampleOptions}
        value={filledValue}
        onChange={setFilledValue}
      />
    </div>
  );
};

export const Sizes = () => {
  const [smallValue, setSmallValue] = useState(null);
  const [mediumValue, setMediumValue] = useState(null);
  const [largeValue, setLargeValue] = useState(null);
  
  return (
    <div className="space-y-4 w-72">
      <Select
        size="small"
        label="Small Select"
        placeholder="Small size..."
        options={sampleOptions}
        value={smallValue}
        onChange={setSmallValue}
      />
      <Select
        size="medium"
        label="Medium Select"
        placeholder="Medium size..."
        options={sampleOptions}
        value={mediumValue}
        onChange={setMediumValue}
      />
      <Select
        size="large"
        label="Large Select"
        placeholder="Large size..."
        options={sampleOptions}
        value={largeValue}
        onChange={setLargeValue}
      />
    </div>
  );
};

export const WithClearButton = Template.bind({});
WithClearButton.args = {
  label: 'Clearable Select',
  clearable: true,
  placeholder: 'Select with clear button',
}; 