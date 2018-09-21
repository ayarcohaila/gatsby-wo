import React from 'react';

import './ActivityPanel.css';

class ActivityPanel extends React.Component {
  render() {
    const { imgUrl, activitieName } = this.props;
    return (
      <div className="activity-panel">
        <img src={imgUrl} alt="activitie icon" />
        <div>{activitieName}</div>
      </div>
    );
  }
}

export default ActivityPanel;
