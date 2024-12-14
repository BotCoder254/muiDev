import React from 'react';
import Container from './Container';
import {
  FiPackage,
  FiLayout,
  FiBox,
  FiZap,
  FiShield,
  FiStar,
  FiTrendingUp,
  FiArrowRight,
  FiCheck,
  FiCpu,
  FiGlobe,
  FiLayers,
} from 'react-icons/fi';

export default {
  title: 'Layout/Container',
  component: Container,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A versatile container component with customizable width, padding, and styling options. Features modern animations and professional design.',
      },
    },
  },
  argTypes: {
    maxWidth: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', 'full'],
      description: 'Maximum width of the container',
    },
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'transparent'],
      description: 'Visual style variant of the container',
    },
    padding: { control: 'boolean', description: 'Enable/disable padding' },
    centered: { control: 'boolean', description: 'Center the container content' },
    fluid: { control: 'boolean', description: 'Make the container full-width' },
    collapsible: { control: 'boolean', description: 'Enable collapse functionality' },
    removable: { control: 'boolean', description: 'Enable remove functionality' },
    customizable: { control: 'boolean', description: 'Enable customization options' },
    animate: { control: 'boolean', description: 'Enable animations' },
  },
};

// Modern default container
export const Default = {
  args: {
    children: (
      <div className="p-8 text-center bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg">
        <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary-500/20 to-primary-500/30 rounded-xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
          <FiZap className="w-8 h-8 text-primary-500" />
        </div>
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
          Modern Container
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto leading-relaxed">
          A professional container with modern styling and smooth animations
        </p>
      </div>
    ),
  },
};

// Enhanced responsive container with different max widths
export const ResponsiveMaxWidth = () => (
  <div className="space-y-8">
    {['sm', 'md', 'lg', 'xl', '2xl'].map((size) => (
      <Container
        key={size}
        maxWidth={size}
        className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 transform hover:scale-[1.02] transition-all duration-300"
      >
        <div className="p-6 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="flex items-center gap-3 mb-2">
            <FiLayout className="w-5 h-5 text-primary-500" />
            <p className="font-medium text-gray-900 dark:text-white">
              Max Width: {size}
            </p>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 pl-8">
            Responsive container that adapts to different screen sizes
          </p>
        </div>
      </Container>
    ))}
  </div>
);

// Enhanced container variants
export const Variants = () => (
  <div className="space-y-6">
    {[
      { variant: 'default', icon: FiBox, description: 'Clean and minimal design' },
      { variant: 'primary', icon: FiStar, description: 'Emphasis on primary colors' },
      { variant: 'secondary', icon: FiLayers, description: 'Subtle secondary styling' },
      { variant: 'transparent', icon: FiGlobe, description: 'Transparent background' },
    ].map(({ variant, icon: Icon, description }) => (
      <Container
        key={variant}
        variant={variant}
        maxWidth="xl"
        className="transform hover:scale-[1.02] transition-all duration-300"
      >
        <div className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center">
              <Icon className="w-5 h-5 text-primary-500" />
            </div>
            <h3 className="text-lg font-semibold capitalize">{variant} Variant</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 pl-[52px]">{description}</p>
        </div>
      </Container>
    ))}
  </div>
);

// Enhanced interactive container
export const Interactive = {
  args: {
    maxWidth: 'xl',
    collapsible: true,
    removable: true,
    customizable: true,
    children: (
      <div className="p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
            Interactive Container
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            This container showcases all interactive features with modern animations and styling
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: FiShield,
              title: 'Advanced Security',
              description: 'Built-in protection and validation',
            },
            {
              icon: FiCpu,
              title: 'Smart Features',
              description: 'Intelligent component behavior',
            },
            {
              icon: FiTrendingUp,
              title: 'Performance',
              description: 'Optimized for speed and efficiency',
            },
            {
              icon: FiZap,
              title: 'Quick Actions',
              description: 'Instant response and feedback',
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-br from-primary-50 to-primary-100/50 dark:from-primary-900/20 dark:to-primary-900/10 rounded-xl group hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 group-hover:text-primary-500 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
};

// Modern card layout with enhanced styling
export const ModernCards = () => (
  <Container maxWidth="xl" variant="transparent" className="space-y-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
        Modern Features
      </h2>
      <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Discover our powerful container component with modern design and animations
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          icon: FiPackage,
          title: 'Smart Components',
          description: 'Modern and clean design with customizable options',
          gradient: 'from-blue-500 to-indigo-500',
        },
        {
          icon: FiLayout,
          title: 'Responsive Layout',
          description: 'Adapts perfectly to any screen size',
          gradient: 'from-primary-500 to-primary-600',
        },
        {
          icon: FiBox,
          title: 'Modern Design',
          description: 'Beautiful animations and transitions',
          gradient: 'from-purple-500 to-pink-500',
        },
      ].map((card, index) => (
        <div
          key={index}
          className="group relative overflow-hidden"
        >
          <div className="p-8 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500">
            <div className={`absolute inset-0 bg-gradient-to-r ${card.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
            <div className="relative">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-primary-500/10 to-primary-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <card.icon className="w-8 h-8 text-primary-500 transform group-hover:rotate-12 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {card.description}
              </p>
              <div className="flex items-center gap-2 text-primary-500 group-hover:translate-x-2 transition-transform duration-300">
                <span className="font-medium">Learn more</span>
                <FiArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </Container>
); 