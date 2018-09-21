import React, { Component } from "react";
import "./MenuButton.css";

class MenuButton extends Component {
  render() {
    const { text } = this.props;
    return (
      <a className="menu-button icon-menu" href="#menu">
        <span className="word">{text}</span>
      </a>
    );
  }
}

export default MenuButton;
