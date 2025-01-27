import { NEXT_PUBLIC_GA_ID } from "@lib/getEnv";

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageView = url => {
  window.gtag("config", NEXT_PUBLIC_GA_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
