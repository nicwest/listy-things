import React from "react";
import ListItem from "./ListItem";

export default {
  title: "Lists/Item",
  component: ListItem,
};

export const Empty = () => <ListItem />;

export const Album = () => (
  <ol className="topList">
    <ListItem
      number={1}
      title="Stranger than Fiction"
      subtitle="Bad Religion"
      image="https://m.media-amazon.com/images/I/71YiIpcCObL._AC_UY436_QL65_.jpg"
    />
  </ol>
);

export const Book = () => (
  <ol className="topList">
    <ListItem
      number={34}
      title="Eragon"
      subtitle="Christopher Paolini"
      image="https://images-na.ssl-images-amazon.com/images/I/51ig5B0fGTL._SX324_BO1,204,203,200_.jpg"
    />
  </ol>
);
