import React from 'react';
import Link from './Link';
import {
  FiExternalLink,
  FiArrowRight,
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiGlobe,
  FiDownload,
  FiBookmark,
  FiShare2,
  FiLink,
} from 'react-icons/fi';

export default {
  title: 'Typography/Link',
  component: Link,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A versatile link component with multiple variants, animations, and professional styling.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'success', 'warning', 'error'],
      description: 'Visual style variant',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Link size',
    },
    external: {
      control: 'boolean',
      description: 'External link behavior',
    },
    underline: {
      control: 'select',
      options: ['none', 'always', 'hover'],
      description: 'Underline style',
    },
    icon: {
      control: 'boolean',
      description: 'Show/hide icon',
    },
    animate: {
      control: 'boolean',
      description: 'Enable animations',
    },
  },
};

// Default link
export const Default = {
  args: {
    href: '#',
    children: 'Default Link',
  },
};

// All variants
export const Variants = () => (
  <div className="space-y-4">
    {['default', 'secondary', 'success', 'warning', 'error'].map((variant) => (
      <div key={variant}>
        <Link href="#" variant={variant}>
          {variant.charAt(0).toUpperCase() + variant.slice(1)} Link
        </Link>
      </div>
    ))}
  </div>
);

// Different sizes
export const Sizes = () => (
  <div className="space-y-4">
    {['small', 'medium', 'large'].map((size) => (
      <div key={size}>
        <Link href="#" size={size}>
          {size.charAt(0).toUpperCase() + size.slice(1)} Size Link
        </Link>
      </div>
    ))}
  </div>
);

// Underline variations
export const UnderlineStyles = () => (
  <div className="space-y-4">
    {['none', 'always', 'hover'].map((style) => (
      <div key={style}>
        <Link href="#" underline={style}>
          {style.charAt(0).toUpperCase() + style.slice(1)} Underline
        </Link>
      </div>
    ))}
  </div>
);

// External links
export const ExternalLinks = () => (
  <div className="space-y-4">
    <Link href="https://github.com" external>
      GitHub Repository
    </Link>
    <Link href="https://twitter.com" external variant="secondary">
      Twitter Profile
    </Link>
    <Link href="https://linkedin.com" external variant="success">
      LinkedIn Page
    </Link>
  </div>
);

// With custom icons
export const WithCustomIcons = () => (
  <div className="space-y-4">
    <Link href="#" icon={<FiGithub />}>
      GitHub Profile
    </Link>
    <Link href="#" icon={<FiTwitter />} variant="secondary">
      Twitter Feed
    </Link>
    <Link href="#" icon={<FiLinkedin />} variant="success">
      LinkedIn Profile
    </Link>
    <Link href="#" icon={<FiGlobe />} variant="warning">
      Website
    </Link>
  </div>
);

// Modern action links
export const ModernActionLinks = () => (
  <div className="space-y-8">
    <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-900/10 p-6 rounded-xl">
      <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { icon: FiDownload, text: 'Download Resources', variant: 'default' },
          { icon: FiBookmark, text: 'Save for Later', variant: 'secondary' },
          { icon: FiShare2, text: 'Share Content', variant: 'success' },
          { icon: FiLink, text: 'Copy Link', variant: 'warning' },
        ].map(({ icon: Icon, text, variant }) => (
          <Link
            key={text}
            href="#"
            variant={variant}
            className="p-3 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3">
              <Icon className="w-5 h-5" />
              <span>{text}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        {
          icon: FiGlobe,
          title: 'Visit Website',
          description: 'Explore our main website',
          variant: 'default',
        },
        {
          icon: FiGithub,
          title: 'View Source',
          description: 'Check out our GitHub',
          variant: 'secondary',
        },
        {
          icon: FiDownload,
          title: 'Get Started',
          description: 'Download the package',
          variant: 'success',
        },
      ].map(({ icon: Icon, title, description, variant }) => (
        <Link
          key={title}
          href="#"
          variant={variant}
          className="block p-4 bg-white dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300"
        >
          <div className="flex flex-col items-center text-center gap-2">
            <Icon className="w-8 h-8 mb-2" />
            <span className="font-semibold">{title}</span>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              {description}
            </span>
          </div>
        </Link>
      ))}
    </div>
  </div>
); 