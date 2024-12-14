import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Navigation
export { default as Navbar } from './components/Navigation/Navbar';
export { default as Sidebar } from './components/Navigation/Sidebar';
export { default as Breadcrumb } from './components/Navigation/Breadcrumb';
export { default as Stepper } from './components/Navigation/Stepper';
export { default as DropdownMenu } from './components/Navigation/DropdownMenu';

// Data Display
export { default as Table } from './components/DataDisplay/Table';
export { default as Tag } from './components/DataDisplay/Tag';
export { default as Accordion } from './components/DataDisplay/Accordion';

// Layout
export { default as Container } from './components/Layout/Container';

// Include additional component exports as they are added

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);