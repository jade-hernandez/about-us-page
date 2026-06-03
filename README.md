# About Us Page

A responsive about us page built as part of the [GreatFrontEnd Projects](https://www.greatfrontend.com/projects/challenges/about-us-page) challenge series.

## Live Site

[About Us Page](https://about-us-page-two.vercel.app/)

## Challenge

This project is part of a GreatFrontEnd challenge that focuses on combining components into a full about us page.
The goal is to assemble a Navbar, Hero Section, Statistics Section, Team Section, Contact Section, and Footer into a cohesive page while respecting layout rules, responsive behavior, and design fidelity.

## Features

- Responsive image loading with blur placeholders
  - Custom `ImageWithPlaceholder` component that handles image loading state and applies a blur effect until the image is fully loaded. This enhances perceived performance and provides a smoother visual experience.
- Statistics fetched from the GreatFrontEnd API with skeleton loading and error state with retry
- Contact form with validation, submitted to the GreatFrontEnd API endpoint
- Success and error states with accessible feedback
- Sticky navbar with scroll-aware background
- Responsive mobile menu with focus trap and keyboard navigation
- Care for A11y — semantic HTML, ARIA attributes, WAI-ARIA patterns

## Stack

- **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **Vite** — No SSR or complex routing needed here — Vite is the straightforward choice.
- **CVA** — To manage component variants in a structured way.
- **clsx** + **tailwind-merge** — To prevent CSS precedence issues.

## Project Structure

```
src/
├── blocks/
│ ├── contact-section/ # Contact form, success state, form logic
│ ├── footer/ # Footer with social icons
│ ├── hero-section/ # Hero with responsive image and blur placeholder
│ ├── navigation/ # Navbar and mobile menu
│ ├── statistics-section/ # Live API data, skeleton loading, retry on error
│ └── team-section/ # Team cards with responsive images
├── components/
│ ├── image-with-placeholder/ # Blur placeholder image component
│ ├── skeleton-card/ # Skeleton loading card
│ └── ui/ # Badge, Button, Link, Portal, Textarea, Toast
├── hooks/ # useMediaQuery, useFocusTrap, useStats
└── utils/ # cn(), validateEmail()
```

## Getting Started

```bash
pnpm install # install dependencies
pnpm dev # start development server
pnpm lint # run linters
pnpm format # run code formatter
pnpm build # build for production
```

## Code Conventions

- **Named exports** via `export { }` at the bottom of each file.
- **`type`** over `interface` for all type definitions.
- **kebab-case** for everything non-React.
- **camelCase** for hooks.
- **PascalCase** for component files
