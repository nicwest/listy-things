import "./ListItem.css";
import { nameToEmoji } from "gemoji";
export default function ListItem(props) {
  let image = <div>{nameToEmoji["disappointed"]}</div>;
  if (props.image) {
    image = <img alt={props.title} src={props.image} />;
  }
  return (
    <li className="itemContainer">
      <div className="number">{props.number ? props.number : "?"}.</div>
      <div className="image">{image}</div>
      <div className="textContainer">
        <div className="title">{props.title ? props.title : "???"}</div>
        <div className="subtitle">
          {props.subtitle ? props.subtitle : "???"}
        </div>
      </div>
    </li>
  );
}
