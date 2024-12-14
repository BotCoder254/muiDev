import React from 'react';
import Grid from './Grid';
import {
  FiBox,
  FiImage,
  FiMusic,
  FiVideo,
  FiFile,
  FiFolder,
  FiStar,
  FiHeart,
  FiAward,
  FiZap,
  FiShield,
  FiCpu,
  FiGlobe,
  FiLayers,
  FiTrendingUp,
  FiArrowRight,
  FiPackage,
  FiLayout,
} from 'react-icons/fi';

export default {
  title: 'Layout/Grid',
  component: Grid,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A responsive grid layout component with customizable columns and styling options. Features modern animations and professional design.',
      },
    },
  },
  argTypes: {
    gap: {
      control: 'select',
      options: ['none', 'small', 'default', 'large', 'xlarge'],
      description: 'Space between grid items',
    },
    autoFlow: {
      control: 'select',
      options: ['row', 'col', 'dense', 'row-dense', 'col-dense'],
      description: 'Grid auto flow direction',
    },
    alignItems: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch', 'baseline'],
      description: 'Vertical alignment of grid items',
    },
    justifyItems: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch'],
      description: 'Horizontal alignment of grid items',
    },
    variant: {
      control: 'select',
      options: ['default', 'bordered', 'cells', 'cards'],
      description: 'Visual style variant',
    },
    animate: { control: 'boolean', description: 'Enable animations' },
    customizable: { control: 'boolean', description: 'Enable customization' },
  },
};

// Modern default grid
export const Default = {
  args: {
    children: [1, 2, 3, 4, 5, 6].map((item) => (
      <div
        key={item}
        className="p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg group hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
      >
        <div className="w-12 h-12 mb-4 bg-gradient-to-br from-primary-500/10 to-primary-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <FiZap className="w-6 h-6 text-primary-500 group-hover:rotate-12 transition-transform duration-300" />
        </div>
        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-500 transition-colors">
          Grid Item {item}
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Professional grid item with modern animations
        </p>
      </div>
    )),
  },
};

// Enhanced responsive grid
export const ResponsiveColumns = () => (
  <Grid
    cols={{
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4,
      xl: 5,
    }}
    gap="large"
    variant="cards"
  >
    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
      <div
        key={item}
        className="group relative overflow-hidden"
      >
        <div className="p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
          <div className="relative">
            <div className="w-12 h-12 mb-4 bg-gradient-to-br from-primary-500/10 to-primary-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <FiLayout className="w-6 h-6 text-primary-500 group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-500 transition-colors">
              Responsive Item {item}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Adapts to different screen sizes with smooth transitions
            </p>
          </div>
        </div>
      </div>
    ))}
  </Grid>
);

// Enhanced feature grid
export const FeatureGrid = () => (
  <Grid
    cols={{
      xs: 1,
      sm: 2,
      lg: 3,
    }}
    gap="large"
    variant="cards"
  >
    {[
      {
        icon: FiShield,
        title: 'Advanced Security',
        description: 'Built-in protection and validation',
        gradient: 'from-blue-500 to-indigo-500',
      },
      {
        icon: FiCpu,
        title: 'Smart Features',
        description: 'Intelligent component behavior',
        gradient: 'from-primary-500 to-primary-600',
      },
      {
        icon: FiTrendingUp,
        title: 'Performance',
        description: 'Optimized for speed and efficiency',
        gradient: 'from-purple-500 to-pink-500',
      },
      {
        icon: FiZap,
        title: 'Quick Actions',
        description: 'Instant response and feedback',
        gradient: 'from-green-500 to-emerald-500',
      },
      {
        icon: FiGlobe,
        title: 'Global Access',
        description: 'Available worldwide with low latency',
        gradient: 'from-orange-500 to-red-500',
      },
      {
        icon: FiLayers,
        title: 'Modern Stack',
        description: 'Built with latest technologies',
        gradient: 'from-pink-500 to-rose-500',
      },
    ].map((feature, index) => (
      <div
        key={index}
        className="group relative overflow-hidden"
      >
        <div className="p-8 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500">
          <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
          <div className="relative">
            <div className="w-16 h-16 mb-6 bg-gradient-to-br from-primary-500/10 to-primary-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <feature.icon className="w-8 h-8 text-primary-500 transform group-hover:rotate-12 transition-transform duration-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {feature.description}
            </p>
            <div className="flex items-center gap-2 text-primary-500 group-hover:translate-x-2 transition-transform duration-300">
              <span className="font-medium">Learn more</span>
              <FiArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    ))}
  </Grid>
);

// Enhanced media grid
export const MediaGrid = () => (
  <Grid
    cols={{
      xs: 2,
      sm: 3,
      md: 4,
      lg: 5,
    }}
    gap="default"
    variant="cards"
  >
    {[
      { icon: FiImage, label: 'Photos', count: '2.4k', color: 'text-blue-500', gradient: 'from-blue-500 to-indigo-500' },
      { icon: FiVideo, label: 'Videos', count: '1.2k', color: 'text-purple-500', gradient: 'from-purple-500 to-pink-500' },
      { icon: FiMusic, label: 'Music', count: '3.8k', color: 'text-pink-500', gradient: 'from-pink-500 to-rose-500' },
      { icon: FiFile, label: 'Documents', count: '892', color: 'text-green-500', gradient: 'from-green-500 to-emerald-500' },
      { icon: FiFolder, label: 'Projects', count: '156', color: 'text-yellow-500', gradient: 'from-yellow-500 to-orange-500' },
    ].map((item, index) => (
      <div
        key={index}
        className="group relative overflow-hidden"
      >
        <div className="p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
          <div className="relative">
            <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <item.icon className={`w-7 h-7 ${item.color} transform group-hover:rotate-12 transition-transform duration-300`} />
            </div>
            <h3 className="text-lg font-semibold text-center mb-1 group-hover:text-primary-500 transition-colors">
              {item.label}
            </h3>
            <p className="text-sm text-center text-gray-500 dark:text-gray-400">
              {item.count} items
            </p>
          </div>
        </div>
      </div>
    ))}
  </Grid>
);

// Enhanced interactive grid
export const Interactive = {
  args: {
    customizable: true,
    animate: true,
    variant: 'cards',
    cols: {
      xs: 1,
      sm: 2,
      md: 3,
    },
    gap: 'large',
    children: [1, 2, 3, 4, 5, 6].map((item) => (
      <div
        key={item}
        className="group relative overflow-hidden"
      >
        <div className="p-8 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
          <div className="relative">
            <div className="w-16 h-16 mb-6 bg-gradient-to-br from-primary-500/10 to-primary-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <FiBox className="w-8 h-8 text-primary-500 transform group-hover:rotate-12 transition-transform duration-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-500 transition-colors">
              Interactive Item {item}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Try customizing the grid layout using the controls
            </p>
            <div className="flex items-center gap-2 text-primary-500 group-hover:translate-x-2 transition-transform duration-300">
              <span className="font-medium">Customize</span>
              <FiArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    )),
  },
}; 