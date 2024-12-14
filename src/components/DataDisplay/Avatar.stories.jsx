import React from 'react';
import Avatar, { AvatarGroup } from './Avatar';

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile avatar component with various styles and interactive features.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['tiny', 'small', 'medium', 'large', 'xlarge'],
    },
    variant: {
      control: 'select',
      options: ['circle', 'square', 'rounded'],
    },
    status: {
      control: 'select',
      options: [null, 'online', 'offline', 'busy', 'away'],
    },
    statusPosition: {
      control: 'select',
      options: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
    },
    interactive: { control: 'boolean' },
    editable: { control: 'boolean' },
    removable: { control: 'boolean' },
    uploadable: { control: 'boolean' },
  },
};

const sampleImage = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300';

// Sample avatar images for group
const avatarImages = [
  'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300',
  'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300',
  'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300',
];

// Default avatar
export const Default = {
  args: {
    src: sampleImage,
    alt: 'User Avatar',
  },
};

// All sizes
export const Sizes = () => (
  <div className="flex flex-wrap items-end gap-4">
    <Avatar size="tiny" src={sampleImage} />
    <Avatar size="small" src={sampleImage} />
    <Avatar size="medium" src={sampleImage} />
    <Avatar size="large" src={sampleImage} />
    <Avatar size="xlarge" src={sampleImage} />
  </div>
);

// All variants
export const Variants = () => (
  <div className="flex flex-wrap gap-4">
    <Avatar variant="circle" src={sampleImage} />
    <Avatar variant="square" src={sampleImage} />
    <Avatar variant="rounded" src={sampleImage} />
  </div>
);

// With status
export const WithStatus = () => (
  <div className="flex flex-wrap gap-4">
    <Avatar src={sampleImage} status="online" />
    <Avatar src={sampleImage} status="offline" />
    <Avatar src={sampleImage} status="busy" />
    <Avatar src={sampleImage} status="away" />
  </div>
);

// Status positions
export const StatusPositions = () => (
  <div className="flex flex-wrap gap-4">
    <Avatar src={sampleImage} status="online" statusPosition="top-right" />
    <Avatar src={sampleImage} status="online" statusPosition="top-left" />
    <Avatar src={sampleImage} status="online" statusPosition="bottom-right" />
    <Avatar src={sampleImage} status="online" statusPosition="bottom-left" />
  </div>
);

// Interactive avatars
export const Interactive = () => (
  <div className="flex flex-wrap gap-4">
    <Avatar src={sampleImage} interactive onClick={() => alert('Avatar clicked!')} />
    <Avatar
      src={sampleImage}
      editable
      onEdit={() => alert('Edit clicked!')}
    />
    <Avatar
      src={sampleImage}
      removable
      onRemove={() => alert('Remove clicked!')}
    />
    <Avatar
      src={sampleImage}
      uploadable
      onUpload={(file) => alert(`File selected: ${file.name}`)}
    />
  </div>
);

// With fallback
export const WithFallback = () => (
  <div className="flex flex-wrap gap-4">
    <Avatar /> {/* Default fallback */}
    <Avatar src="invalid-url.jpg" /> {/* Error fallback */}
    <Avatar fallback={<div className="w-full h-full bg-primary-100 flex items-center justify-center">JD</div>} />
  </div>
);

// Avatar group
export const Group = () => (
  <div className="space-y-8">
    <AvatarGroup>
      {avatarImages.slice(0, 4).map((src, index) => (
        <Avatar key={index} src={src} />
      ))}
    </AvatarGroup>

    <AvatarGroup max={3}>
      {avatarImages.map((src, index) => (
        <Avatar key={index} src={src} />
      ))}
    </AvatarGroup>

    <AvatarGroup size="large" spacing={-4}>
      {avatarImages.slice(0, 3).map((src, index) => (
        <Avatar key={index} src={src} />
      ))}
    </AvatarGroup>
  </div>
);

// Interactive example with all features
export const FullFeatured = () => {
  const [avatars, setAvatars] = React.useState([
    { id: 1, src: avatarImages[0], status: 'online' },
    { id: 2, src: avatarImages[1], status: 'busy' },
    { id: 3, src: avatarImages[2], status: 'away' },
  ]);

  const handleRemove = (id) => {
    setAvatars(avatars.filter(avatar => avatar.id !== id));
  };

  const handleUpload = (file, id) => {
    // Simulate URL creation for the uploaded file
    const url = URL.createObjectURL(file);
    setAvatars(avatars.map(avatar =>
      avatar.id === id ? { ...avatar, src: url } : avatar
    ));
  };

  return (
    <div className="space-y-4">
      <AvatarGroup>
        {avatars.map(avatar => (
          <Avatar
            key={avatar.id}
            src={avatar.src}
            status={avatar.status}
            interactive
            editable
            removable
            uploadable
            onRemove={() => handleRemove(avatar.id)}
            onUpload={(file) => handleUpload(file, avatar.id)}
          />
        ))}
      </AvatarGroup>
      <button
        onClick={() => setAvatars([...avatars, {
          id: Date.now(),
          src: avatarImages[avatars.length],
          status: 'offline'
        }])}
        className="px-4 py-2 bg-primary-500 text-white rounded-lg"
      >
        Add Avatar
      </button>
    </div>
  );
}; 