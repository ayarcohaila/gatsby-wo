import React from "react";

import "./Article.css";

class Article extends React.Component {
  render() {
    const { imgUrl, title } = this.props;
    return (
      <div className="article">
        <img src={imgUrl} alt="article" />
        <div className="article-description">
          <h3>{title}</h3>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing
            elit quisque congue massa quis nisi vehicula
          </span>
          <button>READ</button>
        </div>
      </div>
    );
  }
}

export default Article;
