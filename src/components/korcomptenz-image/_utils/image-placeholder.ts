import type { PlaceholderValue } from 'next/dist/shared/lib/get-img-props';

// Static blur placeholder - no animation, minimal payload
export function getImagePlaceholder(): PlaceholderValue {
  return 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 475"%3E%3Crect fill="%23f4f4f5" width="700" height="475"/%3E%3C/svg%3E';
}

export const imagePlaceholder: PlaceholderValue = getImagePlaceholder();
