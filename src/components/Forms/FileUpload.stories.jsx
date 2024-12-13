/**
 * @component FileUpload
 * @description A professional file upload component with drag and drop support, preview, and rich features.
 * 
 * @example
 * ```jsx
 * // Basic usage
 * import { FileUpload } from './components/Forms';
 * 
 * function MyComponent() {
 *   const handleChange = (files) => {
 *     console.log('Selected files:', files);
 *   };
 * 
 *   return (
 *     <FileUpload
 *       accept="image/*"
 *       onChange={handleChange}
 *       helperText="Upload your profile picture"
 *     />
 *   );
 * }
 * 
 * // With multiple files and validation
 * <FileUpload
 *   accept=".pdf,.doc,.docx"
 *   multiple
 *   maxSize={10485760} // 10MB
 *   maxFiles={3}
 *   variant="outlined"
 *   color="primary"
 *   size="large"
 *   onChange={handleChange}
 *   onError={handleError}
 * />
 * ```
 */

import React from 'react';
import FileUpload from './FileUpload';

export default {
  title: 'Forms/FileUpload',
  component: FileUpload,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile file upload component with drag and drop support, preview, and rich features.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'filled', 'outlined'],
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
  },
};

// Default file upload
export const Default = {
  args: {
    accept: 'image/*',
    helperText: 'Upload your files here',
    onChange: (files) => console.log('Files changed:', files),
    onError: (errors) => console.log('Upload errors:', errors),
  },
};

// Multiple file upload
export const Multiple = {
  args: {
    accept: 'image/*,application/pdf',
    multiple: true,
    maxFiles: 5,
    helperText: 'Upload up to 5 files',
    onChange: (files) => console.log('Files changed:', files),
    onError: (errors) => console.log('Upload errors:', errors),
  },
};

// With validation
export const WithValidation = {
  args: {
    accept: '.pdf,.doc,.docx',
    maxSize: 5242880, // 5MB
    helperText: 'Maximum file size: 5MB',
    error: 'Please upload a valid document',
    onChange: (files) => console.log('Files changed:', files),
    onError: (errors) => console.log('Upload errors:', errors),
  },
};

// Different variants
export const Variants = () => (
  <div className="space-y-8">
    <FileUpload
      variant="default"
      accept="image/*"
      helperText="Default variant"
    />
    <FileUpload
      variant="filled"
      accept="image/*"
      helperText="Filled variant"
    />
    <FileUpload
      variant="outlined"
      accept="image/*"
      helperText="Outlined variant"
    />
  </div>
);

// Size variations
export const Sizes = () => (
  <div className="space-y-8">
    <FileUpload
      size="small"
      accept="image/*"
      helperText="Small size"
    />
    <FileUpload
      size="medium"
      accept="image/*"
      helperText="Medium size"
    />
    <FileUpload
      size="large"
      accept="image/*"
      helperText="Large size"
    />
  </div>
);

// Color variations
export const Colors = () => (
  <div className="space-y-8">
    <FileUpload
      color="primary"
      accept="image/*"
      helperText="Primary color"
    />
    <FileUpload
      color="secondary"
      accept="image/*"
      helperText="Secondary color"
    />
    <div className="p-8 bg-gray-800 rounded-lg">
      <FileUpload
        color="white"
        accept="image/*"
        helperText="White color"
      />
    </div>
  </div>
);

// With image preview
export const WithImagePreview = {
  args: {
    accept: 'image/*',
    preview: true,
    previewMaxHeight: 200,
    helperText: 'Upload images to see previews',
    onChange: (files) => console.log('Files changed:', files),
  },
};

// Disabled state
export const Disabled = {
  args: {
    accept: 'image/*',
    disabled: true,
    helperText: 'Upload is disabled',
  },
};

// Success state
export const Success = {
  args: {
    accept: 'image/*',
    success: 'Files uploaded successfully',
    helperText: 'All files have been processed',
  },
};

// Error state
export const Error = {
  args: {
    accept: 'image/*',
    error: 'Error uploading files',
    helperText: 'Please try again',
  },
};

// Complex example
export const ComplexExample = () => {
  const [files, setFiles] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [success, setSuccess] = React.useState(null);

  const handleChange = (newFiles) => {
    setFiles(Array.isArray(newFiles) ? newFiles : [newFiles]);
    setError(null);
    setSuccess(null);
  };

  const handleError = (errors) => {
    setError(errors[0]);
    setSuccess(null);
  };

  const handleUpload = () => {
    if (files.length === 0) {
      setError('Please select files to upload');
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    // Simulate upload
    setTimeout(() => {
      setLoading(false);
      setSuccess('Files uploaded successfully');
      console.log('Uploaded files:', files);
    }, 2000);
  };

  return (
    <div className="space-y-4">
      <FileUpload
        accept="image/*,application/pdf"
        multiple
        maxSize={10485760} // 10MB
        maxFiles={5}
        variant="outlined"
        color="primary"
        onChange={handleChange}
        onError={handleError}
        error={error}
        success={success}
        disabled={loading}
        helperText={loading ? 'Uploading files...' : 'Upload up to 5 files (max 10MB each)'}
      />
      {files.length > 0 && (
        <button
          onClick={handleUpload}
          disabled={loading}
          className={`
            w-full px-4 py-2 rounded-lg
            ${loading
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-blue-500 hover:bg-blue-600'}
            text-white font-medium
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
            transition-colors duration-200
          `}
        >
          {loading ? 'Uploading...' : 'Upload Files'}
        </button>
      )}
    </div>
  );
}; 