import { lazy } from "react";

// Lazy load heavy components to reduce initial bundle
export const LazyInsightsSection = lazy(() =>
  import("../insight-section").then((mod) => ({ default: mod.InsightsSection }))
);

export const LazyLightSlider = lazy(() =>
  import("../light-slider").then((mod) => ({ default: mod.default }))
);

export const LazyDarkSlider = lazy(() =>
  import("../dark-slider").then((mod) => ({ default: mod.default }))
);

export const LazyMediaSliderSection = lazy(() =>
  import("../media-slider-section").then((mod) => ({ default: mod.default }))
);

export const LazyMasonryGallerySection = lazy(() =>
  import("../masonry-gallery-section/masonry-gallery-section").then((mod) => ({
    default: mod.default,
  }))
);

export const LazyNewsRoomSlider = lazy(() =>
  import("../news-room").then((mod) => ({ default: mod.NewsRoomSlider }))
);

export const LazyDigitialCardSlider = lazy(() =>
  import("../digitial-card-slider").then((mod) => ({
    default: mod.DigitialCardSlider,
  }))
);

export const LazyDigitialInsightSlider = lazy(() =>
  import("../dark-slider copy").then((mod) => ({ default: mod.default }))
);

export const LazyCombinedAboutCardSlider = lazy(() =>
  import("../digitial-combined/digitial-combined").then((mod) => ({
    default: mod.default,
  }))
);

export const LazyKorCareSlider = lazy(() =>
  import("../kor-care-slider-section").then((mod) => ({ default: mod.default }))
);
