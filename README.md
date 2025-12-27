# Space Time Navigators Guild - Astro Website

![App Preview](https://imgix.cosmicjs.com/99ccbb60-e2fd-11f0-9f69-cfda8ef2a395-photo-1506318137071-a8e063b4bec0-1766823922835.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A high-performance Astro website for the Space Time Navigators Guild, showcasing guild memberships, blog posts, and core values. Built with Astro 5.0 for optimal performance and SEO.

## Features

- ⚡️ Lightning-fast static site generation with Astro
- 🎨 Beautiful, space-themed design with Tailwind CSS
- 📱 Fully responsive mobile-first layout
- 🚀 Guild membership tiers and benefits
- 📝 Blog with markdown content support
- 🌟 Core values and mission statements
- 🖼️ Optimized images with imgix integration
- 🔍 SEO optimized with proper meta tags
- ♿️ Accessible design with semantic HTML
- 🎯 Type-safe with TypeScript

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=694f96d56d538c4d2c71036f&clone_repository=694f9a396d538c4d2c7103e0)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Emperor of Planet X"

### Code Generation Prompt

> "Set up an Astro website powered by my existing content"

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- [Astro 5.0](https://astro.build) - Fast, modern static site generator
- [TypeScript](https://www.typescriptlang.org/) - Type-safe development
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [Cosmic](https://www.cosmicjs.com) - Headless CMS for content management
- [@cosmicjs/sdk](https://www.cosmicjs.com/docs) - Official Cosmic SDK

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with bucket access

### Installation

1. Clone this repository
2. Install dependencies:

```bash
bun install
```

3. Create a `.env` file in the root directory:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
```

4. Start the development server:

```bash
bun run dev
```

5. Open [http://localhost:4321](http://localhost:4321) in your browser

## Cosmic SDK Examples

### Fetching Guild Memberships

```typescript
import { cosmic } from './lib/cosmic'

const { objects: memberships } = await cosmic.objects
  .find({ type: 'guild-memberships' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Blog Posts

```typescript
const { objects: posts } = await cosmic.objects
  .find({ type: 'blog-posts' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Sort by publish date
const sortedPosts = posts.sort((a, b) => {
  const dateA = new Date(a.metadata?.publish_date || '').getTime()
  const dateB = new Date(b.metadata?.publish_date || '').getTime()
  return dateB - dateA
})
```

### Fetching Guild Values

```typescript
const { objects: values } = await cosmic.objects
  .find({ type: 'guild-values' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration

This application uses Cosmic as a headless CMS. The content model includes:

- **Guild Memberships**: Membership tiers with pricing and benefits
- **Blog Posts**: News and updates with markdown content
- **Guild Values**: Core mission and values statements

All content is fetched server-side during build time for optimal performance, with proper TypeScript types for type safety.

## Deployment Options

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
4. Deploy

### Netlify

1. Push your code to GitHub
2. Import your repository in Netlify
3. Add environment variables in site settings
4. Deploy

### Build for Production

```bash
bun run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting provider.

## Project Structure

```
/
├── public/           # Static assets
├── src/
│   ├── components/   # Reusable Astro components
│   ├── layouts/      # Layout templates
│   ├── pages/        # Route pages
│   ├── lib/          # Utilities and Cosmic config
│   └── types.ts      # TypeScript type definitions
├── astro.config.mjs  # Astro configuration
├── tailwind.config.mjs # Tailwind configuration
└── tsconfig.json     # TypeScript configuration
```

## Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run preview` - Preview production build locally
- `bun run type-check` - Run TypeScript type checking

<!-- README_END -->