import React from "react";

import Panel from "./Panel/Panel";
import Selectors from "./Selectors/Selectors";


import "./VerticalSlider.css";

class VerticalSlider extends React.Component {
  render() {
    const {
      wrapperStyle,
      activeID,
      panelStyle,
      changeActive,
      sliderData,
    } = this.props;
    const style = {
      backgroundImage: wrapperStyle
    }
    return (
      <section className="wrapper" style={style}>
        <Selectors
          sliderData={sliderData}
          activeID={activeID}
          changeActive={changeActive}
        />
        <Panel
          sliderData={sliderData[activeID]}
          panelStyle={panelStyle}
        />
      </section>
    )
  }
}

export default VerticalSlider;
