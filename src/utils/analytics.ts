declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

export const trackEvent = (
  eventName: string,
  params: Record<string, unknown> = {}
) => {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
};