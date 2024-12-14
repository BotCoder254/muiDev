<div align="center">
  <img src="./assets/logo.svg" alt="MUI Library Logo" width="200" height="200"/>

  # MUI Library v0.1.0
  
  <p align="center">
    <strong>A Professional React UI Component Library</strong><br>
    Built with 💜 in Kenya
  </p>

  <p align="center">
    <a href="https://www.npmjs.com/package/muilibrary">
      <img src="https://img.shields.io/npm/v/muilibrary?color=%237C3AED" alt="npm version" />
    </a>
    <a href="https://github.com/telvinteum/muilibrary/blob/main/LICENSE">
      <img src="https://img.shields.io/npm/l/muilibrary?color=%237C3AED" alt="license" />
    </a>
    <a href="https://github.com/telvinteum/muilibrary/stargazers">
      <img src="https://img.shields.io/github/stars/telvinteum/muilibrary?color=%237C3AED" alt="GitHub Stars" />
    </a>
    <a href="https://github.com/telvinteum/muilibrary/network/members">
      <img src="https://img.shields.io/github/forks/telvinteum/muilibrary?color=%237C3AED" alt="GitHub Forks" />
    </a>
    <br/>
    <a href="https://twitter.com/intent/tweet?text=Check%20out%20MUI%20Library%20-%20A%20beautiful%20React%20UI%20component%20library%20built%20with%20Tailwind%20CSS%20%26%20Framer%20Motion%21%20%F0%9F%9A%80&url=https%3A%2F%2Fgithub.com%2Ftelvinteum%2Fmuilibrary">
      <img src="https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2Ftelvinteum%2Fmuilibrary" alt="Tweet" />
    </a>
  </p>

  <p align="center">
    <a href="#-features">Features</a> •
    <a href="#-installation">Installation</a> •
    <a href="#-components">Components</a> •
    <a href="#-documentation">Documentation</a> •
    <a href="#-contributing">Contributing</a>
  </p>

  <br/>

  <p align="center">
    <img src="./assets/preview.gif" alt="MUI Library Preview" width="600px" />
  </p>
</div>

## ✨ Features

<div align="center">
  <table>
    <tr>
      <td align="center">
        <img src="./assets/icons/modern.svg" width="40" alt="Modern Design"/><br/>
        <b>Modern Design</b>
      </td>
      <td align="center">
        <img src="./assets/icons/responsive.svg" width="40" alt="Responsive"/><br/>
        <b>Responsive</b>
      </td>
      <td align="center">
        <img src="./assets/icons/animation.svg" width="40" alt="Animated"/><br/>
        <b>Animated</b>
      </td>
      <td align="center">
        <img src="./assets/icons/customizable.svg" width="40" alt="Customizable"/><br/>
        <b>Customizable</b>
      </td>
    </tr>
  </table>
</div>

- 🎨 **Modern Design System**
  - Beautiful, consistent components
  - Carefully crafted with attention to detail
  - Professional color schemes and typography

- 🌓 **Dark Mode Support**
  - Seamless light/dark mode switching
  - Automatic system preference detection
  - Customizable color schemes

- 📱 **Fully Responsive**
  - Mobile-first design approach
  - Fluid layouts and breakpoints
  - Touch-friendly interactions

- ⚡ **High Performance**
  - Optimized bundle size
  - Efficient rendering
  - Lazy loading support

## 🚀 Quick Start

### Installation

```bash
npm install muilibrary
```

### Basic Usage

```jsx
import { Button, Card } from 'muilibrary';
import 'muilibrary/dist/styles.css';

function App() {
  return (
    <Card className="p-6 max-w-sm mx-auto bg-gradient-to-br from-purple-500 to-indigo-600">
      <h2 className="text-2xl font-bold text-white mb-4">
        Welcome to MUI Library
      </h2>
      <Button 
        variant="light"
        size="large"
        withRipple
        className="w-full"
      >
        Get Started
      </Button>
    </Card>
  );
}
```

## 📦 Components

### Navigation Components

<div align="center">
  <img src="./assets/components/navigation.png" alt="Navigation Components" width="100%" />
</div>

```jsx
import { Navbar, Sidebar, Breadcrumb, Tabs } from 'muilibrary';

// Modern Navbar with Animations
<Navbar
  brand={{
    logo: "/logo.svg",
    name: "Your Brand"
  }}
  items={[
    { label: 'Dashboard', href: '/', icon: HomeIcon },
    { label: 'Products', href: '/products', icon: CubeIcon },
    { label: 'Settings', href: '/settings', icon: CogIcon }
  ]}
  theme="gradient"
  animated
/>

// Animated Sidebar with Nested Items
<Sidebar
  items={sidebarItems}
  collapsed={isCollapsed}
  onCollapse={toggleCollapse}
  theme="dark"
  withIcons
  animated
/>
```

### Data Display Components

<div align="center">
  <img src="./assets/components/data-display.png" alt="Data Display Components" width="100%" />
</div>

```jsx
// Modern Data Table
<Table
  data={users}
  columns={[
    { 
      header: 'Name',
      accessor: 'name',
      sortable: true,
      cell: (value) => (
        <div className="flex items-center gap-2">
          <Avatar src={value.avatar} />
          <span>{value.fullName}</span>
        </div>
      )
    },
    // ... more columns
  ]}
  pagination
  search
  filters
/>

// Interactive Cards
<Card
  hoverable
  withRipple
  className="bg-gradient-to-r from-purple-500 to-pink-500"
>
  <CardHeader
    title="Premium Plan"
    subtitle="Most Popular"
    icon={<CrownIcon className="text-yellow-400" />}
  />
  <CardBody>
    <PriceTag amount={99} currency="USD" period="month" />
    <FeatureList features={premiumFeatures} />
  </CardBody>
  <CardFooter>
    <Button variant="light" fullWidth>
      Choose Plan
    </Button>
  </CardFooter>
</Card>
```

### Form Components

<div align="center">
  <img src="./assets/components/forms.png" alt="Form Components" width="100%" />
</div>

```jsx
// Modern Form Elements
<Form onSubmit={handleSubmit}>
  <Input
    label="Email"
    type="email"
    placeholder="john@example.com"
    leftIcon={<EmailIcon />}
    validation={{
      required: 'Email is required',
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: 'Invalid email address'
      }
    }}
    animated
  />
  
  <Select
    label="Country"
    options={countries}
    searchable
    multiSelect
    withFlags
    animated
  />
  
  <Button
    type="submit"
    variant="gradient"
    loading={isSubmitting}
    loadingText="Saving..."
    withRipple
  >
    Submit
  </Button>
</Form>
```

## 🎨 Customization

### Theme Customization

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
      },
      animation: {
        'ripple': 'ripple 0.6s linear',
        'slide-up': 'slideUp 0.2s ease-out',
        'fade-in': 'fadeIn 0.2s ease-out',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
```

## 📖 Documentation

Visit our [documentation site](https://muilibrary.dev) for:

- Comprehensive API reference
- Interactive examples
- Theme customization guide
- Best practices
- Migration guides
- Contribution guidelines

## 🤝 Contributing

We welcome contributions! See our [Contributing Guide](CONTRIBUTING.md) for details.

## 👥 Team

<div align="center">
  <table>
    <tr>
      <td align="center">
        <a href="https://github.com/telvinteum">
          <img src="https://github.com/telvinteum.png" width="100px;" alt="Telvin Teum"/><br />
          <sub><b>Telvin Teum</b></sub>
        </a>
        <br />
        <small>Creator & Maintainer</small>
      </td>
      <td align="center">
        <a href="https://github.com/samueldevlp">
          <img src="https://github.com/samueldevlp.png" width="100px;" alt="Samuel Dev"/><br />
          <sub><b>Samuel Dev</b></sub>
        </a>
        <br />
        <small>Core Contributor</small>
      </td>
    </tr>
  </table>
</div>

<div align="center">
  <br />
  <p>
    <img src="./assets/icons/kenya-flag.svg" alt="Kenyan Flag" width="20"/>
    <strong> Proudly Made in Kenya</strong>
  </p>
  <p>
    <sub>Copyright 2024 MUI Library. Released under the MIT License.</sub>
  </p>
</div>