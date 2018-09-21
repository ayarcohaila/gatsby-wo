import React from "react";

import { destinations } from "../../../data/SiteConfig";
import Topic from "../../components/Topic/Topic";
import './Destinations.css';

class Destinations extends React.Component {
  render () {
    return (
      <div className="destinations">
        {Object.values(destinations).map(item => (
          <Topic
            key={item.title}
            images={item.images}
            topic={item.topic}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    );
  }
}

export default Destinations;
