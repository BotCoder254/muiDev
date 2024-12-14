import React from 'react';
import Stepper from './Stepper';
import {
  FiUser,
  FiCreditCard,
  FiPackage,
  FiCheck,
  FiUpload,
  FiEdit,
  FiSettings,
  FiLock,
  FiMail,
  FiImage,
  FiDatabase,
  FiServer,
} from 'react-icons/fi';

export default {
  title: 'Navigation/Stepper',
  component: Stepper,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outlined', 'dashed'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
    },
  },
};

const defaultSteps = [
  { label: 'Account', icon: FiUser },
  { label: 'Payment', icon: FiCreditCard },
  { label: 'Review', icon: FiPackage },
  { label: 'Complete', icon: FiCheck },
];

// Basic stepper
export const Basic = {
  args: {
    steps: defaultSteps,
    activeStep: 1,
    variant: 'default',
    color: 'primary',
    size: 'medium',
  },
};

// Vertical orientation
export const Vertical = {
  args: {
    steps: defaultSteps,
    activeStep: 1,
    orientation: 'vertical',
  },
};

// Different variants
export const Variants = () => (
  <div className="space-y-8">
    <Stepper
      steps={defaultSteps}
      activeStep={1}
      variant="default"
      color="primary"
    />
    <Stepper
      steps={defaultSteps}
      activeStep={1}
      variant="outlined"
      color="primary"
    />
    <Stepper
      steps={defaultSteps}
      activeStep={1}
      variant="dashed"
      color="primary"
    />
  </div>
);

// Different colors
export const Colors = () => (
  <div className="space-y-8">
    <Stepper
      steps={defaultSteps}
      activeStep={1}
      color="primary"
    />
    <Stepper
      steps={defaultSteps}
      activeStep={1}
      color="secondary"
    />
    <Stepper
      steps={defaultSteps}
      activeStep={1}
      color="success"
    />
  </div>
);

// Different sizes
export const Sizes = () => (
  <div className="space-y-8">
    <Stepper
      steps={defaultSteps}
      activeStep={1}
      size="small"
    />
    <Stepper
      steps={defaultSteps}
      activeStep={1}
      size="medium"
    />
    <Stepper
      steps={defaultSteps}
      activeStep={1}
      size="large"
    />
  </div>
);

// With optional labels
export const WithOptionalLabels = {
  args: {
    steps: [
      { label: 'Account', icon: FiUser, optional: 'Basic info' },
      { label: 'Profile', icon: FiEdit, optional: 'Additional info' },
      { label: 'Settings', icon: FiSettings, optional: 'Optional' },
      { label: 'Review', icon: FiCheck },
    ],
    activeStep: 1,
  },
};

// With loading and error states
export const WithStates = {
  args: {
    steps: [
      { label: 'Completed', icon: FiUpload },
      { label: 'Loading', icon: FiDatabase, loading: true },
      { label: 'Error', icon: FiServer, error: true },
      { label: 'Warning', icon: FiLock, warning: true },
    ],
    activeStep: 1,
  },
};

// Alternative label placement
export const AlternativeLabel = {
  args: {
    steps: defaultSteps,
    activeStep: 1,
    alternativeLabel: true,
    orientation: 'vertical',
  },
};

// Interactive example
export const InteractiveExample = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = [
    { label: 'Account Setup', icon: FiUser, optional: 'Basic information' },
    { label: 'Profile Details', icon: FiEdit, optional: 'Tell us about yourself' },
    { label: 'Email Verification', icon: FiMail, optional: 'Verify your email' },
    { label: 'Upload Avatar', icon: FiImage, optional: 'Choose a profile picture' },
    { label: 'Complete', icon: FiCheck },
  ];

  return (
    <div className="space-y-8">
      <Stepper
        steps={steps}
        activeStep={activeStep}
        onChange={setActiveStep}
      />
      
      <div className="flex justify-between">
        <button
          onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
          disabled={activeStep === 0}
          className={`
            px-4 py-2 rounded-md
            ${activeStep === 0
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-primary-500 text-white hover:bg-primary-600'}
          `}
        >
          Previous
        </button>
        <button
          onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
          disabled={activeStep === steps.length - 1}
          className={`
            px-4 py-2 rounded-md
            ${activeStep === steps.length - 1
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-primary-500 text-white hover:bg-primary-600'}
          `}
        >
          Next
        </button>
      </div>
    </div>
  );
};

// Complex example
export const ComplexExample = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [steps, setSteps] = React.useState([
    { label: 'Upload Files', icon: FiUpload, status: 'pending' },
    { label: 'Process Data', icon: FiDatabase, status: 'pending' },
    { label: 'Verify', icon: FiLock, status: 'pending' },
    { label: 'Complete', icon: FiCheck, status: 'pending' },
  ]);

  const updateStepStatus = (index, status) => {
    setSteps(steps.map((step, i) => 
      i === index ? { ...step, status } : step
    ));
  };

  const simulateProcess = async () => {
    // Upload
    updateStepStatus(0, 'loading');
    await new Promise(resolve => setTimeout(resolve, 1500));
    updateStepStatus(0, 'completed');
    setActiveStep(1);

    // Process
    updateStepStatus(1, 'loading');
    await new Promise(resolve => setTimeout(resolve, 2000));
    updateStepStatus(1, 'error');
    setActiveStep(1);
  };

  return (
    <div className="space-y-8">
      <Stepper
        steps={steps.map(step => ({
          ...step,
          loading: step.status === 'loading',
          error: step.status === 'error',
          completed: step.status === 'completed',
        }))}
        activeStep={activeStep}
        orientation="vertical"
      />
      
      <div className="flex gap-4">
        <button
          onClick={simulateProcess}
          disabled={activeStep > 0}
          className={`
            px-4 py-2 rounded-md
            ${activeStep > 0
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-primary-500 text-white hover:bg-primary-600'}
          `}
        >
          Start Process
        </button>
        <button
          onClick={() => {
            setActiveStep(0);
            setSteps(steps.map(step => ({ ...step, status: 'pending' })));
          }}
          className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-50"
        >
          Reset
        </button>
      </div>
    </div>
  );
}; 