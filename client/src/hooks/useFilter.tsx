import { useState, useCallback } from "react";

export type IFilter = {
  letters?: string;
  absentLetters?: string;
  startsWith?: string;
  endsWith?: string;
  pattern?: string;
  size?: string;
}

const useFilter = () => {
  const [letters, setLetters] = useState<string>("");
  const [absentLetters, setAbsentLetters] = useState<string>("");
  const [startsWith, setStartsWith] = useState<string>("");
  const [endsWith, setEndsWith] = useState<string>("");
  const [pattern, setPattern] = useState<string>("");
  const [size, setSize] = useState<string>("");

  const resetFilter = useCallback(() => {
    setLetters("");
    setAbsentLetters("");
    setStartsWith("");
    setEndsWith("");
    setPattern("");
    setSize("");
  }, []);

  const filter: IFilter = {
    ...(letters && { letters }),
    ...(absentLetters && { absentLetters }),
    ...(startsWith && { startsWith }),
    ...(endsWith && { endsWith }),
    ...(pattern && { pattern }),
    ...(size && { size }),
  };

  return {
    filter,
    letters,
    setLetters,
    absentLetters,
    setAbsentLetters,
    startsWith,
    setStartsWith,
    endsWith,
    setEndsWith,
    pattern,
    setPattern,
    size,
    setSize,
    resetFilter,
  };
};

export default useFilter;
