import React from "react";

class Selector extends React.Component {
  handleClick = (e) => {
    const { id, activeID, changeActive } = this.props;
    if (id !== activeID) {
      changeActive(id);
    }
    return '';
  }

  render() {
    const { activeID, id } = this.props;
    let componentClass = "selector";
    if (activeID === id) {
      componentClass = "selector active";
    }
    return (
      <div
        tabIndex="0"
        role="button"
        className={componentClass}
        onClick={this.handleClick}
      />
    );
  }
}

export default Selector;
