import React, { Component } from "react";
import "./ViewButton.css";

class ViewButton extends Component {
  render() {
    const { text, onClick } = this.props;
    return (
      <button className="view-button" onClick={onClick}>{text}</button>
    );
  }
}

export default ViewButton;
