import React from "react";

const Divider = () => {
  return (
    <div className="flex items-center justify-center gap-8 mt-8 px-4">
      {/* Circle 1 */}
      <div className="w-8 h-8 rounded-full border-6 border-[#4C8C74] flex-shrink-0"></div>

      {/* Dashed Line 1 */}
      <div className="flex-grow h-0.5 border-t-2 border-dashed border-[#4C8C74] max-w-xs"></div>

      {/* Circle 2 */}
      <div className="w-8 h-8 rounded-full border-6 border-[#4C8C74] flex-shrink-0"></div>

      {/* Dashed Line 2 */}
      <div className="flex-grow h-0.5 border-t-2 border-dashed border-[#4C8C74] max-w-xs"></div>

      {/* Circle 3 */}
      <div className="w-8 h-8 rounded-full border-6 border-[#4C8C74] flex-shrink-0"></div>
    </div>
  );
};

export default Divider;
