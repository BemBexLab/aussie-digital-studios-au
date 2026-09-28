import { NextRequest, NextResponse } from "next/server";
import { getCountryCode, isCountryAllowed } from "@/lib/countryAccess";

const RESTRICTED_PATH = "/country-restricted";

export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname === RESTRICTED_PATH) {
    return NextResponse.next();
  }

  const countryCode = getCountryCode(request.headers);

  // Local development has no CDN geolocation header. In production, an
  // unknown country is denied so the site does not accidentally become public
  // when the deployment's geo header is missing or misconfigured.
  const isLocalDevelopment = process.env.NODE_ENV !== "production";
  const isAllowed = isLocalDevelopment || isCountryAllowed(countryCode);

  if (isAllowed) {
    return NextResponse.next();
  }

  const restrictedUrl = request.nextUrl.clone();
  restrictedUrl.pathname = RESTRICTED_PATH;
  restrictedUrl.search = "";

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-country-blocked", "1");

  return NextResponse.rewrite(restrictedUrl, {
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
