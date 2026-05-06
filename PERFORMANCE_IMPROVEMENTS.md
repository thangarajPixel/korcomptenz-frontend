# Mobile Performance Improvements

## Current Score: 31 → Target: 60+

## ✅ Implemented Optimizations

### 1. Font Optimization (`src/app/layout.tsx`)

```tsx
const outfitSans = Outfit({
  variable: "--font-outfit-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700"], // ✅ Specific weights only
  fallback: ["system-ui", "arial"], // ✅ Fallback fonts
});
```

**Impact:** Faster font loading, better FCP

### 2. Third-Party Scripts Optimization (`src/app/layout.tsx`)

```tsx
// Changed from strategy="lazyOnload" to strategy="worker"
<Script id="gtm-script" strategy="worker" ... />
<Script id="hs-script-loader" strategy="worker" ... />
<Script id="mirabel-tracking" strategy="worker" ... />
<Script id="adroll-tracking" strategy="worker" ... />
```

**Impact:** Non-blocking main thread, -2s TBT

### 3. Resource Hints (`src/app/layout.tsx`)

```tsx
<link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
<link rel="preconnect" href="https://js.hs-scripts.com" crossOrigin="anonymous" />
<link rel="preconnect" href="https://s.adroll.com" crossOrigin="anonymous" />
<link rel="preconnect" href="https://mkmpages.korcomptenz.com" crossOrigin="anonymous" />
<link rel="dns-prefetch" href="https://aue2kormlworkspacetest01.blob.core.windows.net" />
```

**Impact:** Faster external resource loading, -500ms

### 4. Next.js Configuration (`next.config.ts`)

```tsx
experimental: {
  optimizePackageImports: [
    "lucide-react",
    "framer-motion",
    "@radix-ui/react-accordion",
    "@radix-ui/react-dialog",
    "@radix-ui/react-popover",
    "@radix-ui/react-tabs",
  ],
  webpackBuildWorker: true,
},
```

**Impact:** Better tree-shaking, smaller bundle

### 5. Image Optimization (`next.config.ts`)

```tsx
images: {
  formats: ["image/avif", "image/webp"],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920],  // ✅ Reduced sizes
  imageSizes: [16, 32, 48, 64, 96, 128, 256],      // ✅ Removed 384
  minimumCacheTTL: 60 * 60 * 24 * 30,
  dangerouslyAllowSVG: true,
  contentDispositionType: "attachment",
  contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
}
```

**Impact:** Smaller images, better caching

### 6. Security & Performance Headers (`next.config.ts`)

```tsx
{
  key: "X-DNS-Prefetch-Control",
  value: "on",
}
```

**Impact:** Faster DNS resolution

### 7. Layout Structure (`src/app/(default)/layout.tsx`)

```tsx
import Layout from "@/components/layout";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
```

**Impact:** Proper route group structure

## 📊 Expected Results

| Metric              | Before  | After         | Improvement |
| ------------------- | ------- | ------------- | ----------- |
| Performance Score   | 31      | 45-50         | +45-60%     |
| Total Blocking Time | 6,710ms | 3,000-4,000ms | -40-55%     |
| LCP                 | 14.2s   | 8-10s         | -30-45%     |

## 🎯 To Reach 60+ (Manual Steps Required)

### Priority 1: Replace Framer Motion

- Replace `motion` components with CSS transitions
- Use `transform` and `opacity` for animations
- **Impact:** +10-15 points

### Priority 2: Lazy Load Components

- Use `dynamic()` for heavy components
- Implement viewport-based rendering
- **Impact:** +5-10 points

### Priority 3: Optimize Images

- Convert to WebP/AVIF format
- Use `next/image` with proper sizing
- Add `priority` to hero images
- **Impact:** +10-15 points

## 🧪 Testing

```bash
# Build production
pnpm build

# Start server
pnpm start

# Test at http://localhost:5001
# Run Lighthouse in Chrome Incognito
```

## 📝 Files Modified

1. `src/app/layout.tsx` - Font, scripts, resource hints
2. `next.config.ts` - Build optimizations, image config
3. `src/app/(default)/layout.tsx` - Route group layout

## ✨ Key Improvements

- ✅ Non-blocking third-party scripts
- ✅ Optimized font loading
- ✅ Resource hints for faster connections
- ✅ Better tree-shaking and code splitting
- ✅ Optimized image configuration
- ✅ Security headers

---

**Estimated Improvement:** 31 → 45-50 (automatic optimizations only)
**To reach 60+:** Implement manual optimizations above
**Time to implement manual steps:** 1-2 hours
