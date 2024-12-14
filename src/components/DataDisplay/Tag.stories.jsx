import React from 'react';
import Tag from './Tag';
import {
  FiStar,
  FiHeart,
  FiBookmark,
  FiTrendingUp,
  FiGift,
  FiAward,
  FiCoffee,
  FiUser,
} from 'react-icons/fi';

export default {
  title: 'DataDisplay/Tag',
  component: Tag,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'solid', 'outlined'],
    },
    color: {
      control: 'select',
      options: ['gray', 'primary', 'secondary', 'success', 'warning', 'error'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    status: {
      control: 'select',
      options: [null, 'success', 'warning', 'error', 'info'],
    },
  },
};

// Basic tag
export const Basic = {
  args: {
    label: 'Basic Tag',
    variant: 'default',
    color: 'gray',
    size: 'medium',
  },
};

// With icon
export const WithIcon = {
  args: {
    label: 'Featured',
    icon: FiStar,
    color: 'primary',
  },
};

// Closable tag
export const Closable = {
  args: {
    label: 'Closable Tag',
    closable: true,
    onClose: () => console.log('Tag closed'),
  },
};

// Different variants
export const Variants = () => (
  <div className="space-x-2">
    <Tag label="Default" variant="default" />
    <Tag label="Solid" variant="solid" color="primary" />
    <Tag label="Outlined" variant="outlined" color="secondary" />
  </div>
);

// Different colors
export const Colors = () => (
  <div className="space-x-2">
    <Tag label="Gray" color="gray" />
    <Tag label="Primary" color="primary" />
    <Tag label="Secondary" color="secondary" />
    <Tag label="Success" color="success" />
    <Tag label="Warning" color="warning" />
    <Tag label="Error" color="error" />
  </div>
);

// Different sizes
export const Sizes = () => (
  <div className="space-x-2 items-center flex">
    <Tag label="Small" size="small" />
    <Tag label="Medium" size="medium" />
    <Tag label="Large" size="large" />
  </div>
);

// With status
export const WithStatus = () => (
  <div className="space-x-2">
    <Tag label="Success" status="success" color="success" />
    <Tag label="Warning" status="warning" color="warning" />
    <Tag label="Error" status="error" color="error" />
    <Tag label="Info" status="info" color="primary" />
  </div>
);

// Clickable tags
export const Clickable = () => (
  <div className="space-x-2">
    <Tag
      label="Click me"
      clickable
      onClick={() => console.log('Tag clicked')}
      color="primary"
    />
    <Tag
      label="With icon"
      icon={FiHeart}
      clickable
      onClick={() => console.log('Tag clicked')}
      color="secondary"
    />
  </div>
);

// Group of tags
export const TagGroup = () => (
  <div className="space-y-4">
    <div className="space-x-2">
      <Tag label="React" icon={FiBookmark} color="primary" />
      <Tag label="TypeScript" icon={FiBookmark} color="secondary" />
      <Tag label="JavaScript" icon={FiBookmark} color="warning" />
    </div>
    
    <div className="space-x-2">
      <Tag label="Popular" icon={FiTrendingUp} color="success" />
      <Tag label="New" icon={FiGift} color="error" />
      <Tag label="Featured" icon={FiStar} color="primary" />
    </div>
  </div>
);

// Interactive example
export const InteractiveExample = () => {
  const [tags, setTags] = React.useState([
    { id: 1, label: 'Design', icon: FiStar },
    { id: 2, label: 'Development', icon: FiAward },
    { id: 3, label: 'Marketing', icon: FiTrendingUp },
    { id: 4, label: 'Product', icon: FiGift },
  ]);

  const handleRemove = (id) => {
    setTags(tags.filter(tag => tag.id !== id));
  };

  return (
    <div className="space-y-4">
      <div className="space-x-2">
        {tags.map(tag => (
          <Tag
            key={tag.id}
            label={tag.label}
            icon={tag.icon}
            color="primary"
            closable
            onClose={() => handleRemove(tag.id)}
            variant="outlined"
          />
        ))}
      </div>
      
      <button
        onClick={() => {
          const id = Math.max(0, ...tags.map(t => t.id)) + 1;
          setTags([...tags, {
            id,
            label: `Tag ${id}`,
            icon: FiCoffee,
          }]);
        }}
        className="px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors"
      >
        Add Tag
      </button>
    </div>
  );
};

// Complex example
export const ComplexExample = () => (
  <div className="space-y-6">
    <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
      <h3 className="text-lg font-medium mb-3">Project Details</h3>
      <div className="space-x-2">
        <Tag
          label="High Priority"
          color="error"
          icon={FiStar}
          variant="outlined"
        />
        <Tag
          label="In Progress"
          color="primary"
          status="info"
          variant="solid"
        />
        <Tag
          label="Frontend"
          color="secondary"
          icon={FiBookmark}
        />
      </div>
    </div>
    
    <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
      <h3 className="text-lg font-medium mb-3">Team Members</h3>
      <div className="space-x-2">
        <Tag
          label="John Doe"
          color="gray"
          icon={FiUser}
          closable
          variant="outlined"
        />
        <Tag
          label="Jane Smith"
          color="gray"
          icon={FiUser}
          closable
          variant="outlined"
        />
        <Tag
          label="Add Member"
          color="primary"
          icon={FiUser}
          clickable
          onClick={() => console.log('Add member clicked')}
          variant="dashed"
        />
      </div>
    </div>
  </div>
); 