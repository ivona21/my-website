# Ivona Malekovic Selimovic - Portfolio Website

A professional portfolio website for Ivona Malekovic Selimovic, a Software Developer with 7+ years of experience specializing in React frontend development.

## Overview

This is a lightweight, modern static website built with Astro and Tailwind CSS. It generates a pure static `dist/` folder suitable for hosting on Cloudflare Pages, Netlify, or any static hosting provider. No server or Node.js runtime needed.

## Tech Stack

- **Framework**: Astro 5 (static output mode)
- **Styling**: Tailwind CSS 3 with CSS variables for theming
- **Interactivity**: Vanilla JavaScript (dark mode, mobile menu, scroll animations)
- **Icons**: Inline SVGs (no dependencies)
- **Fonts**: Inter, JetBrains Mono (Google Fonts)

## Project Structure (Astro)

```
src/
  pages/
    index.astro         # Main portfolio page with all sections
  layouts/
    Layout.astro        # Base HTML layout with SEO meta tags
  styles/
    global.css          # Tailwind CSS + custom CSS variables
public/
  profile-photo.jpeg    # Profile photo
  favicon.svg           # Site favicon
astro.config.mjs        # Astro config (static output)
tailwind.config.ts      # Tailwind config with custom theme
```

## Sections

1. **Hero** - Introduction with profile photo, stats (7+ Years, 3 Companies, React Focus, AI Powered), and CTAs
2. **About** - Bio and core values (Clean Code, AI-Powered, Accessibility, Continuous Learning)
3. **Experience** - 3 companies (symphony.is, Softray Solutions, Mostar Designs) from 2016-current, with expandable details
4. **Skills** - Technology badges organized by category (Frontend, Backend, Databases, Specializations, Tools)
5. **Education** - BitCamp bootcamp, self-directed learning, psychology background
6. **Contact** - Contact info (email, phone, location) + LinkedIn

## Contact Information

- **Email**: ivonamalekovic@hotmail.com
- **Phone**: +387 64 454 1426
- **Location**: Sarajevo, BiH
- **LinkedIn**: linkedin.com/in/ivona-malekovic-selimovic-2708ab10a

## Building for Deployment

```bash
npx astro build
```

Output goes to `dist/` folder. Upload this folder to Cloudflare Pages.

### Cloudflare Pages Setup

1. Connect your GitHub repo
2. Build command: `npx astro build`
3. Output directory: `dist`
4. Framework preset: Astro

## Color Scheme

The site uses a professional blue/purple gradient theme:
- Primary: Blue (221, 83%, 53%)
- Accent: Purple (262, 83%, 58%)
- Supports both light and dark modes via CSS class toggle

## User Preferences

- No "Available for hire" messaging (currently employed at symphony.is)
- No contact form - only contact information display
- Profile photo integrated in hero section
