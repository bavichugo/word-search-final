import { Request, Response } from "express";
import { filterWords } from "../helper/wordsHelper";

// const filter: IFilter = {
//   letters: "",
//   absentLetters: "",
//   startsWith: "",
//   endsWith: "",
//   pattern: "",
//   size: 5,
// };

const getWords = async (req: Request, res: Response) => {
  const { language, filter, lastWord } = req.body;

  try {
    const filteredWords = await filterWords(language, filter, lastWord);
    res.status(200).json(filteredWords);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: "Internal server error" });
  }
};

export { getWords };
