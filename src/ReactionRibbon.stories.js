import React from "react";
import ReactionRibbon from "./ReactionRibbon";

export default {
  title: "Buttons/Ribbon",
  component: ReactionRibbon,
};

const exampleReactions = [
  { text: "smiley", n: 5, active: false },
  { text: "dragon", n: 16, active: false },
  { text: "exploding_head", n: 3, active: false },
  { text: "cat", n: 84, active: false },
  { text: "poop", n: 1, active: false },
];

export const Ribbon = () => <ReactionRibbon reactions={exampleReactions} />;
