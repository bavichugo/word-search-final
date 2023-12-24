import { WordContext } from "../context/WordContext";

const WordDisplay = () => {
  const { words } = WordContext();

  return (
    <div className="flex flex-wrap gap-4 border border-[#29C9E8] rounded-xl justify-center p-4">
      {words.map((word) => (
        <span key={word} className="bg-[#24334E] px-4 py-2 rounded-lg">{word}</span>
      ))}
    </div>
  );
};

export default WordDisplay;
