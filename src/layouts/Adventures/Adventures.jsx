import React from "react";

import Adventure from "../../components/Adventure/Adventure";
import { adventures } from "../../../data/SiteConfig";

import advantureIcon from "../../../static/assets/adventures/adventure_icon.svg";
import './Adventures.css';

class Adventures extends React.Component {
  render() {
    return (
      <div className="adventures">
        <div className="adventures-header">
          <div className="adventures-header-title">
            <img src={advantureIcon} alt="advanture icon" />
            <h2>Your Next Adventure</h2>
          </div>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing<br />
            elit quisque congue massa quis nisi vehicula
          </span>
        </div>
        <div className="adventures-content">
          {Object.values(adventures).map(item => (
            <Adventure
              key={item}
              imgUrl={item}
              title="Beach"
              description="something something"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Adventures;
