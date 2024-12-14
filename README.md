<div align="center">
  <img src="./assets/logo.svg" alt="MUI Library Logo" width="200" height="200"/>

  # MUI Library v0.1.0
  
  <p align="center">
    <strong>A Modern React UI Component Library</strong><br>
    Built with Tailwind CSS & Framer Motion
  </p>

  <p align="center">
    <img src="https://img.shields.io/npm/v/muilibrary" alt="npm version" />
    <img src="https://img.shields.io/npm/l/muilibrary" alt="license" />
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome" />
    <img src="https://img.shields.io/badge/Made%20in-Kenya-green?style=flat&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyIDJDNi40NzcgMiAyIDYuNDc3IDIgMTJzNC40NzcgMTAgMTAgMTAgMTAtNC40NzcgMTAtMTBTMTcuNTIzIDIgMTIgMnoiLz48L3N2Zz4=" />
  </p>
</div>

## ✨ Features

- 🎨 **Modern Design System** - Beautiful, consistent components
- 🌓 **Dark Mode Support** - Seamless light/dark mode switching
- 📱 **Fully Responsive** - Mobile-first design approach
- ⚡ **High Performance** - Optimized for speed and efficiency
- 🎭 **Smooth Animations** - Powered by Framer Motion
- 🎯 **Easy to Use** - Simple API, extensive documentation
- 🛠️ **Customizable** - Tailwind CSS for easy styling
- ♿ **Accessible** - WCAG 2.1 compliant components

## 🚀 Quick Start

### Installation

```bash
npm install muilibrary
# or
yarn add muilibrary
# or
pnpm add muilibrary
```

### Basic Usage

```jsx
import { Button, Card } from 'muilibrary';

function App() {
  return (
    <Card className="p-6 max-w-sm mx-auto">
      <h2 className="text-2xl font-bold mb-4">
        Welcome to MUI Library
      </h2>
      <Button 
        variant="primary"
        size="large"
        withAnimation
      >
        Get Started
      </Button>
    </Card>
  );
}
```

## 📦 Components

### Navigation
```jsx
import { Navbar, Sidebar, Breadcrumb } from 'muilibrary';

// Modern Navbar
<Navbar
  brand="Your Brand"
  items={[
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' }
  ]}
/>

// Animated Sidebar
<Sidebar
  items={[
    { 
      icon: HomeIcon,
      label: 'Dashboard',
      href: '/dashboard'
    }
  ]}
  animated
/>
```

### Data Display
```jsx
import { Table, Card, Tag } from 'muilibrary';

// Feature-rich Table
<Table
  data={data}
  columns={columns}
  sortable
  filterable
  pagination
/>

// Modern Card
<Card
  hoverable
  withShadow
  className="p-4"
>
  Your content here
</Card>
```

### Form Elements
```jsx
import { Button, Input, Select } from 'muilibrary';

// Animated Button
<Button
  variant="primary"
  size="large"
  withRipple
  loading={isLoading}
>
  Submit
</Button>

// Modern Input
<Input
  label="Username"
  placeholder="Enter username"
  withIcon={UserIcon}
  validation={validation}
/>
```

## 🎨 Customization

### Tailwind Configuration

```js
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/muilibrary/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        },
      },
    },
  },
}
```

### Component Customization

```jsx
// Custom styling using Tailwind classes
<Button
  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
>
  Custom Button
</Button>
```

## 📖 Documentation

For detailed documentation and examples, visit our [documentation site](https://muilibrary.dev).

## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request.

## 👥 Team

- **Created by:** TELVIN TEUM
- **Contributions by:** SAMUELDEVLP

<div align="center">
  <br />
  <p>
    <strong>Proudly Made in Kenya 🇰🇪</strong>
  </p>
  <p>
    <sub>Copyright © 2024 MUI Library. All rights reserved.</sub>
  </p>
</div>