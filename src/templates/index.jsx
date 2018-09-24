import React from "react";
import Helmet from "react-helmet";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import Drawer from "../layouts/Drawer/Drawer";
import SiteWrapper from "../layouts/SiteWrapper/SiteWrapper";
import MainHeader from "../layouts/MainHeader/MainHeader";
import MainNav from "../layouts/MainNav/MainNav";
import BlogLogo from "../components/BlogLogo/BlogLogo";
import MenuButton from "../components/MenuButton/MenuButton";
import Activities from "../layouts/Activities/Activities";
import Destinations from "../layouts/Destinations/Destinations";
import Adventures from "../layouts/Adventures/Adventures";
import Articles from "../layouts/Articles/Articles";
import Community from "../layouts/Community/Community";
import VerticalSlider from "../layouts/VerticalSlider/VerticalSlider";


import './index.css';

class IndexTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeID: 0,
      wrapperStyle: `url('${config.sliderData[0].img}')`,
      buttonHover: false,
    }
  }

  changeActive = (id) => {
    this.setState({
      activeID: id,
      wrapperStyle: `url('${config.sliderData[id].img}')`,
      panelStyle: {
        backgroundColor: config.sliderData[id].color
      }
    });
  }

  render() {
    // const { nodes } = this.props.pathContext;
    const { wrapperStyle, activeID } = this.state;

    return (
      <Drawer className="home-template" isOpen={this.state.menuOpen}>
        {/* <Helmet title="HOME" />
        <SEO postEdges={nodes} /> */}

        <SiteWrapper>
          {/* All the main content gets inserted here */}
          <div className="home-template">
            {/* The big featured header */}
            <MainHeader cover={config.wrapperStyle}>
              <MainNav overlay={config.wrapperStyle}>
                <BlogLogo logo={config.siteLogo} title={config.siteTitle} />
                <MenuButton text="SIGN UP" />
                <MenuButton text="SIGN IN" />
                <MenuButton text="MY TRIPS" />
                <MenuButton text="COMMUNITY" />
                <MenuButton text="SPORTS" />
                <MenuButton text="BEACH" />
                <MenuButton text="MOUNTAIN" />
              </MainNav>
              <div className="vertical">
                <VerticalSlider
                  wrapperStyle={wrapperStyle}
                  activeID={activeID}
                  changeActive={this.changeActive}
                  sliderData={config.sliderData}
                />
              </div>
            </MainHeader>
            <Activities />
          </div>
          <div className="destination-content">
            <h2>
              Featured destinations
            </h2>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing<br />
              elit quisque congue massa quis nisi vehicula
            </span>
          </div>
          <Destinations />
          <Adventures />
          <Articles />
          <Community />
        </SiteWrapper>
      </Drawer>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    # posts data comes from the context
    # authors
    authors: allAuthorsJson {
      edges {
        node {
          id
          name
          image
          url
          bio
        }
      }
    }
  }
`;

export default IndexTemplate;
