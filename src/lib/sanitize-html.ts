import DOMPurify from "dompurify";

/**
 * Sanitize untrusted HTML before injecting it into the DOM
 * (innerHTML / dangerouslySetInnerHTML). Strips scripts, event handlers,
 * iframes, and other XSS vectors while preserving normal document markup.
 */
export function sanitizeHtml(html: string): string {
  if (!html) return "";
  return DOMPurify.sanitize(html, {
    USE_PROFILES: { html: true },
    FORBID_TAGS: ["script", "style", "iframe", "object", "embed", "form"],
    FORBID_ATTR: ["onerror", "onload", "onclick", "onmouseover", "onfocus", "onblur", "onchange", "onsubmit"],
  });
}
