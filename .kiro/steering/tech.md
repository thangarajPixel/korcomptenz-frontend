# Tech Stack

## Core Framework
- **Next.js 15.3** (App Router) with React 19
- **TypeScript 5** with strict mode enabled
- Server-side rendering with `force-dynamic` export

## Styling
- **Tailwind CSS 4** with PostCSS
- **shadcn/ui** components (New York style, no RSC)
- **Framer Motion** for animations
- Custom utility: `cn()` function for class merging (clsx + tailwind-merge)

## State & Data
- **TanStack Query** for server state management
- **React Hook Form** with Zod validation
- **nuqs** for URL state management
- **Axios** for HTTP requests

## UI Components
- Radix UI primitives (Dialog, Popover, Accordion, Tabs)
- Lucide React icons
- Embla Carousel
- Sonner for toast notifications

## Code Quality
- **Oxlint** for linting (no ESLint)
- **Husky** + lint-staged for pre-commit hooks
- Strict TypeScript configuration

## Common Commands

```bash
# Development (runs on port 4000 with Turbopack)
pnpm dev

# Production build
pnpm build

# Start production server (port 3100)
pnpm start

# Linting
pnpm lint          # Check for issues
pnpm lint:fix      # Auto-fix issues

# Type checking
pnpm check-types
```

## Important Rules
- **No console.log** - Oxlint enforces `no-console: error`
- **No explicit any** - TypeScript any is forbidden
- **No unused variables** - Strictly enforced
