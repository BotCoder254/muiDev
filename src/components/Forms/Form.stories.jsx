/**
 * @component Form
 * @description A professional form component with validation, rich features, and multiple variants.
 * 
 * @example
 * ```jsx
 * // Basic usage
 * import { Form } from './components/Forms';
 * 
 * function MyForm() {
 *   const handleSubmit = (e) => {
 *     const formData = new FormData(e.target);
 *     console.log(Object.fromEntries(formData));
 *   };
 * 
 *   return (
 *     <Form onSubmit={handleSubmit}>
 *       <Form.Field
 *         label="Username"
 *         name="username"
 *         required
 *         helperText="Enter your username"
 *       />
 *       <Form.Field
 *         label="Password"
 *         name="password"
 *         type="password"
 *         required
 *       />
 *       <button type="submit">Submit</button>
 *     </Form>
 *   );
 * }
 * 
 * // With validation and styling
 * <Form
 *   variant="outlined"
 *   color="primary"
 *   size="large"
 *   layout="horizontal"
 * >
 *   <Form.Field
 *     label="Email"
 *     name="email"
 *     type="email"
 *     required
 *     error="Please enter a valid email"
 *   />
 *   <Form.Field
 *     label="Phone"
 *     name="phone"
 *     type="tel"
 *     success="Phone number verified"
 *   />
 * </Form>
 * ```
 */

import React from 'react';
import Form from './Form';

export default {
  title: 'Forms/Form',
  component: Form,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile form component with multiple variants, validation, and rich features.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'filled', 'outlined', 'underlined'],
      description: 'Visual style variant',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size preset',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'white'],
      description: 'Color theme',
    },
    layout: {
      control: 'select',
      options: ['vertical', 'horizontal', 'inline'],
      description: 'Layout style',
    },
  },
};

// Default form
export const Default = {
  args: {
    children: (
      <>
        <Form.Field
          label="Username"
          name="username"
          placeholder="Enter username"
          helperText="Choose a unique username"
          required
        />
        <Form.Field
          label="Email"
          name="email"
          type="email"
          placeholder="Enter email"
          helperText="We'll never share your email"
          required
        />
        <Form.Field
          label="Password"
          name="password"
          type="password"
          placeholder="Enter password"
          helperText="Must be at least 8 characters"
          required
        />
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </>
    ),
    onSubmit: (e) => {
      e.preventDefault();
      console.log('Form submitted');
    },
  },
};

// With validation states
export const WithValidation = {
  args: {
    children: (
      <>
        <Form.Field
          label="Username"
          name="username"
          value="johndoe"
          success="Username is available"
        />
        <Form.Field
          label="Email"
          name="email"
          type="email"
          value="invalid-email"
          error="Please enter a valid email address"
        />
        <Form.Field
          label="Password"
          name="password"
          type="password"
          helperText="Must be at least 8 characters"
        />
      </>
    ),
  },
};

// Different variants
export const Variants = () => (
  <div className="space-y-8">
    <Form variant="default">
      <Form.Field
        label="Default variant"
        name="default"
        placeholder="Enter text"
      />
    </Form>
    <Form variant="filled">
      <Form.Field
        label="Filled variant"
        name="filled"
        placeholder="Enter text"
      />
    </Form>
    <Form variant="outlined">
      <Form.Field
        label="Outlined variant"
        name="outlined"
        placeholder="Enter text"
      />
    </Form>
    <Form variant="underlined">
      <Form.Field
        label="Underlined variant"
        name="underlined"
        placeholder="Enter text"
      />
    </Form>
  </div>
);

// Size variations
export const Sizes = () => (
  <div className="space-y-8">
    <Form size="small">
      <Form.Field
        label="Small size"
        name="small"
        placeholder="Enter text"
      />
    </Form>
    <Form size="medium">
      <Form.Field
        label="Medium size"
        name="medium"
        placeholder="Enter text"
      />
    </Form>
    <Form size="large">
      <Form.Field
        label="Large size"
        name="large"
        placeholder="Enter text"
      />
    </Form>
  </div>
);

// Color variations
export const Colors = () => (
  <div className="space-y-8">
    <Form color="primary">
      <Form.Field
        label="Primary color"
        name="primary"
        placeholder="Enter text"
      />
    </Form>
    <Form color="secondary">
      <Form.Field
        label="Secondary color"
        name="secondary"
        placeholder="Enter text"
      />
    </Form>
    <div className="p-8 bg-gray-800 rounded-lg">
      <Form color="white">
        <Form.Field
          label="White color"
          name="white"
          placeholder="Enter text"
        />
      </Form>
    </div>
  </div>
);

// Layout variations
export const Layouts = () => (
  <div className="space-y-8">
    <Form layout="vertical">
      <Form.Field
        label="Vertical layout"
        name="vertical"
        placeholder="Enter text"
      />
      <Form.Field
        label="Another field"
        name="another"
        placeholder="Enter text"
      />
    </Form>
    <Form layout="horizontal">
      <Form.Field
        label="Horizontal layout"
        name="horizontal"
        placeholder="Enter text"
      />
      <Form.Field
        label="Another field"
        name="another"
        placeholder="Enter text"
      />
    </Form>
    <Form layout="inline">
      <Form.Field
        label="Inline layout"
        name="inline"
        placeholder="Enter text"
      />
      <Form.Field
        label="Another field"
        name="another"
        placeholder="Enter text"
      />
    </Form>
  </div>
);

// Disabled state
export const Disabled = {
  args: {
    disabled: true,
    children: (
      <>
        <Form.Field
          label="Disabled field"
          name="disabled"
          placeholder="Enter text"
        />
        <Form.Field
          label="Another disabled field"
          name="another"
          placeholder="Enter text"
        />
      </>
    ),
  },
};

// Loading state
export const Loading = {
  args: {
    loading: true,
    children: (
      <>
        <Form.Field
          label="Loading field"
          name="loading"
          placeholder="Enter text"
        />
        <Form.Field
          label="Another loading field"
          name="another"
          placeholder="Enter text"
        />
      </>
    ),
  },
};

// Complex form example
export const ComplexForm = () => {
  const [formState, setFormState] = React.useState({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = React.useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    
    // Simple validation
    if (name === 'email' && value && !/\S+@\S+\.\S+/.test(value)) {
      setErrors((prev) => ({ ...prev, email: 'Invalid email address' }));
    } else if (name === 'password' && value && value.length < 8) {
      setErrors((prev) => ({ ...prev, password: 'Password must be at least 8 characters' }));
    } else {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <Form
      variant="outlined"
      color="primary"
      size="medium"
      onSubmit={(e) => {
        e.preventDefault();
        console.log('Form submitted:', formState);
      }}
    >
      <Form.Field
        label="Username"
        name="username"
        value={formState.username}
        onChange={handleChange}
        required
        helperText="Choose a unique username"
      />
      <Form.Field
        label="Email"
        name="email"
        type="email"
        value={formState.email}
        onChange={handleChange}
        required
        error={errors.email}
      />
      <Form.Field
        label="Password"
        name="password"
        type="password"
        value={formState.password}
        onChange={handleChange}
        required
        error={errors.password}
      />
      <button
        type="submit"
        className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Submit
      </button>
    </Form>
  );
}; 