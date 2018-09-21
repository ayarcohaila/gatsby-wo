import React from "react";

import Article from "../../components/Article/Article";
import { articles } from "../../../data/SiteConfig";
import articleHeaderIcon from "../../../static/assets/articles/article_header_icon.svg"
import './Articles.css';

class Articles extends React.Component {
  render() {
    return (
      <div className="articles">
        <div className="articles-header">
          <div className="articles-header-title">
            <img src={articleHeaderIcon} alt="header icon" />
            <h3>Recommended readings</h3>
          </div>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing<br />
            elit quisque congue massa quis nisi vehicula
          </span>
        </div>
        <div className="article-content">
          {Object.values(articles).map(item => (<Article imgUrl={item} title="Title Article" />))}
        </div>
      </div>
    );
  }
}

export default Articles;
