# Project Structure

## Path Aliases
- `@/*` maps to `src/*`
- Component aliases configured in `components.json`:
  - `@/components` - React components
  - `@/lib` - Shared utilities
  - `@/utils` - Helper functions
  - `@/ui` - shadcn/ui components

## Directory Organization

```
src/
├── app/                    # Next.js App Router
│   ├── (default)/         # Route group with shared layout
│   ├── layout.tsx         # Root layout (font, providers, metadata)
│   ├── error.tsx          # Error boundary
│   └── not-found.tsx      # 404 page
│
├── components/            # React components (feature-based)
│   ├── ui/               # shadcn/ui base components
│   ├── layout/           # Layout components (header, footer)
│   ├── providers/        # Context providers
│   └── [feature]-section/ # Feature-specific sections
│
├── lib/                   # Shared utilities
│   └── utils.ts          # cn() helper, QueryClient config
│
├── services/             # API layer
│   ├── http.ts          # Axios instance
│   ├── hook.ts          # React Query hooks
│   └── [domain].ts      # Domain-specific services
│
├── types/                # TypeScript definitions
│   ├── global-types.d.ts
│   └── [domain]-types.d.ts
│
├── utils/                # Helper functions
│   ├── app-config.ts    # App configuration
│   ├── custom-hooks.ts  # Custom React hooks
│   ├── helper.ts        # Utility functions
│   └── validation.schema.ts # Zod schemas
│
└── index.css            # Global styles, Tailwind imports

public/
├── assets/              # Images, logos
├── json/               # Static JSON data
└── svg/                # SVG files
```

## Conventions

### Component Organization
- Feature-based components in `components/[feature]-section/`
- Shared UI components from shadcn/ui in `components/ui/`
- Layout components (header, footer) in `components/layout/`

### Routing
- App Router with route groups: `(default)` for standard layout
- Nested layouts for shared UI structure
- Dynamic routes follow Next.js conventions

### Styling
- Tailwind utility classes preferred
- Use `cn()` for conditional class merging
- CSS variables for theming (defined in `index.css`)
- Component variants via `class-variance-authority`

### Type Safety
- Strict TypeScript enabled
- Type definitions in `src/types/`
- No `any` types allowed
- Props interfaces for all components
