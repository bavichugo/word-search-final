export const TOOLTIP_CONTENT = {
  ["Letters"]: [
    {
      type: "span",
      content: "Find words containing specified letters",
    },
    {
      type: "ul",
      items: ["bac → cab, cabinet"],
    },
    {
      type: "span",
      content:
        "Duplicate letters in the filter search for words with that letter repeated",
    },
    {
      type: "ul",
      items: ["dd → ridden, faded", "aaa → banana, alaska"],
    },
  ],
  ["Absent Letters"]: [
    {
      type: "span",
      content: "Find words that do not containing specified letters",
    },
    {
      type: "ul",
      items: ["a → hello, girl", "egh → word, floor"],
    },
  ],
  ["Starts With"]: [
    {
      type: "span",
      content: "Find words that start with specified letters",
    },
    {
      type: "ul",
      items: ["a → after, ant", "he → hello, head"],
    },
  ],
  ["Ends With"]: [
    {
      type: "span",
      content: "Find words that end with specified letters",
    },
    {
      type: "ul",
      items: ["e → phone, bone", "ia → california, cafeteria"],
    },
  ],
  ["Pattern"]: [
    {
      type: "span",
      content: 'Find words using a "dot" pattern',
    },
    {
      type: "ul",
      items: [".e.lo → hello, jello", "s..ay → spray, stray"],
    },
  ],
  ["Size"]: [
    {
      type: "span",
      content: "Find words that have a specific size",
    },
    {
      type: "ul",
      items: ["4 → acre, main", "6 → manner, dagger"],
    },
  ],
};
