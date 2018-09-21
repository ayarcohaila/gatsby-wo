import React from "react";
import Slider from "react-slick";

import ViewButton from '../../components/ViewButton/ViewButton';
import icon from "../../../static/assets/icon.svg";
import './Topic.css';

class Topic extends React.Component {
  render () {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
    };
    const { images, topic, title, description } = this.props;
    return (
      <div className="topic">
        <Slider {...settings}>
          {images.map(item => (
            <div className="topic-image" key={item}>
              <img src={item} alt="topic" />
            </div>
          ))}
        </Slider>
        <div className="topic-content">
          <div className="topic-name">
            <img src={icon} alt="icon" />
            <div>{topic}</div>
          </div>
          <h2>{title}</h2>
          <div className="topic-description">{description}</div>
          <ViewButton text="VIEW TRIP" />
        </div>
      </div>
    );
  }
}

export default Topic;
