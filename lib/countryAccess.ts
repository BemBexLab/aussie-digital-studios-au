export const ALLOWED_COUNTRIES = new Set(["AU", "PK"]);

// These are the country headers commonly added by the hosting/CDN layer.
// The first matching header wins so a trusted deployment header can be
// configured ahead of less specific fallbacks.
const COUNTRY_HEADERS = [
  "x-vercel-ip-country",
  "cf-ipcountry",
  "cloudfront-viewer-country",
  "x-country-code",
  "x-country",
  "x-geo-country",
  "x-appengine-country",
] as const;

function parseAkamaiCountry(value: string | null) {
  const match = value?.match(/(?:^|&)country_code=([A-Za-z]{2})(?:&|$)/i);
  return match?.[1] ?? null;
}

export function getCountryCode(headers: Headers) {
  for (const headerName of COUNTRY_HEADERS) {
    const value = headers.get(headerName)?.trim();

    if (value && /^[A-Za-z]{2}$/.test(value)) {
      return value.toUpperCase();
    }
  }

  return parseAkamaiCountry(headers.get("x-akamai-edgescape"))?.toUpperCase() ?? null;
}

export function isCountryAllowed(countryCode: string | null) {
  return countryCode !== null && ALLOWED_COUNTRIES.has(countryCode);
}
