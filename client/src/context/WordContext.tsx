import { ReactNode, createContext, useContext, useState } from "react";
import { IFilter } from "../hooks/useFilter";

interface AppContextType {
  words: string[];
  setLanguage: (language: string) => void;
  fetchWords: (filterObj: IFilter) => void;
  resetFilter: () => void;
}

const AppContext = createContext<AppContextType>({
  words: [],
  setLanguage: () => {},
  fetchWords: () => {},
  resetFilter: () => {}
});

export const WordsContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<string>("ENGLISH");
  const [words, setWords] = useState<string[]>([]);

  const fetchWords = async (filterObj: IFilter) => {
    try {
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

  const resetFilter = () => {
    setWords([]);
  }

  return (
    <AppContext.Provider
      value={{
        words,
        setLanguage,
        fetchWords,
        resetFilter
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const WordContext = () => {
  return useContext(AppContext);
};
