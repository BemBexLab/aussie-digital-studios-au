"use client";

import React, { useState, type ReactNode } from "react";
import { motion } from "motion/react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

type EasyExperienceShapeBase = {
  stroke: string;
  strokeWidth: string;
  strokeLinecap?: React.SVGProps<SVGElement>["strokeLinecap"];
};

type EasyExperiencePathShape = EasyExperienceShapeBase & {
  type: "path";
  d: string;
};

type EasyExperienceCircleShape = EasyExperienceShapeBase & {
  type: "circle";
  cx: string;
  cy: string;
  r: string;
};

type EasyExperienceEllipseShape = EasyExperienceShapeBase & {
  type: "ellipse";
  cx: string;
  cy: string;
  rx: string;
  ry: string;
};

type EasyExperienceIconShape =
  | EasyExperiencePathShape
  | EasyExperienceCircleShape
  | EasyExperienceEllipseShape;

type EasyExperienceSourceCard = {
  title: string;
  description?: ReactNode | null;
  icon:
    | {
        viewBox: string;
        shapes: EasyExperienceIconShape[];
      }
    | ReactNode;
};

export type EasyExperienceSectionData = {
  eyebrow: ReactNode;
  headingLine1: ReactNode;
  headingLine2?: ReactNode;
  cards: EasyExperienceSourceCard[];
};

type EasyExperienceProps = {
  sectionData: EasyExperienceSectionData;
};

export const CHAR_LIMIT = 231;

export const getEasyExperienceRawText = (desc: ReactNode): string => {
  if (!desc) return "";
  if (typeof desc === "string") return desc;

  const extract = (node: ReactNode): string => {
    if (!node) return "";
    if (typeof node === "string" || typeof node === "number") return String(node);
    if (Array.isArray(node)) return node.map(extract).join("");
    if (React.isValidElement<{ children?: ReactNode }>(node)) {
      if (node.type === "br") return " ";
      return extract(node.props.children);
    }
    return "";
  };

  return extract(desc).replace(/\s+/g, " ").trim();
};

const renderShape = (shape: EasyExperienceIconShape, index: number) => {
  if (shape.type === "path") {
    return (
      <path
        key={`path-${index}`}
        d={shape.d}
        stroke={shape.stroke}
        strokeWidth={shape.strokeWidth}
        strokeLinecap={shape.strokeLinecap}
      />
    );
  }

  if (shape.type === "circle") {
    return (
      <circle
        key={`circle-${index}`}
        cx={shape.cx}
        cy={shape.cy}
        r={shape.r}
        stroke={shape.stroke}
        strokeWidth={shape.strokeWidth}
        strokeLinecap={shape.strokeLinecap}
      />
    );
  }

  return (
    <ellipse
      key={`ellipse-${index}`}
      cx={shape.cx}
      cy={shape.cy}
      rx={shape.rx}
      ry={shape.ry}
      stroke={shape.stroke}
      strokeWidth={shape.strokeWidth}
      strokeLinecap={shape.strokeLinecap}
    />
  );
};

const hasShapeIcon = (
  icon: EasyExperienceSourceCard["icon"],
): icon is { viewBox: string; shapes: EasyExperienceIconShape[] } => {
  return (
    typeof icon === "object" &&
    icon !== null &&
    !React.isValidElement(icon) &&
    "viewBox" in icon &&
    "shapes" in icon &&
    Array.isArray(icon.shapes)
  );
};

const EasyExperience = ({ sectionData }: EasyExperienceProps) => {
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({});
  const colsPerRow = 3;

  const toggleExpand = (index: number) => {
    setExpandedCards((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section className="hidden md:block my-25">
      <div className="w-full px-4">
        <motion.p
          className="text-xl font-normal text-center text-[#4C8C74]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {sectionData.eyebrow}
        </motion.p>

        <motion.h2
          className="text-4xl font-semibold text-center text-white mt-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {sectionData.headingLine1}
        </motion.h2>

        {sectionData.headingLine2 ? (
          <motion.h2
            className="text-center text-white mt-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            {sectionData.headingLine2}
          </motion.h2>
        ) : null}

        <div className="mx-auto mt-15 max-w-7xl grid grid-cols-3">
          {sectionData.cards.map((card, index) => {
            const isExpanded = !!expandedCards[index];
            const isLastInRow =
              (index + 1) % colsPerRow === 0 || index === sectionData.cards.length - 1;

            const rawText = getEasyExperienceRawText(card.description);
            const needsTruncation = rawText.length > CHAR_LIMIT;
            const truncatedText = rawText.slice(0, CHAR_LIMIT).trimEnd() + "...";

            return (
              <motion.div
                key={index}
                className={`flex flex-col items-center px-10 py-12 ${
                  !isLastInRow ? "border-r border-white/20" : ""
                }`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-white/30">
                  {hasShapeIcon(card.icon) ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      viewBox={card.icon.viewBox}
                      fill="none"
                    >
                      {card.icon.shapes.map(renderShape)}
                    </svg>
                  ) : null}
                  {!hasShapeIcon(card.icon) ? card.icon : null}
                </div>

                <p className="text-center text-base font-semibold text-yellow-500 mb-4 leading-snug">
                  {card.title}
                </p>

                <div className="text-center text-sm text-white/70 leading-relaxed">
                  {card.description}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EasyExperience;
