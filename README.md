<div align="center">
  <img src="./assets/logo.svg" alt="MUI Library Logo" width="200" height="200"/>

  # MUI Library v0.1.0
  
  <p align="center">
    <strong>A Professional React UI Component Library</strong><br>
    Built with 💜 in Africa
  </p>

  <p align="center">
    <a href="https://www.npmjs.com/package/muilibrary">
      <img src="https://img.shields.io/npm/v/muilibrary?color=%237C3AED" alt="npm version" />
    </a>
    <!-- <a href="https://github.com/telvinteum/muilibrary/blob/main/LICENSE">
      <img src="https://img.shields.io/npm/l/muilibrary?color=%237C3AED" alt="license" />
    </a> -->
    <!-- <a href="https://github.com/BotCoder254/mui.git/stargazers">
      <img src="https://img.shields.io/github/stars/telvinteum/muilibrary?color=%237C3AED" alt="GitHub Stars" />
    </a> -->
    <!-- <a href="https://github.com/BotCoder254/mui/fork/network/members">
      <img src="https://img.shields.io/github/forks/telvinteum/muilibrary?color=%237C3AED" alt="GitHub Forks" />
    </a> -->
    <br/>
    <!-- <a href="https://x.com/teumtelvin?t=S6izAbSJHRiOp_FdiuoCoQ&s=09">
      <img src="https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2Ftelvinteum%2Fmuilibrary" alt="Tweet" />
    </a> -->
  </p>

  <p align="center">
    <a href="#-features">Features</a> •
    <a href="#-installation">Installation</a> •
    <a href="#-components">Components</a> •
    <a href="#-documentation">Documentation</a> •
    <a href="#-contributing">Contributing</a>
  </p>

  <br/>

  <!-- <p align="center">
    <img src="./assets/preview.gif" alt="MUI Library Preview" width="600px" />
  </p> -->
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

### NPM Installation

```bash
npm install muidev
```

### CDN Usage

You can use MuiDev directly in your HTML files via CDN without installing anything:

```html
<!-- Add Tailwind CSS (required for styling) -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Add MuiDev via CDN -->
<script src="https://unpkg.com/muidev@0.1.1/dist/index.umd.js"></script>
<link href="https://unpkg.com/muidev@0.1.1/dist/index.css" rel="stylesheet">
```

You can also use a specific version or always get the latest:
```html
<!-- Latest version -->
<script src="https://unpkg.com/muidev/dist/index.umd.js"></script>
<link href="https://unpkg.com/muidev/dist/index.css" rel="stylesheet">

<!-- Specific version -->
<script src="https://unpkg.com/muidev@0.1.1/dist/index.umd.js"></script>
<link href="https://unpkg.com/muidev@0.1.1/dist/index.css" rel="stylesheet">
```

#### Basic Example

Here's a simple example using a button and card component:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>MuiDev Basic Example</title>
    
    <!-- Add Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- MuiDev CDN links -->
    <script src="https://unpkg.com/muidev@0.1.1/dist/index.umd.js"></script>
    <link href="https://unpkg.com/muidev@0.1.1/dist/index.css" rel="stylesheet">
</head>
<body>
    <!-- Basic Button -->
    <button class="muidev-button" data-variant="primary" data-ripple="true">
        Click Me
    </button>

    <!-- Basic Card -->
    <div class="muidev-card p-4 m-4">
        <h3>Simple Card</h3>
        <p>This is a basic card component.</p>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // Initialize button
            const button = document.querySelector('.muidev-button');
            button.classList.add('muidev-btn-primary', 'px-4', 'py-2', 'rounded', 'muidev-ripple');

            // Initialize card
            const card = document.querySelector('.muidev-card');
            card.classList.add('rounded-lg', 'shadow-lg', 'bg-white');
        });
    </script>
</body>
</html>
```

#### Advanced Example

For a more comprehensive example including navigation, cards, and responsive layout, check out our [examples directory](examples/cdn/index.html).

Key features demonstrated in the advanced example:
- Responsive navigation bar
- Grid layout system
- Cards with gradients
- Buttons with ripple effects
- Dark/light variants
- Hover animations

### Component Classes

When using MuiDev via CDN, use these CSS classes:

```html
<!-- Buttons -->
<button class="muidev-button" data-variant="primary|secondary|light|dark" data-ripple="true|false">
    Button Text
</button>

<!-- Cards -->
<div class="muidev-card">
    Card Content
</div>

<!-- Container -->
<div class="container mx-auto">
    Centered Content
</div>
```

Available data-variant options for buttons:
- `primary` - Primary color button
- `secondary` - Secondary color button
- `light` - Light variant
- `dark` - Dark variant

### React Usage

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

<!-- <div align="center">
  <img src="./assets/components/navigation.png" alt="Navigation Components" width="100%" />
</div> -->

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

<!-- <div align="center">
  <img src="./assets/components/data-display.png" alt="Data Display Components" width="100%" />
</div> -->

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

<!-- <div align="center">
  <img src="./assets/components/forms.png" alt="Form Components" width="100%" />
</div> -->

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
