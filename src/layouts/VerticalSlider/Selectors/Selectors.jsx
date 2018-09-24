import React from "react";

import Selector from "./Selector";
import upArrow from "../../../../static/assets/up.svg";
import downArrow from "../../../../static/assets/down.svg";

class Selectors extends React.Component {
  handleUpDownClick = (actionName) => () => {
    const { activeID, changeActive } = this.props;
    if (actionName === "up") {
      changeActive(activeID === 0 ? 4 : activeID - 1);
    } else {
      changeActive(activeID === 4 ? 0 : activeID + 1);
    }
    return '';
  }
  render() {
    const { sliderData, changeActive, activeID } = this.props;
    return (
      <div className="selectors">
        <button className="upSlideButton" onClick={this.handleUpDownClick("up")}>
          <img src={upArrow} alt="up" />
        </button>
        {sliderData.map((item) => (
          <Selector
            key={item.id}
            id={item.id}
            value={item.id}
            handleClick={this.handleClick}
            changeActive={changeActive}
            activeID={activeID}
          />
        ))}
        <button className="downSlideButton" onClick={this.handleUpDownClick("down")}>
          <img src={downArrow} alt="down" />
        </button>
      </div>
    );
  }
}

export default Selectors;
