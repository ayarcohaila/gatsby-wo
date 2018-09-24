import React from "react";

import Article from "../../components/Article/Article";
import { community } from "../../../data/SiteConfig";
import communityHeaderIcon from "../../../static/assets/community/community_header_icon.svg"
import './Community.css';

class Community extends React.Component {
  render() {
    return (
      <div className="community">
        <div className="community-header">
          <div className="community-header-title">
            <img src={communityHeaderIcon} alt="header icon" />
            <h3>Ask the community</h3>
          </div>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing<br />
            elit quisque congue massa quis nisi vehicula
          </span>
        </div>
        <div className="article-content">
          {Object.values(community).map(item => (
            <Article
              key={item}
              imgUrl={item}
              title="Question"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Community;
