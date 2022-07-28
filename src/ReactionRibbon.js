import React from "react";
import ReactionButton from "./ReactionButton";
import Picker from "emoji-picker-react";
import { emojiToName } from "gemoji";

export default class ReactionRibbon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reactions: props.reactions ? props.reactions : [],
      showPicker: false,
    };
  }

  handlePlusClick() {
    this.setState({ showPicker: !this.state.showPicker });
  }

  newReaction(emoji) {
    let name = emojiToName[emoji.emoji];
    if (
      this.state.reactions.reduce((result, item) => {
        return result || item.text === name;
      }, false)
    ) {
      return;
    }
    console.log(emoji);
    this.setState({
      reactions: [
        ...this.state.reactions,
        {
          text: name,
          n: 1,
          active: true,
        },
      ],
    });
  }

  render() {
    let picker = null;

    if (this.state.showPicker) {
      picker = <Picker onEmojiClick={(e, emoji) => this.newReaction(emoji)} />;
    }

    return (
      <div>
        {this.state.reactions.map((reaction) => (
          <ReactionButton
            reaction={reaction.text}
            n={reaction.n}
            active={reaction.active}
          />
        ))}
        <button className="button" onClick={() => this.handlePlusClick()}>
          {this.state.showPicker ? "x" : "+"}
        </button>
        {picker}
      </div>
    );
  }
}
