import React from 'react';
import Accordion from './Accordion';
import { FiBox, FiSettings, FiUser, FiHelpCircle } from 'react-icons/fi';

export default {
  title: 'Data Display/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A versatile accordion component with various styles and animations.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'ghost'],
    },
    expandIcon: {
      control: 'select',
      options: ['chevron', 'plusMinus'],
    },
    allowMultiple: { control: 'boolean' },
  },
};

const sampleItems = [
  {
    title: 'Section 1',
    children: 'Content for section 1. This is a simple text content.',
    defaultOpen: true,
  },
  {
    title: 'Section 2',
    children: 'Content for section 2. This section contains more detailed information.',
  },
  {
    title: 'Section 3',
    children: 'Content for section 3. You can put any content here.',
  },
];

// Default accordion
export const Default = {
  args: {
    items: sampleItems,
  },
};

// All variants
export const Variants = () => (
  <div className="space-y-4 w-full max-w-md">
    <Accordion
      items={[
        { title: 'Default Variant', children: 'Content for default variant', variant: 'default' },
        { title: 'Primary Variant', children: 'Content for primary variant', variant: 'primary' },
        { title: 'Ghost Variant', children: 'Content for ghost variant', variant: 'ghost' },
      ]}
    />
  </div>
);

// With icons
export const WithIcons = () => (
  <div className="space-y-4 w-full max-w-md">
    <Accordion
      items={[
        { title: 'Products', children: 'Manage your products', icon: <FiBox /> },
        { title: 'Settings', children: 'Configure your preferences', icon: <FiSettings /> },
        { title: 'Profile', children: 'Update your profile', icon: <FiUser /> },
        { title: 'Help', children: 'Get help and support', icon: <FiHelpCircle /> },
      ]}
    />
  </div>
);

// Expand icons
export const ExpandIcons = () => (
  <div className="space-y-8 w-full max-w-md">
    <Accordion
      items={sampleItems}
      expandIcon="chevron"
    />
    <Accordion
      items={sampleItems}
      expandIcon="plusMinus"
    />
  </div>
);

// Allow multiple
export const AllowMultiple = () => (
  <div className="space-y-4 w-full max-w-md">
    <h3 className="text-lg font-medium mb-2">Multiple sections can be open</h3>
    <Accordion
      items={sampleItems}
      allowMultiple
    />
  </div>
);

// With rich content
export const RichContent = () => (
  <div className="w-full max-w-md">
    <Accordion
      items={[
        {
          title: 'Image Gallery',
          children: (
            <div className="grid grid-cols-3 gap-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <img
                  key={i}
                  src={`https://picsum.photos/100/100?random=${i}`}
                  alt={`Gallery ${i + 1}`}
                  className="rounded"
                />
              ))}
            </div>
          ),
        },
        {
          title: 'Statistics',
          children: (
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Views</span>
                <span className="font-medium">1,234</span>
              </div>
              <div className="flex justify-between">
                <span>Likes</span>
                <span className="font-medium">567</span>
              </div>
              <div className="flex justify-between">
                <span>Comments</span>
                <span className="font-medium">89</span>
              </div>
            </div>
          ),
        },
        {
          title: 'Actions',
          children: (
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-primary-500 text-white rounded-lg">
                Edit
              </button>
              <button className="px-4 py-2 bg-gray-500 text-white rounded-lg">
                Delete
              </button>
            </div>
          ),
        },
      ]}
    />
  </div>
);

// Interactive example
export const Interactive = () => {
  const [sections, setSections] = React.useState([
    { id: 1, title: 'Section 1', content: 'Content 1' },
    { id: 2, title: 'Section 2', content: 'Content 2' },
    { id: 3, title: 'Section 3', content: 'Content 3' },
  ]);

  const handleEdit = (id) => {
    const newTitle = prompt('Enter new title:');
    if (newTitle) {
      setSections(sections.map(section =>
        section.id === id ? { ...section, title: newTitle } : section
      ));
    }
  };

  const handleRemove = (id) => {
    setSections(sections.filter(section => section.id !== id));
  };

  const handleAdd = () => {
    const id = Math.max(0, ...sections.map(s => s.id)) + 1;
    setSections([...sections, {
      id,
      title: `Section ${id}`,
      content: `Content ${id}`,
    }]);
  };

  return (
    <div className="space-y-4 w-full max-w-md">
      <Accordion
        items={sections.map(section => ({
          title: section.title,
          children: section.content,
          editable: true,
          removable: true,
          onEdit: () => handleEdit(section.id),
          onRemove: () => handleRemove(section.id),
        }))}
        allowMultiple
      />
      <button
        onClick={handleAdd}
        className="px-4 py-2 bg-primary-500 text-white rounded-lg"
      >
        Add Section
      </button>
    </div>
  );
}; 