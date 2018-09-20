import React from 'react';

import config from "../../../data/SiteConfig";
import ActivityPanel from '../../components/ActivityPanel/ActivityPanel';

import './Activities.css';

class Activities extends React.Component {
  render() {
    const { activities } = config;
    const activitieNames = ['Mountain', 'Beach', 'City', 'Sports', 'Camping'];
    return (
      <div className="activitie-layout">
        <h1>
          We have 4,405 activities planed for you
        </h1>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit quisque congue massa quis nisi vehicula
        </span>

        <div className="activities">
          {activitieNames.map(item => (
            <ActivityPanel
              key={item}
              imgUrl={activities[item]}
              activitieName={item}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Activities;
