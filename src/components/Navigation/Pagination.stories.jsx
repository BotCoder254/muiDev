/**
 * @component Pagination
 * @description A professional pagination component with multiple variants and customization options.
 * 
 * @example
 * ```jsx
 * // Basic usage
 * import { Pagination } from './components/Navigation';
 * 
 * function MyComponent() {
 *   const [currentPage, setCurrentPage] = useState(1);
 *   
 *   return (
 *     <Pagination
 *       totalItems={100}
 *       itemsPerPage={10}
 *       currentPage={currentPage}
 *       onPageChange={setCurrentPage}
 *     />
 *   );
 * }
 * 
 * // With custom styling and features
 * <Pagination
 *   totalItems={500}
 *   itemsPerPage={20}
 *   currentPage={5}
 *   variant="pills"
 *   color="primary"
 *   size="large"
 *   showFirstLast
 *   showPageSize
 *   pageSizeOptions={[10, 20, 50, 100]}
 *   onPageChange={handlePageChange}
 *   onPageSizeChange={handlePageSizeChange}
 * />
 * ```
 */

import React from 'react';
import Pagination from './Pagination';

export default {
  title: 'Navigation/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile pagination component with multiple variants and features.',
      },
    },
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'white'],
      description: 'Color theme of the pagination',
    },
    variant: {
      control: 'select',
      options: ['default', 'pills', 'minimal'],
      description: 'Visual style variant',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the pagination buttons',
    },
  },
};

// Default pagination
export const Default = {
  args: {
    totalItems: 100,
    itemsPerPage: 10,
    currentPage: 1,
    color: 'primary',
  },
};

// Pills variant
export const Pills = {
  args: {
    totalItems: 100,
    itemsPerPage: 10,
    currentPage: 1,
    variant: 'pills',
    color: 'primary',
  },
};

// Minimal variant
export const Minimal = {
  args: {
    totalItems: 100,
    itemsPerPage: 10,
    currentPage: 1,
    variant: 'minimal',
    color: 'primary',
  },
};

// Size variations
export const Sizes = () => (
  <div className="space-y-8">
    <Pagination
      totalItems={100}
      itemsPerPage={10}
      currentPage={1}
      size="small"
      variant="pills"
      color="primary"
    />
    <Pagination
      totalItems={100}
      itemsPerPage={10}
      currentPage={1}
      size="medium"
      variant="pills"
      color="primary"
    />
    <Pagination
      totalItems={100}
      itemsPerPage={10}
      currentPage={1}
      size="large"
      variant="pills"
      color="primary"
    />
  </div>
);

// Color variations
export const Colors = () => (
  <div className="space-y-8">
    <Pagination
      totalItems={100}
      itemsPerPage={10}
      currentPage={1}
      color="primary"
      variant="pills"
    />
    <Pagination
      totalItems={100}
      itemsPerPage={10}
      currentPage={1}
      color="secondary"
      variant="pills"
    />
    <Pagination
      totalItems={100}
      itemsPerPage={10}
      currentPage={1}
      color="white"
      variant="pills"
    />
  </div>
);

// With many pages
export const ManyPages = {
  args: {
    totalItems: 250,
    itemsPerPage: 10,
    currentPage: 5,
    variant: 'pills',
    color: 'primary',
    siblingCount: 2,
  },
};

// With page size selector
export const WithPageSize = {
  args: {
    totalItems: 100,
    itemsPerPage: 10,
    currentPage: 1,
    variant: 'pills',
    color: 'primary',
    showPageSize: true,
    pageSizeOptions: [10, 20, 50, 100],
  },
};

// With first/last buttons
export const WithFirstLast = {
  args: {
    totalItems: 100,
    itemsPerPage: 10,
    currentPage: 1,
    variant: 'pills',
    color: 'primary',
    showFirstLast: true,
  },
};

// With items per page info
export const WithItemsInfo = {
  args: {
    totalItems: 100,
    itemsPerPage: 10,
    currentPage: 1,
    variant: 'pills',
    color: 'primary',
    showItemsPerPage: true,
  },
};

// Controlled example
export const Controlled = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);

  return (
    <div className="space-y-4">
      <div className="text-center text-gray-600">
        Page {currentPage} | Items per page: {pageSize}
      </div>
      <Pagination
        totalItems={100}
        itemsPerPage={pageSize}
        currentPage={currentPage}
        variant="pills"
        color="primary"
        showPageSize
        showItemsPerPage
        showFirstLast
        onPageChange={setCurrentPage}
        onPageSizeChange={setPageSize}
      />
    </div>
  );
};

// Responsive example
export const Responsive = {
  args: {
    totalItems: 200,
    itemsPerPage: 10,
    currentPage: 5,
    variant: 'pills',
    color: 'primary',
    showPageSize: true,
    showItemsPerPage: true,
    showFirstLast: true,
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-4xl mx-auto px-4">
        <Story />
      </div>
    ),
  ],
}; 