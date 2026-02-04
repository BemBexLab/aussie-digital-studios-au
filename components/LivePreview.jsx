"use client";
import { useState } from "react";

function normalizeUrl(u) {
  if (!u) return u;
  try {
    const hasProtocol = /^https?:\/\//i.test(u) || /^\/\//.test(u);
    if (hasProtocol) {
      return u.startsWith("//") ? `https:${u}` : u;
    }
    return `https://${u}`;
  } catch (e) {
    return u;
  }
}

export default function LivePreview({ url }) {
  const [iframeError, setIframeError] = useState(false);
  const safeUrl = normalizeUrl(url);
  const proxySrc = `/api/proxy?url=${encodeURIComponent(safeUrl)}`;

  return (
    <>
      {!iframeError ? (
        <div>
          <iframe
            src={proxySrc}
            className="w-full"
            style={{
              minHeight: 1000,
              borderRadius: 16,
              border: "1px solid #e5e7eb",
              background: "#e5e7eb",
              marginBottom: 0,
            }}
            allow="fullscreen"
            loading="lazy"
            // allow user-initiated navigation from inside iframe
            sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"
            onError={() => setIframeError(true)}
          />
        </div>
      ) : (
        <div className="p-8 bg-gray-100 text-gray-700 rounded-xl text-center min-h-[300px] flex flex-col items-center justify-center">
          <span className="text-4xl mb-4">⚠️</span>
          <div className="mb-4">Live preview unavailable — this site may block embedding.</div>
        </div>
      )}
    </>
  );
}
