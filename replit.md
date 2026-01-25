# Personal Portfolio Website

A professional portfolio website for a software developer showcasing 9+ years of experience across 3 companies.

## Overview

This is a lightweight, modern personal website built with React, Tailwind CSS, and Framer Motion for animations. The site features:

- Responsive design with mobile-first approach
- Dark/Light mode toggle with localStorage persistence
- Smooth scroll navigation
- Animated sections using Framer Motion
- Glass morphism card effects
- Professional typography with Inter font

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React, React Icons
- **Routing**: Wouter
- **State Management**: React Query
- **UI Components**: Custom + Radix UI primitives

## Project Structure

```
client/
  src/
    pages/
      home.tsx          # Main portfolio page with all sections
      not-found.tsx     # 404 page
    components/
      ui/               # Shadcn UI components
    index.css           # Global styles with CSS variables
    App.tsx             # Main app with routing
```

## Sections

1. **Hero** - Introduction with profile photo placeholder, stats, and CTAs
2. **About** - Bio and core values (Clean Code, Performance, Collaboration, Innovation)
3. **Experience** - 3 companies from 2016-present with expandable details
4. **Skills** - Technology chips organized by category (Languages, Frontend, Backend, etc.)
5. **Projects** - Featured portfolio projects
6. **Testimonials** - Colleague recommendations
7. **Contact** - Contact form and social links

## Customization

To personalize the website:

1. Replace photo placeholder in Hero section
2. Update personal info (name, email, links)
3. Edit experience data in `home.tsx`
4. Update skills and projects arrays
5. Customize colors in `index.css` (CSS variables)

## Running Locally

```bash
npm run dev
```

Server runs on port 5000.

## Color Scheme

The site uses a professional blue/purple gradient theme:
- Primary: Blue (221, 83%, 53%)
- Accent: Purple (262, 83%, 58%)
- Supports both light and dark modes
