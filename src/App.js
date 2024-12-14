import React from 'react';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">UI Components</h1>
      <div className="space-x-4">
        <Button variant="primary">Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="outline">Outline Button</Button>
      </div>
    </div>
  );
}

export default App; 