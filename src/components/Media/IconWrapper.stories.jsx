import React from 'react';
import IconWrapper from './IconWrapper';
import {
  FiHeart,
  FiStar,
  FiBookmark,
  FiShare2,
  FiEdit,
  FiTrash2,
  FiSettings,
  FiDownload,
  FiUpload,
  FiRefreshCw,
} from 'react-icons/fi';

export default {
  title: 'Media/IconWrapper',
  component: IconWrapper,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A professional icon wrapper component with animations and rich features.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'error', 'info'],
      description: 'Visual style variant',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the icon',
    },
    rounded: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'full'],
      description: 'Border radius',
    },
    animate: {
      control: 'boolean',
      description: 'Enable animations',
    },
  },
};

// Default icon wrapper
export const Default = {
  args: {
    icon: FiHeart,
    variant: 'primary',
    size: 'md',
    rounded: 'md',
    tooltip: 'Like',
  },
};

// All variants
export const Variants = () => (
  <div className="flex gap-4">
    <IconWrapper icon={FiHeart} variant="default" tooltip="Default" />
    <IconWrapper icon={FiStar} variant="primary" tooltip="Primary" />
    <IconWrapper icon={FiBookmark} variant="secondary" tooltip="Secondary" />
    <IconWrapper icon={FiShare2} variant="success" tooltip="Success" />
    <IconWrapper icon={FiEdit} variant="warning" tooltip="Warning" />
    <IconWrapper icon={FiTrash2} variant="error" tooltip="Error" />
    <IconWrapper icon={FiSettings} variant="info" tooltip="Info" />
  </div>
);

// All sizes
export const Sizes = () => (
  <div className="flex items-center gap-4">
    <IconWrapper icon={FiHeart} size="xs" tooltip="Extra Small" />
    <IconWrapper icon={FiHeart} size="sm" tooltip="Small" />
    <IconWrapper icon={FiHeart} size="md" tooltip="Medium" />
    <IconWrapper icon={FiHeart} size="lg" tooltip="Large" />
    <IconWrapper icon={FiHeart} size="xl" tooltip="Extra Large" />
  </div>
);

// All rounded options
export const RoundedVariants = () => (
  <div className="flex gap-4">
    <IconWrapper icon={FiHeart} rounded="none" tooltip="Square" />
    <IconWrapper icon={FiHeart} rounded="sm" tooltip="Small Rounded" />
    <IconWrapper icon={FiHeart} rounded="md" tooltip="Medium Rounded" />
    <IconWrapper icon={FiHeart} rounded="lg" tooltip="Large Rounded" />
    <IconWrapper icon={FiHeart} rounded="full" tooltip="Fully Rounded" />
  </div>
);

// With animations
export const WithAnimations = {
  args: {
    icon: FiRefreshCw,
    variant: 'primary',
    size: 'lg',
    rounded: 'full',
    animate: true,
    tooltip: 'Refresh',
  },
};

// Without animations
export const WithoutAnimations = {
  args: {
    icon: FiRefreshCw,
    variant: 'primary',
    size: 'lg',
    rounded: 'full',
    animate: false,
    tooltip: 'Refresh',
  },
};

// Interactive example
export const Interactive = () => {
  const [liked, setLiked] = React.useState(false);
  const [bookmarked, setBookmarked] = React.useState(false);

  return (
    <div className="flex gap-4">
      <IconWrapper
        icon={FiHeart}
        variant={liked ? 'error' : 'default'}
        onClick={() => setLiked(!liked)}
        tooltip={liked ? 'Unlike' : 'Like'}
        className={liked ? 'text-red-500' : ''}
      />
      <IconWrapper
        icon={FiBookmark}
        variant={bookmarked ? 'primary' : 'default'}
        onClick={() => setBookmarked(!bookmarked)}
        tooltip={bookmarked ? 'Remove Bookmark' : 'Bookmark'}
      />
    </div>
  );
};

// Action buttons
export const ActionButtons = () => (
  <div className="flex gap-4">
    <IconWrapper
      icon={FiDownload}
      variant="primary"
      tooltip="Download"
      onClick={() => console.log('Download clicked')}
    />
    <IconWrapper
      icon={FiUpload}
      variant="secondary"
      tooltip="Upload"
      onClick={() => console.log('Upload clicked')}
    />
    <IconWrapper
      icon={FiEdit}
      variant="warning"
      tooltip="Edit"
      onClick={() => console.log('Edit clicked')}
    />
    <IconWrapper
      icon={FiTrash2}
      variant="error"
      tooltip="Delete"
      onClick={() => console.log('Delete clicked')}
    />
  </div>
); 