import React from "react";
import { nameToEmoji } from "gemoji";
import "./EmojiTitle.css";
import "./button.css";

export default class EmojiTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title ? props.title : [null, null, null],
    };
  }

  handleClick(e, i) {}

  render() {
    return (
      <div>
        <div>
          {this.state.title.map((item, i) => {
            return (
              <button
                className="button emojiTitle"
                onClick={(e) => this.handleClick(e, i)}
              >
                {item ? nameToEmoji[item] : " "}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}
