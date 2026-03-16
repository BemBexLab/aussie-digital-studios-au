import React from 'react'
import ProcessCardsSm from './ProcessCardsSm';
import ProcessCardsMobile from './ProcessCardsMobile';

type ProcessCardsProps = {
  service: {
    processCardData?: Array<{
      image: string;
      heading: string;
      paragraph: React.ReactNode;
    }>;
  };
};

const ProcessCards = ({ service }: ProcessCardsProps) => {
  return (
    <>
      {/* Mobile View */}
      <div className="sm:hidden">
        <ProcessCardsMobile service={service} />
      </div>

      {/* SM Screen and Up View */}
      <div className="hidden sm:block">
        <ProcessCardsSm service={service} />
      </div>
    </>
  )
}

export default ProcessCards
