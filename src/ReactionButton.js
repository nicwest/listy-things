import React from "react";
import { nameToEmoji } from "gemoji";
import "./button.css";

function color(s) {
  console.log(s);
  let h = [...s].reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc);
  }, 0);
  return `hsl(${h % 360}, 95%, 35%)`;
}

export default class ReactionButton extends React.Component {
  constructor(props) {
    super(props);
    this.reaction = props.reaction;
    this.color = color(props.reaction);
    this.callback = props.callback;
    this.state = {
      n: props.n ? props.n : 0,
      active: props.active ? props.active : false,
    };
  }

  handleClick() {
    let { n, active } = this.state;
    this.setState({
      n: active ? n - 1 : n + 1,
      active: !active,
    });
    if (this.callback) {
      this.callback(active);
    }
  }

  render() {
    let { n, active } = this.state;
    return (
      <button
        onClick={() => this.handleClick()}
        className="button reaction"
        style={active ? { borderColor: this.color } : null}
      >
        {nameToEmoji[this.reaction]} {n}
      </button>
    );
  }
}
