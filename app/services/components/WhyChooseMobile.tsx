import React from "react";
import Image from "next/image";
import Divider from "./Divider";

type WhyChooseData = {
  image: string;
  heading: React.ReactNode;
  paragraphs: React.ReactNode[];
};

type WhyChooseMobileProps = {
  data?: WhyChooseData;
};

const WhyChooseMobile = ({ data }: WhyChooseMobileProps) => {
  if (!data) {
    return null;
  }

  const renderParagraphs = () =>
    data.paragraphs.flatMap((node, index) => {
      if (React.isValidElement(node) && node.type === React.Fragment) {
        const element = node as React.ReactElement<{ children?: React.ReactNode }>;

        return React.Children.toArray(element.props?.children)
          .filter((child) => !(typeof child === "string" && child.trim() === ""))
          .map((child, childIndex) => {
            if (typeof child === "string" || typeof child === "number") {
              return (
                <p
                  key={`why-choose-mobile-text-${index}-${childIndex}`}
                  className="whitespace-pre-line"
                >
                  {child}
                </p>
              );
            }

            return (
              <React.Fragment key={`why-choose-mobile-node-${index}-${childIndex}`}>
                {child}
              </React.Fragment>
            );
          });
      }

      if (typeof node === "string" || typeof node === "number") {
        return (
          <p key={`why-choose-mobile-text-${index}`} className="whitespace-pre-line">
            {node}
          </p>
        );
      }

      return (
        <React.Fragment key={`why-choose-mobile-node-${index}`}>
          {node}
        </React.Fragment>
      );
    });

  return (
    <section className="sm:hidden mt-12">
      <div className="flex flex-col justify-center px-4 gap-4">
        <Image
          className="w-full h-[250px] object-cover rounded-lg"
          src={data.image}
          alt="Why Choose Us"
          width={600}
          height={300}
        />
	        <div className="flex flex-col">
	          <h2 className="text-2xl font-semibold text-white">
	            {data.heading}
	          </h2>
	          <div className="text-xs text-[#AAAAAA] mt-3 leading-relaxed" data-text-sm-light>
	            {renderParagraphs()}
	          </div>
	        </div>
      </div>
    </section>
  );
};

export default WhyChooseMobile;
