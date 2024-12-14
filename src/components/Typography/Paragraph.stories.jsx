import React from 'react';
import Paragraph from './Paragraph';
import {
  FiInfo,
  FiMessageCircle,
  FiAlertCircle,
  FiCheckCircle,
  FiBookOpen,
  FiFileText,
  FiClipboard,
  FiEdit3,
} from 'react-icons/fi';

export default {
  title: 'Typography/Paragraph',
  component: Paragraph,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A versatile paragraph component with multiple variants, animations, and professional styling.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'error'],
      description: 'Visual style variant',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Text size',
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
      description: 'Text alignment',
    },
    truncate: {
      control: 'boolean',
      description: 'Enable text truncation',
    },
    maxLines: {
      control: 'number',
      description: 'Maximum number of lines to display',
    },
    animate: {
      control: 'boolean',
      description: 'Enable animations',
    },
  },
};

const loremIpsum = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
`;

// Default paragraph
export const Default = {
  args: {
    children: loremIpsum,
  },
};

// All variants
export const Variants = () => (
  <div className="space-y-6">
    {['default', 'primary', 'secondary', 'success', 'warning', 'error'].map((variant) => (
      <Paragraph key={variant} variant={variant}>
        This is a {variant} paragraph variant. {loremIpsum}
      </Paragraph>
    ))}
  </div>
);

// Different sizes
export const Sizes = () => (
  <div className="space-y-6">
    {['small', 'medium', 'large'].map((size) => (
      <Paragraph key={size} size={size}>
        This is a {size} size paragraph. {loremIpsum}
      </Paragraph>
    ))}
  </div>
);

// With icons
export const WithIcons = () => (
  <div className="space-y-6">
    <Paragraph icon={<FiInfo className="w-5 h-5" />} variant="primary">
      This is an informational paragraph with an icon.
    </Paragraph>
    <Paragraph icon={<FiMessageCircle className="w-5 h-5" />} variant="secondary">
      This is a message paragraph with an icon.
    </Paragraph>
    <Paragraph icon={<FiAlertCircle className="w-5 h-5" />} variant="warning">
      This is a warning paragraph with an icon.
    </Paragraph>
    <Paragraph icon={<FiCheckCircle className="w-5 h-5" />} variant="success">
      This is a success paragraph with an icon.
    </Paragraph>
  </div>
);

// Truncated text
export const TruncatedText = () => (
  <div className="space-y-6">
    <Paragraph truncate>
      This is a truncated paragraph. {loremIpsum}
    </Paragraph>
    <Paragraph maxLines={2}>
      This is a paragraph with max 2 lines. {loremIpsum} {loremIpsum}
    </Paragraph>
    <Paragraph maxLines={3}>
      This is a paragraph with max 3 lines. {loremIpsum} {loremIpsum} {loremIpsum}
    </Paragraph>
  </div>
);

// Interactive features
export const InteractiveFeatures = () => (
  <div className="space-y-6">
    <Paragraph copyable icon={<FiClipboard className="w-5 h-5" />}>
      This is a copyable paragraph. Click the copy icon to copy the text.
    </Paragraph>
    <Paragraph
      editable
      icon={<FiEdit3 className="w-5 h-5" />}
      onEdit={() => console.log('Edit clicked')}
    >
      This is an editable paragraph. Click the edit icon to edit the text.
    </Paragraph>
    <Paragraph
      copyable
      editable
      icon={<FiFileText className="w-5 h-5" />}
      onEdit={() => console.log('Edit clicked')}
    >
      This paragraph is both copyable and editable.
    </Paragraph>
  </div>
);

// Modern content blocks
export const ModernContentBlocks = () => (
  <div className="space-y-8">
    <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-900/10 p-6 rounded-xl">
      <Paragraph
        icon={<FiBookOpen className="w-6 h-6" />}
        size="large"
        variant="primary"
        className="mb-4"
      >
        Featured Content
      </Paragraph>
      <Paragraph size="medium" variant="secondary">
        {loremIpsum}
      </Paragraph>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[
        {
          icon: FiInfo,
          title: 'Important Information',
          content: 'Key details about our services and offerings.',
          variant: 'primary',
        },
        {
          icon: FiMessageCircle,
          title: 'Latest Updates',
          content: 'Recent changes and improvements to our platform.',
          variant: 'success',
        },
      ].map(({ icon: Icon, title, content, variant }) => (
        <div
          key={title}
          className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
        >
          <Paragraph
            icon={<Icon className="w-5 h-5" />}
            variant={variant}
            size="large"
            className="mb-2"
          >
            {title}
          </Paragraph>
          <Paragraph variant="secondary" size="medium">
            {content} {loremIpsum}
          </Paragraph>
        </div>
      ))}
    </div>
  </div>
); 