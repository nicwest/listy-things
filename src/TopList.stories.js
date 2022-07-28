import React from "react";
import TopList from "./TopList";

export default {
  title: "Lists/Top List",
  component: TopList,
};

const exampleReactions = [
  { text: "smiley", n: 5, active: false },
  { text: "dragon", n: 16, active: false },
  { text: "exploding_head", n: 3, active: false },
  { text: "cat", n: 84, active: false },
  { text: "poop", n: 1, active: false },
];

export const List = () => (
  <TopList
    title={["cd", "metal"]}
    user={{ link: "https://example.com/user123", displayName: "Bobo" }}
    items={[
      {
        title: "Stranger than Fiction",
        subtitle: "Bad Religion",
        image:
          "https://m.media-amazon.com/images/I/71YiIpcCObL._AC_UY436_QL65_.jpg",
      },
      {
        title: "Vol. 3: (The Subliminal Verses)",
        subtitle: "Slipknot",
        image:
          "https://m.media-amazon.com/images/I/81fezAtp+pL._AC_SL1419_.jpg",
      },
      {
        title: "Apex",
        subtitle: "Unleash the Archers",
        image:
          "https://m.media-amazon.com/images/I/91ZXJfzfkLL._AC_SL1500_.jpg",
      },
      {
        title: "It's Five O'clock Somewhere",
        subtitle: "Slash's Snakepit",
        image:
          "https://m.media-amazon.com/images/I/815696heELL._AC_SL1400_.jpg",
      },
      {
        title: "Mutter",
        subtitle: "Rammstein",
        image:
          "https://m.media-amazon.com/images/I/819wdCpxzyL._AC_SL1400_.jpg",
      },
    ]}
    reactions={exampleReactions}
  />
);
