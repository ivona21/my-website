# Ivona Malekovic Selimovic - Portfolio Website

A professional portfolio website for Ivona Malekovic Selimovic, a Software Developer with 7+ years of experience specializing in React frontend development.

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
- **SEO**: react-helmet-async

## Project Structure

```
client/
  src/
    pages/
      home.tsx          # Main portfolio page with all sections
      not-found.tsx     # 404 page
    components/
      ui/               # Shadcn UI components
    lib/
      theme-provider.tsx # Dark/Light mode provider
    index.css           # Global styles with CSS variables
    App.tsx             # Main app with routing and SEO
```

## Sections

1. **Hero** - Introduction with profile photo placeholder, stats, and CTAs
2. **About** - Bio and core values (Clean Code, AI-Powered, Accessibility, Continuous Learning)
3. **Experience** - 3 companies (symphony.is, Softray Solutions, Mostar Designs) from 2016-current
4. **Skills** - Technology chips organized by category (Frontend, Backend, Databases, Specializations, Tools)
5. **Education** - BitCamp bootcamp, self-directed learning, psychology background
6. **Contact** - Contact form and contact info (email, phone, location)

## Contact Information

- **Email**: ivonamalekovic@hotmail.com
- **Phone**: +387 64 454 1426
- **Location**: Sarajevo, BiH
- **LinkedIn**: linkedin.com/in/ivona-malekovic-selimovic-2708ab10a

## Customization

To personalize the website:

1. Replace photo placeholder in Hero section with actual profile photo
2. Update resume/CV download link if needed
3. Customize colors in `index.css` (CSS variables)

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
