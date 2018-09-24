import React from "react";

import days from "../../../../static/assets/days.svg";
import us from "../../../../static/assets/us.svg";

class Panel extends React.Component {
  render() {
    const { sliderData } = this.props;
    return (
      <aside className="panel">
        <div className="tags">
          <div>
            <img src={days} alt="days" />
            <span>5 Days</span>
          </div>
          <div>
            <img src={us} alt="us" />
            <span>United States</span>
          </div>
        </div>
        <h2 className="panel-header">{sliderData.header}</h2>
        <div className="cashAmount">$ 1,100</div>
        <p className="panel-info">{sliderData.body}</p>
        <button className="panel-button">
          Read More
        </button>
      </aside>
    );
  }
}

export default Panel;
