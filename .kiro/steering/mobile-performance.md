---
inclusion: manual
---

# Mobile Performance Optimization Guide

## Overview

This document outlines the mobile performance optimizations implemented to improve Lighthouse scores above 70 on mobile devices.

## Key Optimizations Implemented

### 1. Image Optimization

- **Removed animated SVG placeholders** - Replaced with static blur placeholders to reduce HTML payload
- **Added responsive image sizes** - Images now use proper `sizes` attribute for mobile-first loading
- **Enabled AVIF/WebP formats** - Modern image formats reduce file size by 30-50%
- **Aggressive lazy loading** - Images load only when needed with 300px rootMargin on mobile

**Files Modified:**

- `src/components/korcomptenz-image/_utils/image-placeholder.ts`
- `src/components/korcomptenz-image/korcomptenz-image.tsx`
- `next.config.ts`

### 2. Code Splitting & Bundle Optimization

- **Dynamic imports for heavy components** - Carousel and slider components now lazy load
- **Reduced Framer Motion usage** - Created motion config utility to minimize bundle impact
- **Removed duplicate dependencies** - `motion` package was redundant with `framer-motion`

**Files Created:**

- `src/components/global-page/dynamic-imports.ts` - Lazy load heavy components
- `src/utils/motion-config.ts` - Lightweight motion configuration

### 3. Lazy Loading Strategy

- **Aggressive section lazy loading** - Below-the-fold sections defer rendering until user scrolls
- **Mobile-specific thresholds** - 300px rootMargin on mobile vs 200px on desktop
- **Carousel lazy loading** - Only first 2 carousels load eagerly on mobile

**Files Modified:**

- `src/components/lazy-section-wrapper.tsx`

**Files Created:**

- `src/utils/carousel-optimization.ts` - Mobile carousel optimization

### 4. API & Data Fetching Optimization

- **Reduced cache times** - `gcTime: 5 minutes` (from 10) for fresher data without excess requests
- **Smarter refetch strategy** - Only refetch stale data on reconnect/mount
- **Network-aware caching** - Respects network conditions

**Files Modified:**

- `src/lib/utils.ts` - QueryClient configuration

### 5. Resource Hints & Preloading

- **Preconnect to critical domains** - Azure blob storage and image CDNs
- **DNS prefetch for API** - Reduces DNS lookup time
- **Prefetch critical assets** - Logo and essential images load early

**Files Modified:**

- `src/app/layout.tsx` - Added resource hints

### 6. Next.js Configuration

- **Image optimization settings** - Proper device sizes and formats
- **Compression enabled** - Gzip compression for all responses
- **Security headers** - Added cache control and security headers
- **Source maps disabled** - Reduces production bundle size

**Files Modified:**

- `next.config.ts` - Image and compression optimization

## Performance Metrics Impact

### Expected Improvements

- **First Contentful Paint (FCP)**: -30-40% (faster image loading)
- **Largest Contentful Paint (LCP)**: -25-35% (lazy loading + image optimization)
- **Cumulative Layout Shift (CLS)**: -20-30% (static placeholders)
- **Time to Interactive (TTI)**: -15-25% (code splitting)
- **Total Blocking Time (TBT)**: -10-20% (reduced animations)

### Mobile-Specific Optimizations

- Aggressive lazy loading with 300px threshold
- Reduced animation complexity on mobile
- Deferred non-critical scripts
- Mobile-first image sizing

## Best Practices Going Forward

### When Adding New Components

1. Use `LazySectionWrapper` for below-the-fold sections
2. Add `sizes` attribute to all images
3. Use `priority={true}` only for above-the-fold images
4. Lazy load heavy components (carousels, sliders, galleries)
5. Avoid inline animations - use CSS where possible

### When Adding New Carousels/Sliders

```typescript
import {
  shouldLazyLoadCarousel,
  getCarouselOptions,
} from "@/utils/carousel-optimization";

const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
const shouldLoad = shouldLazyLoadCarousel(index, isMobile);
const options = getCarouselOptions(isMobile);
```

### When Adding New Images

```typescript
<KorcomptenzImage
  src={imageData}
  alt="Description"
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
  priority={isAboveFold}
/>
```

### When Adding New Animations

```typescript
import { getAnimationConfig, fadeInConfig } from "@/utils/motion-config";

const config = getAnimationConfig(fadeInConfig);
// Respects prefers-reduced-motion
```

## Monitoring Performance

### Tools to Use

- **Lighthouse** - Run `pnpm build && pnpm start` then audit in DevTools
- **Web Vitals** - Already integrated via `WebVitals` component
- **Chrome DevTools** - Performance tab for detailed metrics
- **PageSpeed Insights** - Real-world mobile performance data

### Key Metrics to Track

- Core Web Vitals (LCP, FID, CLS)
- First Contentful Paint (FCP)
- Time to Interactive (TTI)
- Total Blocking Time (TBT)
- JavaScript bundle size

## Troubleshooting

### If Performance Regresses

1. Check bundle size: `pnpm build` and review `.next/static`
2. Audit images: Ensure all use responsive sizes
3. Check lazy loading: Verify sections use `LazySectionWrapper`
4. Review animations: Minimize Framer Motion usage
5. Profile with DevTools: Identify bottlenecks

### Common Issues

- **Large images**: Ensure images are optimized before upload
- **Unoptimized carousels**: Use `getCarouselOptions()` for mobile
- **Blocking scripts**: Defer non-critical scripts with `strategy="lazyOnload"`
- **Layout shifts**: Use static placeholders and proper image dimensions
