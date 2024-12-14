import React from 'react';
import FlexboxWrapper from './FlexboxWrapper';
import {
  FiLayout,
  FiGrid,
  FiBox,
  FiImage,
  FiUser,
  FiSettings,
  FiStar,
  FiHeart,
  FiAward,
  FiCheck,
  FiShield,
  FiZap,
  FiTrendingUp,
  FiPackage,
  FiCpu,
} from 'react-icons/fi';

export default {
  title: 'Layout/FlexboxWrapper',
  component: FlexboxWrapper,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A flexible layout component with customizable flex properties and responsive behavior.',
      },
    },
  },
  argTypes: {
    direction: {
      control: 'select',
      options: ['row', 'row-reverse', 'col', 'col-reverse'],
    },
    wrap: {
      control: 'select',
      options: ['wrap', 'nowrap', 'wrap-reverse'],
    },
    justify: {
      control: 'select',
      options: ['start', 'end', 'center', 'between', 'around', 'evenly'],
    },
    align: {
      control: 'select',
      options: ['start', 'end', 'center', 'baseline', 'stretch'],
    },
    gap: {
      control: 'select',
      options: ['none', 'small', 'default', 'large', 'xlarge'],
    },
    variant: {
      control: 'select',
      options: ['default', 'bordered', 'cards', 'outline'],
    },
    animate: { control: 'boolean' },
    customizable: { control: 'boolean' },
    responsive: { control: 'boolean' },
  },
};

// Default flexbox
export const Default = {
  args: {
    children: [1, 2, 3, 4].map((item) => (
      <div
        key={item}
        className="p-6 bg-white dark:bg-gray-800 rounded-lg text-center"
      >
        Flex Item {item}
      </div>
    )),
  },
};

// Modern navigation bar with enhanced styling
export const NavigationBar = () => (
  <FlexboxWrapper
    direction="row"
    justify="between"
    align="center"
    className="bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-4 rounded-xl shadow-lg backdrop-blur-sm border border-gray-100 dark:border-gray-700"
  >
    <div className="flex items-center gap-8">
      <div className="flex items-center gap-2 text-2xl font-bold bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
        <FiZap className="w-8 h-8 text-primary-500" />
        Logo
      </div>
      <FlexboxWrapper gap="large" className="hidden md:flex">
        {[
          { name: 'Home', icon: FiGrid },
          { name: 'Features', icon: FiStar },
          { name: 'Pricing', icon: FiPackage },
          { name: 'About', icon: FiUser },
        ].map((item) => (
          <button
            key={item.name}
            className="px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 flex items-center gap-2 group"
          >
            <item.icon className="w-4 h-4 text-gray-400 group-hover:text-primary-500 transition-colors" />
            <span className="group-hover:text-primary-500">{item.name}</span>
          </button>
        ))}
      </FlexboxWrapper>
    </div>
    <FlexboxWrapper gap="small">
      <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-105">
        <FiSettings className="w-5 h-5 hover:text-primary-500" />
      </button>
      <button className="p-2 rounded-full bg-primary-500 text-white hover:bg-primary-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-primary-500/20">
        <FiUser className="w-5 h-5" />
      </button>
    </FlexboxWrapper>
  </FlexboxWrapper>
);

// Feature cards with enhanced hover effects
export const FeatureCards = () => (
  <FlexboxWrapper
    wrap="wrap"
    gap="large"
    justify="center"
    variant="cards"
  >
    {[
      {
        icon: FiLayout,
        title: 'Flexible Layout',
        description: 'Easily create responsive layouts',
        gradient: 'from-blue-500 to-indigo-500',
      },
      {
        icon: FiGrid,
        title: 'Grid System',
        description: 'Powerful grid-based arrangements',
        gradient: 'from-primary-500 to-primary-600',
      },
      {
        icon: FiCpu,
        title: 'Smart Components',
        description: 'Pre-built UI components',
        gradient: 'from-purple-500 to-pink-500',
      },
    ].map((feature, index) => (
      <div
        key={index}
        className="flex-1 min-w-[280px] max-w-[350px] group"
      >
        <div className="relative p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-500" />
          <div className="relative">
            <div className="w-14 h-14 bg-gradient-to-br from-primary-500/10 to-primary-500/20 dark:from-primary-500/20 dark:to-primary-500/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
              <feature.icon className="w-7 h-7 text-primary-500 transform group-hover:rotate-12 transition-transform duration-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {feature.description}
            </p>
            <div className="mt-6 flex items-center gap-2 text-primary-500 group-hover:translate-x-2 transition-transform duration-300">
              <span className="font-medium">Learn more</span>
              <FiTrendingUp className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    ))}
  </FlexboxWrapper>
);

// Modern gallery layout with enhanced animations
export const GalleryLayout = () => (
  <FlexboxWrapper
    wrap="wrap"
    gap="small"
    justify="center"
    className="max-w-4xl mx-auto"
  >
    {[...Array(8)].map((_, index) => (
      <div
        key={index}
        className="relative group cursor-pointer"
        style={{
          flex: index % 3 === 0 ? '2 1 300px' : '1 1 200px',
        }}
      >
        <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-lg overflow-hidden transform group-hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-xl">
          <div className="w-full h-full flex items-center justify-center relative">
            <FiImage className="w-8 h-8 text-gray-400 group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-4">
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all duration-200 hover:scale-110">
                <FiHeart className="w-5 h-5 text-white" />
              </button>
              <button className="p-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all duration-200 hover:scale-110">
                <FiStar className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    ))}
  </FlexboxWrapper>
);

// Interactive example with all features
export const Interactive = {
  args: {
    customizable: true,
    animate: true,
    responsive: true,
    variant: 'cards',
    gap: 'large',
    children: [1, 2, 3, 4].map((item) => (
      <div
        key={item}
        className="flex-1 min-w-[200px]"
      >
        <div className="p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg">
          <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center mb-4">
            <FiBox className="w-5 h-5 text-primary-500" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Flex Item {item}</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Try customizing the flexbox layout using the controls
          </p>
        </div>
      </div>
    )),
  },
};

// Enhanced pricing cards with better animations and styling
export const PricingCards = () => (
  <FlexboxWrapper
    wrap="wrap"
    gap="large"
    justify="center"
    className="max-w-5xl mx-auto"
  >
    {[
      {
        icon: FiShield,
        title: 'Basic',
        price: '$9',
        features: ['Feature 1', 'Feature 2', 'Feature 3'],
        gradient: 'from-blue-500 to-blue-600',
      },
      {
        icon: FiAward,
        title: 'Pro',
        price: '$19',
        features: ['All Basic features', 'Feature 4', 'Feature 5', 'Feature 6'],
        gradient: 'from-primary-500 to-primary-600',
        popular: true,
      },
      {
        icon: FiZap,
        title: 'Enterprise',
        price: '$49',
        features: ['All Pro features', 'Feature 7', 'Feature 8', 'Feature 9'],
        gradient: 'from-purple-500 to-purple-600',
      },
    ].map((plan, index) => (
      <div
        key={index}
        className="flex-1 min-w-[300px] max-w-[400px] group"
      >
        <div
          className={`relative p-8 rounded-xl transform transition-all duration-300 ${
            plan.popular
              ? 'bg-gradient-to-br shadow-xl scale-105 hover:scale-110'
              : 'bg-white dark:bg-gray-800 shadow-lg hover:scale-105'
          } ${plan.popular ? plan.gradient : ''}`}
        >
          {plan.popular && (
            <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
              <div className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                Most Popular
              </div>
            </div>
          )}
          <div className={`text-center ${plan.popular ? 'text-white' : ''}`}>
            <plan.icon className={`w-12 h-12 mx-auto mb-4 ${plan.popular ? 'text-white' : 'text-primary-500'}`} />
            <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
            <div className="text-4xl font-bold mb-6">{plan.price}<span className="text-sm font-normal">/month</span></div>
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center justify-center gap-2">
                  <FiCheck className={`w-5 h-5 ${plan.popular ? 'text-white' : 'text-primary-500'}`} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-3 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 ${
                plan.popular
                  ? 'bg-white text-primary-600 hover:bg-gray-100 hover:shadow-lg'
                  : 'bg-primary-500 text-white hover:bg-primary-600 hover:shadow-lg'
              }`}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    ))}
  </FlexboxWrapper>
); 