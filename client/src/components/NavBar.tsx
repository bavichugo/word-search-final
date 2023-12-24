import { useState } from "react";
import Toggle from "./Toggle";
import Select from "./Select";
import { WordContext } from "../context/WordContext";



const NavBar = () => {
  const [isToggled, setIsToggled] = useState(false);
  const { setLanguage } = WordContext();

  const selectOptions = [
    { value: "ENGLISH", label: "🇺🇸" },
    { value: "PORTUGUESE", label: "🇧🇷" },
  ];

  const handleToggle = (value: boolean) => {
    setIsToggled(value);
  };

  const handleSelect = (selectedValue: string) => {
    setLanguage(selectedValue);
  };

  return (
    <div className="flex justify-between w-full h-16 items-center">
      <span>Word Search 💬</span>
      <div className="flex gap-2 sm:gap-4">
        <div className="flex gap-2 sm:gap-4 items-center">
          <span>Tips</span>
          <Toggle onToggle={handleToggle} initialState={isToggled} />
        </div>
        <div className="flex gap-2 sm:gap-4 items-center">
          <span>Language</span>
          <Select options={selectOptions} onChange={handleSelect} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
