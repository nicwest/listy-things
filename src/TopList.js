import ListItem from "./ListItem";
import ReactionRibbon from "./ReactionRibbon";
import { nameToEmoji } from "gemoji";
import "./TopList.css";

export default function TopList(props) {
  return (
    <div className="topList">
      <h1>
        Top {props.items.length} {props.title.map((part) => nameToEmoji[part])}
      </h1>
      <strong>
        <a href={props.user.link}>{props.user.display_name}</a>
      </strong>
      <ol>
        {props.items.map((item, i) => (
          <ListItem number={i + 1} {...item} />
        ))}
      </ol>
      <ReactionRibbon reactions={props.reactions} />
    </div>
  );
}
