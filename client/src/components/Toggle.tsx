// src/components/Toggle.tsx
import React, { useState } from 'react';

interface ToggleProps {
  onToggle: (value: boolean) => void;
  initialState?: boolean;
}

const Toggle: React.FC<ToggleProps> = ({ onToggle, initialState = false }) => {
  const [isToggled, setToggled] = useState(initialState);

  const handleToggle = () => {
    setToggled(!isToggled);
    onToggle(!isToggled);
  };

  return (
    <div
      className={`w-12 h-6 flex items-center cursor-pointer ${
        isToggled ? 'bg-blue-600' : 'bg-gray-500'
      } rounded-full p-1`}
      onClick={handleToggle}
    >
      <div
        className={`w-4 h-4 bg-white rounded-full transition-transform ${
          isToggled ? 'transform translate-x-6' : ''
        }`}
      ></div>
    </div>
  );
};

export default Toggle;