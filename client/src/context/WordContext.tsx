import { ReactNode, createContext, useContext, useState } from "react";

interface AppContextType {
  words: string[];
  setLanguage: (language: string) => void;
  setLetters: (letters: string) => void;
  setAbsentLetters: (absetLetters: string) => void;
  setStartsWith: (startsWith: string) => void;
  setEndsWith: (endsWith: string) => void;
  setPattern: (pattern: string) => void;
  setSize: (size: string) => void;
  fetchWords: () => void;
}

const AppContext = createContext<AppContextType>({
  words: [],
  setLanguage: () => {},
  setLetters: () => {},
  setAbsentLetters: () => {},
  setStartsWith: () => {},
  setEndsWith: () => {},
  setPattern: () => {},
  setSize: () => {},
  fetchWords: () => {},
});

export const WordsContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<string>("ENGLISH");
  const [letters, setLetters] = useState<string>("");
  const [absentLetters, setAbsentLetters] = useState<string>("");
  const [startsWith, setStartsWith] = useState<string>("");
  const [endsWith, setEndsWith] = useState<string>("");
  const [pattern, setPattern] = useState<string>("");
  const [size, setSize] = useState<string>("");
  const [words, setWords] = useState<string[]>([]);

  const fetchWords = async () => {
    try {
      const filterObj = {
        ...(letters && {letters}),
        ...(absentLetters && {absentLetters}),
        ...(startsWith && {startsWith}),
        ...(endsWith && {endsWith}),
        ...(pattern && {pattern}),
        ...(size && {size})
      }

      let filter: string = "";

      for (const [key, value] of Object.entries(filterObj)) {
        filter += `&${key}=${value}`;
      }

      const response = await fetch(
        `http://localhost:3000/api/words?language=${language}${filter}`
      );

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const data = await response.json();
      setWords(data);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
      console.log(error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        words,
        setLanguage,
        setLetters,
        setAbsentLetters,
        setStartsWith,
        setEndsWith,
        setPattern,
        setSize,
        fetchWords,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const WordContext = () => {
  return useContext(AppContext);
};
