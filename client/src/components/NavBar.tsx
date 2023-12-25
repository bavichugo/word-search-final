import { useState } from "react";
import Toggle from "./Toggle";
import Select from "./Select";
import { WordContext } from "../context/WordContext";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const [isToggled, setIsToggled] = useState(false);
  const { setLanguage } = WordContext();
  const { t } = useTranslation();

  const selectOptions = [
    { value: "ENGLISH", i18nlanguage: "en", label: "🇺🇸" },
    { value: "PORTUGUESE", i18nlanguage: "pt", label: "🇧🇷" },
  ];

  const handleToggle = (value: boolean) => {
    setIsToggled(value);
  };

  const handleSelect = (selectedValue: string) => {
    setLanguage(selectedValue);
  };

  return (
    <div className="flex justify-between w-full h-16 items-center">
      <span>{t('website_name')}</span>
      <div className="flex gap-2 sm:gap-4">
        <div className="flex gap-2 sm:gap-4 items-center">
          <span>{t('tips')}</span>
          <Toggle onToggle={handleToggle} initialState={isToggled} />
        </div>
        <div className="flex gap-2 sm:gap-4 items-center">
          <span>{t('language')}</span>
          <Select options={selectOptions} onChange={handleSelect} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
