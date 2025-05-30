# React Router v7 Portfolio Template

A modern, production-ready template for building portfolio websites using React Router v7 and Tailwind CSS.

## Features

- 🚀 Server-side rendering with React Router v7
- 🌓 Light/Dark mode toggle
- 📊 Responsive layouts for all devices
- 🔄 Data loading and mutations with React Router loaders
- 🔒 TypeScript for type safety
- 📱 Mobile-friendly navigation with drawer
- 🖌️ Lucide react icons for beautiful iconography
- 📝 MDX support for blog posts
- 🌐 SEO-friendly with dynamic meta tags

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:3000`.

## Project Structure

```
├── src/
│   ├── components/     # Reusable UI components
│   ├── content/        # MDX blog posts
│   ├── lib/            # Utility functions
│   ├── routes/         # React Router route components
│   │   ├── root.tsx    # Root layout
│   │   ├── home.tsx    # Homepage
│   │   ├── posts.tsx    # Blog listing
│   │   └── posts.$slug.tsx  # Individual blog posts
│   └── styles/         # CSS modules forstyling
├── public/             # Static assets
└── package.json        # Project dependencies
```

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### SST Deployment

For serverless deployment using SST:

```bash
npx sst deploy --stage prod   # Deploy to production
npx sst remove --stage prod   # Remove from production
```

## Customization

### Adding Blog Posts

Add new blog posts as MDX files in the `src/content` directory with frontmatter:

```mdx
---
title: 'My New Blog Post'
date: '2025-05-15'
author: 'Your Name'
summary: 'A brief summary of the post'
tags: ['react', 'web development']
---

# Content goes here

Your markdown content...
```

---
