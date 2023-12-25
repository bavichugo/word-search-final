import { FormEvent } from "react";
import { WordContext } from "../context/WordContext";
import useFilter from "../hooks/useFilter";
import { useTranslation } from "react-i18next";

const WordFilter = () => {
  const { fetchWords, resetFilter, words } = WordContext();
  const filterState = useFilter();
  const { t } = useTranslation();

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchWords(filterState.filter);
  };

  const onResetHandler = () => {
    filterState.resetFilter();
    resetFilter();
  };

  return (
    <div className="flex flex-col w-full gap-4">
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col items-center max-w-xl w-full gap-4 m-auto px-4 sm:px-16"
      >
        <div className="w-full grid grid-cols-2 grid-rows-3 gap-4">
          <FormInput
            value={filterState.letters}
            onChange={filterState.setLetters}
            placeholder={t("letters_filter")}
          />
          <FormInput
            value={filterState.absentLetters}
            onChange={filterState.setAbsentLetters}
            placeholder={t("absent_letters_filter")}
          />
          <FormInput
            value={filterState.startsWith}
            onChange={filterState.setStartsWith}
            placeholder={t("starts_with_filter")}
          />
          <FormInput
            value={filterState.endsWith}
            onChange={filterState.setEndsWith}
            placeholder={t("ends_with_filter")}
          />
          <FormInput
            value={filterState.pattern}
            onChange={filterState.setPattern}
            placeholder={t("pattern_filter")}
          />
          <FormInput
            value={filterState.size}
            onChange={filterState.setSize}
            type="number"
            placeholder={t("size_filter")}
          />
        </div>
        <button
          className="bg-[#29C9E8] hover:bg-[#29c8e8c6] w-full max-w-60 rounded-2xl py-3 text-[#111827]"
          type="submit"
        >
          {t("search_filter")}
        </button>
      </form>
      {!!words.length && (
        <button
          onClick={onResetHandler}
          className="bg-[#29C9E8] hover:bg-[#29c8e8c6] text-[#111827] w-fit rounded-full px-6 py-1"
        >
          {t("reset_filter")}
        </button>
      )}
    </div>
  );
};

interface InputProps {
  placeholder: string;
  type?: string;
  onChange: (value: string) => void;
  value: string;
}

const FormInput: React.FC<InputProps> = ({
  placeholder,
  type,
  onChange,
  value,
}) => {
  return (
    <input
      className="border border-[#29C9E8] rounded-2xl bg-[#24334E] px-4 py-3"
      placeholder={placeholder}
      type={type || "text"}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default WordFilter;
