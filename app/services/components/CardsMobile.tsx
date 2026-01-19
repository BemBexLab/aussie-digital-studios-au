import React from "react";

type CardsMobileProps = {
  service: {
    strategicCardData?: Array<{
      title: string;
      desc: string;
      svg: React.ReactNode;
    }>;
  };
};

const CardsMobile = ({ service }: CardsMobileProps) => {
  const allCards = service.strategicCardData || [];

  return (
    <div className="flex flex-col items-center justify-center w-full py-8 px-4">
      <h2 className="text-2xl text-center mb-6 font-semibold">Strategic Approach</h2>
      
      {/* Single column stack for mobile */}
      <div className="flex flex-col gap-4 w-full">
        {allCards.map((card, index) => (
          <div
            key={`${card.title}-${index}`}
            className="relative rounded-xl w-full border border-white/10 p-4 transition overflow-hidden"
            style={{
              backgroundImage:
                "radial-gradient(circle at top right, rgba(255,255,255,0.3) 0%, transparent 50%), linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backdropFilter: "blur(10px)",
            }}
          >
            <div className="flex flex-col">
              <div className="flex justify-center mb-3" key="svg-icon">
                {card.svg}
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg text-yellow-500 font-semibold">{card.title}</h3>
                <p className="font-light text-sm mt-2">{card.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsMobile;
