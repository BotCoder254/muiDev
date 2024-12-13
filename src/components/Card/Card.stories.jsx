import React from 'react';
import Card from './Card';
import Button from '../Button/Button';

const description = `
# Card Component

A modern, animated card component with rich features and interactive elements.

## Features
- Multiple variants (default, outlined, elevated, glass, solid, gradient)
- Image support with various positions
- Social actions (like, share, bookmark)
- Badges
- Custom actions and footer
- Loading state
- Interactive hover effects
- Blur and overlay effects
- Responsive design
- Dark mode support

## Usage

\`\`\`jsx
import { Card } from 'mui-components';

function MyComponent() {
  return (
    <Card
      variant="elevated"
      image="https://source.unsplash.com/random"
      imagePosition="top"
      title="Card Title"
      subtitle="Card subtitle"
      badges={['New', 'Featured']}
      showSocialActions
    >
      Card content goes here...
    </Card>
  );
}
\`\`\`
`;

const sampleImage = 'https://source.unsplash.com/random/800x600';
const sampleAvatar = 'https://source.unsplash.com/random/100x100';

export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#1a1a1a' },
        { name: 'colored', value: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'The visual style of the card',
      control: 'select',
      options: ['default', 'outlined', 'elevated', 'glass', 'solid', 'gradient'],
    },
    padding: {
      description: 'The padding size of the card',
      control: 'select',
      options: ['none', 'small', 'medium', 'large'],
    },
    shadow: {
      description: 'The shadow size of the card',
      control: 'select',
      options: ['none', 'small', 'medium', 'large', 'xl'],
    },
    imagePosition: {
      description: 'Position of the image',
      control: 'select',
      options: ['top', 'bottom', 'left', 'right', 'background'],
    },
    hover: {
      description: 'Enable hover effects',
      control: 'boolean',
    },
    interactive: {
      description: 'Make the card interactive',
      control: 'boolean',
    },
    showSocialActions: {
      description: 'Show social action buttons',
      control: 'boolean',
    },
    blur: {
      description: 'Apply blur effect to image',
      control: 'boolean',
    },
    overlay: {
      description: 'Add dark overlay to image',
      control: 'boolean',
    },
  },
};

const ExampleContent = () => (
  <p className="text-gray-600 dark:text-gray-300">
    This is some example content that goes inside the card.
    You can put any content you want here.
  </p>
);

const Template = (args) => (
  <div className="p-8" style={{ maxWidth: '400px' }}>
    <Card {...args}>
      <ExampleContent />
    </Card>
  </div>
);

export const Basic = Template.bind({});
Basic.args = {
  variant: 'default',
  padding: 'medium',
  shadow: 'medium',
  title: 'Card Title',
  subtitle: 'Card Subtitle',
  hover: true,
};

export const WithImage = Template.bind({});
WithImage.args = {
  variant: 'elevated',
  padding: 'medium',
  shadow: 'large',
  image: sampleImage,
  imageAlt: 'Sample image',
  title: 'Card with Image',
  subtitle: 'Beautiful image card',
  badges: ['New', 'Featured'],
  hover: true,
};

export const SocialCard = Template.bind({});
SocialCard.args = {
  variant: 'default',
  padding: 'medium',
  image: sampleImage,
  imageAlt: 'Social card image',
  title: 'Social Card',
  subtitle: 'With social actions',
  showSocialActions: true,
  badges: ['Trending'],
};

export const BlogPost = Template.bind({});
BlogPost.args = {
  variant: 'elevated',
  padding: 'medium',
  image: sampleImage,
  imageAlt: 'Blog post image',
  imagePosition: 'top',
  title: 'Blog Post Title',
  subtitle: 'Posted by John Doe • 5 min read',
  badges: ['Technology', 'Design'],
  footer: (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <img src={sampleAvatar} alt="Author" className="w-8 h-8 rounded-full" />
        <span className="text-sm font-medium">John Doe</span>
      </div>
      <Button variant="outline" size="small">Read More</Button>
    </div>
  ),
};

export const ProductCard = Template.bind({});
ProductCard.args = {
  variant: 'outlined',
  padding: 'medium',
  image: sampleImage,
  imageAlt: 'Product image',
  title: 'Product Name',
  subtitle: '$99.99',
  badges: ['Sale', '-20%'],
  actions: (
    <>
      <Button variant="outline" size="small">Add to Cart</Button>
      <Button variant="primary" size="small">Buy Now</Button>
    </>
  ),
};

export const GlassCard = Template.bind({});
GlassCard.args = {
  variant: 'glass',
  padding: 'medium',
  image: sampleImage,
  imageAlt: 'Glass card image',
  imagePosition: 'background',
  overlay: true,
  title: 'Glass Card',
  subtitle: 'With background image',
};
GlassCard.parameters = {
  backgrounds: { default: 'colored' },
};

export const GradientCard = Template.bind({});
GradientCard.args = {
  variant: 'gradient',
  padding: 'large',
  title: 'Gradient Card',
  subtitle: 'With beautiful gradient background',
  showSocialActions: true,
};

export const ImagePositions = () => (
  <div className="p-8 space-y-8">
    {['top', 'bottom', 'left', 'right', 'background'].map((position) => (
      <Card
        key={position}
        image={sampleImage}
        imagePosition={position}
        title={`Image ${position}`}
        padding="medium"
      >
        <ExampleContent />
      </Card>
    ))}
  </div>
);

export const LoadingStates = () => (
  <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
    <Card loading padding="medium" />
    <Card loading variant="elevated" padding="medium" />
  </div>
);

export const InteractiveCards = () => (
  <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
    <Card
      interactive
      hover
      image={sampleImage}
      title="Interactive Card"
      padding="medium"
      onClick={() => console.log('Card clicked')}
    >
      <ExampleContent />
    </Card>
    <Card
      interactive
      hover
      variant="gradient"
      title="Interactive Gradient"
      padding="medium"
      onClick={() => console.log('Card clicked')}
    >
      <ExampleContent />
    </Card>
  </div>
); 