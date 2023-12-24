// Tooltip.tsx
import React, { useState } from 'react';

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const handleTooltipToggle = () => {
    setTooltipVisible(!isTooltipVisible);
  };

  return (
    <div className="relative inline-block">
      <button
        className="hover:bg-gray-200 px-2 py-1 rounded"
        onMouseEnter={handleTooltipToggle}
        onMouseLeave={handleTooltipToggle}
      >
        {children}
      </button>
      {isTooltipVisible && (
        <div className="absolute z-10 p-2 bg-gray-800 text-white rounded mt-2">
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
