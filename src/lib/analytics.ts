declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, string | number | boolean>
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, eventParams);
  }
};

export const trackCTAClick = (category: string) => {
  trackEvent("cta_click", { category });
};

export const trackEmailSignup = () => {
  trackEvent("email_signup");
};

export const trackPricingClick = (tier: string) => {
  trackEvent("pricing_click", { tier });
};
