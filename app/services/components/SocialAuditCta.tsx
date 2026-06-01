"use client";

import React from "react";
import { motion, useSpring } from "@/lib/motion";

export type SocialAuditCtaData = {
  badgeText: string;
  title: string;
  highlightedTitle?: string;
  description: string;
  primaryAction: {
    label: string;
    href: string;
  };
  secondaryAction: {
    label: string;
    href: string;
  };
  trustItems?: string[];
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

const DEFAULT_EDGE_VARS = {
  "--edge-top-z": "2px",
  "--edge-right-z": "2px",
  "--edge-bottom-z": "2px",
  "--edge-left-z": "2px",
  "--edge-top-opacity": "0.34",
  "--edge-right-opacity": "0.34",
  "--edge-bottom-opacity": "0.28",
  "--edge-left-opacity": "0.34",
  "--edge-top-scale": "1",
  "--edge-right-scale": "1",
  "--edge-bottom-scale": "1",
  "--edge-left-scale": "1",
  "--corner-tl-opacity": "0",
  "--corner-tr-opacity": "0",
  "--corner-br-opacity": "0",
  "--corner-bl-opacity": "0",
} as React.CSSProperties;

type SocialAuditCtaProps = {
  data: SocialAuditCtaData;
};

const SocialAuditCta = ({ data }: SocialAuditCtaProps) => {
  const cardRef = React.useRef<HTMLDivElement | null>(null);
  const shellRef = React.useRef<HTMLDivElement | null>(null);
  const frameRef = React.useRef<number | null>(null);
  const rotateX = useSpring(0, { stiffness: 180, damping: 18, mass: 0.7 });
  const rotateY = useSpring(0, { stiffness: 180, damping: 18, mass: 0.7 });
  const scale = useSpring(1, { stiffness: 220, damping: 20, mass: 0.6 });

  const writeEffect = (clientX: number, clientY: number) => {
    if (!cardRef.current || !shellRef.current) {
      return;
    }

    const rect = cardRef.current.getBoundingClientRect();
    const x = clamp(clientX - rect.left, 0, rect.width);
    const y = clamp(clientY - rect.top, 0, rect.height);
    const px = clamp((x / rect.width) * 2 - 1, -1, 1);
    const py = clamp((y / rect.height) * 2 - 1, -1, 1);
    const edgeRange = Math.max(110, Math.min(rect.width, rect.height) * 0.28);

    const edgeTop = clamp(1 - y / edgeRange, 0, 1);
    const edgeRight = clamp(1 - (rect.width - x) / edgeRange, 0, 1);
    const edgeBottom = clamp(1 - (rect.height - y) / edgeRange, 0, 1);
    const edgeLeft = clamp(1 - x / edgeRange, 0, 1);

    const shell = shellRef.current;

    rotateX.set(py * -7);
    rotateY.set(px * 9);
    scale.set(1.01);

    const setEdge = (
      edge: "top" | "right" | "bottom" | "left",
      intensity: number,
      baseOpacity: number
    ) => {
      shell.style.setProperty(
        `--edge-${edge}-z`,
        `${(2 + intensity * 20).toFixed(2)}px`
      );
      shell.style.setProperty(
        `--edge-${edge}-opacity`,
        `${(baseOpacity + intensity * 0.66).toFixed(3)}`
      );
      shell.style.setProperty(
        `--edge-${edge}-scale`,
        `${(1 + intensity * 0.12).toFixed(3)}`
      );
    };

    setEdge("top", edgeTop, 0.34);
    setEdge("right", edgeRight, 0.34);
    setEdge("bottom", edgeBottom, 0.28);
    setEdge("left", edgeLeft, 0.34);

    shell.style.setProperty(
      "--corner-tl-opacity",
      `${(Math.max(edgeTop, edgeLeft) * 0.9).toFixed(3)}`
    );
    shell.style.setProperty(
      "--corner-tr-opacity",
      `${(Math.max(edgeTop, edgeRight) * 0.9).toFixed(3)}`
    );
    shell.style.setProperty(
      "--corner-br-opacity",
      `${(Math.max(edgeBottom, edgeRight) * 0.9).toFixed(3)}`
    );
    shell.style.setProperty(
      "--corner-bl-opacity",
      `${(Math.max(edgeBottom, edgeLeft) * 0.9).toFixed(3)}`
    );
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
    }

    const { clientX, clientY } = event;

    frameRef.current = requestAnimationFrame(() => {
      writeEffect(clientX, clientY);
    });
  };

  const resetEffect = () => {
    if (!shellRef.current) {
      return;
    }

    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);

    Object.entries(DEFAULT_EDGE_VARS).forEach(([key, value]) => {
      shellRef.current?.style.setProperty(key, String(value));
    });
  };

  React.useEffect(() => {
    resetEffect();

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <div
      className="min-h-1/2 w-full flex items-left justify-left relative overflow-hidden px-20 py-20"
      style={{ backgroundColor: "#07100d", perspective: "2200px" }}
    >
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-15%",
          left: "-10%",
          width: "60vw",
          height: "60vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(76,140,116,0.28) 0%, transparent 65%)",
          filter: "blur(100px)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-20%",
          right: "-10%",
          width: "55vw",
          height: "55vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(76,140,116,0.18) 0%, transparent 65%)",
          filter: "blur(110px)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          top: "50%",
          left: "55%",
          transform: "translate(-50%,-50%)",
          width: "35vw",
          height: "35vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(31,31,31,0.7) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(76,140,116,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(76,140,116,0.045) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div
        className="absolute pointer-events-none"
        style={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(135deg, rgba(76,140,116,0.04) 0%, transparent 40%, rgba(76,140,116,0.03) 100%)",
        }}
      />

      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetEffect}
        className="relative z-10 max-w-2xl w-full"
        style={{
          rotateX,
          rotateY,
          scale,
          transformPerspective: 2200,
          transformStyle: "preserve-3d",
        }}
      >
        <div
          ref={shellRef}
          className="pointer-events-none absolute inset-0 rounded-[28px] transition-transform duration-150 ease-out"
          style={{
            ...DEFAULT_EDGE_VARS,
            transformStyle: "preserve-3d",
          }}
        >
          <div
            className="absolute inset-0 rounded-[28px]"
            style={{
              transform: "translateZ(2px)",
              border: "1px solid rgba(76,140,116,0.22)",
              boxShadow:
                "0 0 0 1px rgba(76,140,116,0.08) inset, 0 24px 80px rgba(0,0,0,0.6), 0 0 60px rgba(76,140,116,0.06)",
            }}
          />
          <div
            className="absolute left-9 right-9 top-0 h-[2px] origin-center"
            style={{
              transform:
                "translateZ(var(--edge-top-z)) scaleX(var(--edge-top-scale))",
              opacity: "var(--edge-top-opacity)",
              background:
                "linear-gradient(90deg, transparent, rgba(76,140,116,0.78), rgba(255,255,255,0.3), rgba(76,140,116,0.78), transparent)",
              boxShadow: "0 0 28px rgba(76,140,116,0.4)",
            }}
          />
          <div
            className="absolute bottom-0 left-9 right-9 h-[2px] origin-center"
            style={{
              transform:
                "translateZ(var(--edge-bottom-z)) scaleX(var(--edge-bottom-scale))",
              opacity: "var(--edge-bottom-opacity)",
              background:
                "linear-gradient(90deg, transparent, rgba(76,140,116,0.52), rgba(255,255,255,0.15), rgba(76,140,116,0.52), transparent)",
              boxShadow: "0 0 24px rgba(76,140,116,0.25)",
            }}
          />
          <div
            className="absolute bottom-9 left-0 top-9 w-[2px] origin-center"
            style={{
              transform:
                "translateZ(var(--edge-left-z)) scaleY(var(--edge-left-scale))",
              opacity: "var(--edge-left-opacity)",
              background:
                "linear-gradient(180deg, transparent, rgba(76,140,116,0.7), rgba(255,255,255,0.18), rgba(76,140,116,0.6), transparent)",
              boxShadow: "0 0 26px rgba(76,140,116,0.32)",
            }}
          />
          <div
            className="absolute bottom-9 right-0 top-9 w-[2px] origin-center"
            style={{
              transform:
                "translateZ(var(--edge-right-z)) scaleY(var(--edge-right-scale))",
              opacity: "var(--edge-right-opacity)",
              background:
                "linear-gradient(180deg, transparent, rgba(76,140,116,0.6), rgba(255,255,255,0.22), rgba(76,140,116,0.72), transparent)",
              boxShadow: "0 0 26px rgba(76,140,116,0.32)",
            }}
          />
          <div
            className="absolute -left-6 -top-6 h-24 w-24 rounded-full blur-2xl"
            style={{
              opacity: "var(--corner-tl-opacity)",
              background:
                "radial-gradient(circle, rgba(76,140,116,0.3) 0%, transparent 70%)",
              transform: "translateZ(18px)",
            }}
          />
          <div
            className="absolute -right-6 -top-6 h-24 w-24 rounded-full blur-2xl"
            style={{
              opacity: "var(--corner-tr-opacity)",
              background:
                "radial-gradient(circle, rgba(168,213,194,0.22) 0%, transparent 70%)",
              transform: "translateZ(18px)",
            }}
          />
          <div
            className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full blur-2xl"
            style={{
              opacity: "var(--corner-br-opacity)",
              background:
                "radial-gradient(circle, rgba(76,140,116,0.26) 0%, transparent 70%)",
              transform: "translateZ(18px)",
            }}
          />
          <div
            className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full blur-2xl"
            style={{
              opacity: "var(--corner-bl-opacity)",
              background:
                "radial-gradient(circle, rgba(168,213,194,0.2) 0%, transparent 70%)",
              transform: "translateZ(18px)",
            }}
          />
        </div>

        <div
          className="relative overflow-hidden rounded-[28px]"
          style={{
            background:
              "linear-gradient(145deg, rgba(76,140,116,0.09) 0%, rgba(255,255,255,0.03) 50%, rgba(76,140,116,0.06) 100%)",
            border: "1px solid rgba(76,140,116,0.2)",
            backdropFilter: "blur(28px)",
            WebkitBackdropFilter: "blur(28px)",
            padding: "52px 48px 48px",
          }}
        >
          <div
            className="absolute top-0 left-8 right-8 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(76,140,116,0.5), rgba(255,255,255,0.15), rgba(76,140,116,0.5), transparent)",
            }}
          />
          <div
            className="absolute top-5 left-5 w-1.5 h-1.5 rounded-full"
            style={{
              background: "rgba(76,140,116,0.5)",
              boxShadow: "0 0 8px rgba(76,140,116,0.8)",
            }}
          />
          <div
            className="absolute top-5 right-5 w-1.5 h-1.5 rounded-full"
            style={{
              background: "rgba(76,140,116,0.5)",
              boxShadow: "0 0 8px rgba(76,140,116,0.8)",
            }}
          />

          <div
            className="inline-flex items-center gap-2 mb-7 px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-700 opacity-100"
            style={{
              color: "#4C8C74",
              background: "rgba(76,140,116,0.1)",
              border: "1px solid rgba(76,140,116,0.25)",
              backdropFilter: "blur(8px)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background: "#4C8C74",
                boxShadow: "0 0 6px #4C8C74",
                animation: "pulse 2s infinite",
              }}
            />
            {data.badgeText}
          </div>

          <h1
            className="font-black leading-[1.08] mb-6 transition-all duration-700 opacity-100 translate-y-0"
            style={{
              fontFamily: "'Syne', 'DM Sans', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              background:
                "linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.9) 30%, #4C8C74 70%, #a8d5c2 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {data.title}
            {data.highlightedTitle ? (
              <>
                <br />
                <span
                  style={{ color: "#4C8C74", WebkitTextFillColor: "#4C8C74" }}
                >
                  {data.highlightedTitle}
                </span>
              </>
            ) : null}
          </h1>

          <div
            className="mb-6 h-px w-16 transition-all duration-700 opacity-100"
            style={{
              background: "linear-gradient(90deg, #4C8C74, transparent)",
            }}
          />

          <div
            className="rounded-xl px-5 py-4 mb-8 transition-all duration-700 opacity-100 translate-y-0"
            style={{
              backgroundColor: "#1F1F1F",
              border: "1px solid rgba(76,140,116,0.12)",
            }}
          >
            <p className="text-sm leading-relaxed" style={{ color: "#4C8C74" }}>
              {data.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 transition-all duration-700 opacity-100 translate-y-0">
            <a
              className="relative group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl text-sm font-semibold overflow-hidden transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
              href={data.primaryAction.href}
              style={{
                color: "#ffffff",
                background:
                  "linear-gradient(135deg, rgba(76,140,116,0.75) 0%, rgba(76,140,116,0.45) 100%)",
                border: "1px solid rgba(76,140,116,0.55)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                boxShadow:
                  "0 0 32px rgba(76,140,116,0.2), inset 0 1px 0 rgba(255,255,255,0.18), inset 0 -1px 0 rgba(0,0,0,0.2)",
                fontFamily: "'Syne', sans-serif",
                letterSpacing: "0.02em",
              }}
            >
              <span
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)",
                }}
              />
              <span
                className="absolute top-0 left-4 right-4 h-px pointer-events-none"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                }}
              />
              <svg
                className="w-4 h-4 relative z-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="relative z-10">{data.primaryAction.label}</span>
            </a>

            <a
              className="relative group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl text-sm font-semibold overflow-hidden transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
              href={data.secondaryAction.href}
              style={{
                color: "#4C8C74",
                background: "rgba(76,140,116,0.06)",
                border: "1px solid rgba(76,140,116,0.22)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                boxShadow:
                  "0 4px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(76,140,116,0.15), inset 0 -1px 0 rgba(0,0,0,0.15)",
                fontFamily: "'Syne', sans-serif",
                letterSpacing: "0.02em",
              }}
            >
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{ background: "rgba(76,140,116,0.07)" }}
              />
              <span
                className="absolute top-0 left-4 right-4 h-px pointer-events-none"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(76,140,116,0.3), transparent)",
                }}
              />
              <span className="relative z-10">{data.secondaryAction.label}</span>
              <svg
                className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>

          {data.trustItems?.length ? (
            <div
              className="flex flex-wrap items-center gap-3 mt-8 pt-6"
              style={{ borderTop: "1px solid rgba(76,140,116,0.1)" }}
            >
              {data.trustItems.map((item) => (
                <span
                  key={item}
                  className="rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.16em]"
                  style={{
                    color: "rgba(255,255,255,0.72)",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          ) : null}

          <div
            className="absolute bottom-0 left-8 right-8 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(76,140,116,0.2), transparent)",
            }}
          />
        </div>
      </motion.div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&display=swap');

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  );
};

export default SocialAuditCta;
