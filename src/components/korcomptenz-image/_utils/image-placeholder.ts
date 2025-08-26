import type { PlaceholderValue } from 'next/dist/shared/lib/get-img-props';

export function createShimmer(width: number, height: number): string {
  return `
    <svg width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#f4f4f5" offset="20%" />
          <stop stop-color="#d4d4d8" offset="50%" />
          <stop stop-color="#f4f4f5" offset="70%" />
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="#f4f4f5" />
      <rect id="r" width="${width}" height="${height}" fill="url(#g)" />
      <animate link:href="#r" attributeName="x" from="-${width}" to="${width}" dur="1s" repeatCount="indefinite" />
    </svg>`;
}

export function toBase64(str: string): string {
  return typeof window === 'undefined'
    // eslint-disable-next-line node/prefer-global/buffer
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);
}

export function getImagePlaceholder(width = 700, height = 475): PlaceholderValue {
  return `data:image/svg+xml;base64,${toBase64(createShimmer(width, height))}`;
}

export const imagePlaceholder: PlaceholderValue = getImagePlaceholder();
