import React from 'react';
import Table from './Table';

export default {
  title: 'Data Display/Table',
  component: Table,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A professional table component with sorting, filtering, and pagination capabilities.',
      },
    },
  },
  argTypes: {
    striped: { control: 'boolean' },
    hoverable: { control: 'boolean' },
    bordered: { control: 'boolean' },
    compact: { control: 'boolean' },
    sortable: { control: 'boolean' },
    filterable: { control: 'boolean' },
    pagination: { control: 'boolean' },
    pageSize: { control: 'number' },
  },
};

const sampleData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Inactive' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor', status: 'Active' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'User', status: 'Active' },
  { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'Admin', status: 'Inactive' },
];

const columns = [
  { key: 'id', title: 'ID' },
  { key: 'name', title: 'Name' },
  { key: 'email', title: 'Email' },
  { key: 'role', title: 'Role' },
  {
    key: 'status',
    title: 'Status',
    render: (value) => (
      <span
        className={`px-2 py-1 rounded-full text-xs font-medium
          ${value === 'Active'
            ? 'bg-green-100 text-green-800'
            : 'bg-red-100 text-red-800'
          }`}
      >
        {value}
      </span>
    ),
  },
];

// Default table
export const Default = {
  args: {
    data: sampleData,
    columns: columns,
    className: 'w-full',
  },
};

// Striped rows
export const Striped = {
  args: {
    ...Default.args,
    striped: true,
  },
};

// Bordered cells
export const Bordered = {
  args: {
    ...Default.args,
    bordered: true,
  },
};

// Compact table
export const Compact = {
  args: {
    ...Default.args,
    compact: true,
  },
};

// With sorting
export const Sortable = {
  args: {
    ...Default.args,
    sortable: true,
  },
};

// With filtering
export const Filterable = {
  args: {
    ...Default.args,
    filterable: true,
  },
};

// With pagination
export const WithPagination = {
  args: {
    ...Default.args,
    pagination: true,
    pageSize: 3,
  },
};

// Large dataset example
export const LargeDataset = {
  args: {
    data: Array.from({ length: 100 }, (_, index) => ({
      id: index + 1,
      name: `User ${index + 1}`,
      email: `user${index + 1}@example.com`,
      role: index % 3 === 0 ? 'Admin' : index % 2 === 0 ? 'Editor' : 'User',
      status: index % 4 === 0 ? 'Inactive' : 'Active',
    })),
    columns: columns,
    pagination: true,
    pageSize: 10,
    filterable: true,
    sortable: true,
  },
};

// Interactive example
export const Interactive = () => {
  const [selectedRow, setSelectedRow] = React.useState(null);

  return (
    <div className="space-y-4">
      <Table
        data={sampleData}
        columns={columns}
        onRowClick={(row) => setSelectedRow(row)}
        hoverable
        className="w-full"
      />
      {selectedRow && (
        <div className="p-4 bg-gray-100 rounded-lg">
          <h3 className="text-lg font-medium mb-2">Selected Row:</h3>
          <pre className="text-sm">{JSON.stringify(selectedRow, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}; 