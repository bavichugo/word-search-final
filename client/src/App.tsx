import NavBar from "./components/NavBar";
import WordDisplay from "./components/WordDisplay";
import WordFilter from "./components/WordFilter";
import { WordContext } from "./context/WordContext";

const App = () => {
  const { words } = WordContext();

  return (
    <div className="h-full w-full bg-[#111827] flex flex-col items-center gap-4 px-2 sm:px-4">
      <NavBar />
      <span className="text-lg">Use the filters to find your word!</span>
      <WordFilter />
      {!!words.length && <WordDisplay />}
    </div>
  );
}

export default App;
