import React from "react";

import './Adventure.css';

class Adventure extends React.Component {
  render() {
    const { imgUrl, title, description } = this.props
    return (
      <div className="adventure">
        <img src={imgUrl} alt="adventure" />
        <div className="adventure-description">
          <h3>{title}</h3>
          <span>{description}</span>
        </div>
      </div>
    );
  }
}

export default Adventure;
