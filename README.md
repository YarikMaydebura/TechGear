# TechGear

A modern e-commerce web application for tech products built with React and TypeScript.

## Overview

TechGear is a full-featured online store focused on consumer electronics - laptops, smartphones, tablets, headphones, and accessories. The project demonstrates a complete e-commerce frontend implementation with product browsing, filtering, cart management, and comparison features.

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS v4
- shadcn/ui components
- Zustand (state management)
- Framer Motion (animations)
- React Router v7

## Features

- Product catalog with category filtering
- Advanced search with keyboard shortcuts
- Shopping cart with persistent state
- Wishlist functionality
- Product comparison (up to 4 items)
- Dark/light theme toggle
- Responsive design for all devices

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/YarikMaydebura/TechGear.git
cd TechGear

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
pnpm build
```

## Project Structure

```
src/
├── components/
│   ├── home/        # Homepage sections
│   ├── layout/      # Header, Footer, Navigation
│   ├── products/    # Product cards and grids
│   └── ui/          # shadcn/ui components
├── data/            # Product and category data
├── pages/           # Route pages
├── stores/          # Zustand state stores
├── types/           # TypeScript interfaces
└── lib/             # Utility functions
```

## Pages

- Home - Featured products, deals, categories
- Shop - Product listing with filters
- Product Detail - Full product information
- Cart - Shopping cart management
- Wishlist - Saved items
- Compare - Side-by-side product comparison
- Deals - Discounted products
- About, Contact, Support - Informational pages

## License

MIT
