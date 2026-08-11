// src/utils/analytics.ts

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const trackEvent = (
  eventName: string,
  params: Record<string, unknown> = {}
) => {
  console.log("GA event:", eventName, params);

  if (typeof window === "undefined") {
    console.log("window not available");
    return;
  }

  if (typeof window.gtag !== "function") {
    console.error("gtag is NOT loaded");
    return;
  }

  window.gtag("event", eventName, {
    ...params,
    debug_mode: true,
  });

  console.log("GA event sent:", eventName);
};