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

// Environment-agnostic base64 encoder: `Buffer` isn't guaranteed to exist in
// the client bundle and `btoa` isn't guaranteed server-side, and branching on
// `typeof window` to pick between them means this module-level constant can
// be computed differently between the server render and the client's first
// (hydration) render — a classic source of hydration mismatches. This avoids
// both globals so the output is byte-identical in every environment.
const BASE64_CHARS =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

export function toBase64(str: string): string {
  let result = '';
  for (let i = 0; i < str.length; i += 3) {
    const byte1 = str.charCodeAt(i);
    const byte2 = str.charCodeAt(i + 1);
    const byte3 = str.charCodeAt(i + 2);
    const hasByte2 = i + 1 < str.length;
    const hasByte3 = i + 2 < str.length;

    const enc1 = byte1 >> 2;
    const enc2 = ((byte1 & 3) << 4) | (hasByte2 ? byte2 >> 4 : 0);
    const enc3 = hasByte2
      ? ((byte2 & 15) << 2) | (hasByte3 ? byte3 >> 6 : 0)
      : 64;
    const enc4 = hasByte3 ? byte3 & 63 : 64;

    result +=
      BASE64_CHARS.charAt(enc1) +
      BASE64_CHARS.charAt(enc2) +
      (enc3 === 64 ? '=' : BASE64_CHARS.charAt(enc3)) +
      (enc4 === 64 ? '=' : BASE64_CHARS.charAt(enc4));
  }
  return result;
}

export function getImagePlaceholder(width = 700, height = 475): PlaceholderValue {
  return `data:image/svg+xml;base64,${toBase64(createShimmer(width, height))}`;
}

export const imagePlaceholder: PlaceholderValue = getImagePlaceholder();
