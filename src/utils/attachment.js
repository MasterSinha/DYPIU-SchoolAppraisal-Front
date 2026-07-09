/**
 * Utility to resolve absolute attachment URLs, prepending the backend API base URL
 * if the attachment url is relative (e.g. starting with /uploads/).
 * If the url is already absolute (GCP storage public URL starting with http/https),
 * it returns the url unmodified.
 */
export const getAttachmentUrl = (url) => {
  if (!url) return "";
  if (
    url.startsWith("http://") ||
    url.startsWith("https://") ||
    url.startsWith("blob:") ||
    url.startsWith("data:")
  ) {
    return url;
  }
  
  const apiBaseUrl = globalThis.__APP_CONFIG__?.VITE_API_BASE_URL ?? import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8080";
  const cleanBase = apiBaseUrl.endsWith("/") ? apiBaseUrl.slice(0, -1) : apiBaseUrl;
  const cleanPath = url.startsWith("/") ? url : "/" + url;
  return `${cleanBase}${cleanPath}`;
};
