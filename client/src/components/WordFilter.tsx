import { FormEvent } from "react";
import { WordContext } from "../context/WordContext";

const WordFilter = () => {
  const { setLetters, setAbsentLetters, setStartsWith, setEndsWith, setPattern, setSize, fetchWords } = WordContext();

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchWords();
  }

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col items-center max-w-xl w-full gap-4 px-4 sm:px-16">
      <div className="w-full grid grid-cols-2 grid-rows-3 gap-4">
        <FormInput onChange={setLetters} placeholder="Letters..."/>
        <FormInput onChange={setAbsentLetters} placeholder="Absent Letters..."/>
        <FormInput onChange={setStartsWith} placeholder="Starts With..."/>
        <FormInput onChange={setEndsWith} placeholder="Ends With..."/>
        <FormInput onChange={setPattern} placeholder="Pattern..."/>
        <FormInput onChange={setSize} type="number" placeholder="Size..."/>
      </div>
      <button className="bg-[#29C9E8] hover:bg-[#29c8e8c6] w-full max-w-60 rounded-2xl py-3 text-[#111827]" type="submit">Search!</button>
    </form>
  );
};

interface InputProps {
  placeholder: string;
  type?: string;
  onChange: (value: string) => void;
}

const FormInput: React.FC<InputProps> = ({ placeholder, type, onChange }) => {
  return (
    <input
      className="border border-[#29C9E8] rounded-2xl bg-[#24334E] px-4 py-3"
      placeholder={placeholder}
      type={type || "text"}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default WordFilter;
