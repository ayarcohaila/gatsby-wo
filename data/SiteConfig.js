module.exports = {
  blogPostDir: "sample-posts", // The name of directory that contains your posts.
  blogAuthorDir: "sample-authors", // The name of directory that contains your 'authors' folder.
  blogAuthorId: "casper", // The default and fallback author ID used for blog posts without a defined author.
  siteTitle: "Himalayan Villages Cultural Exploration", // Site title.
  siteTitleAlt: "GatsbyJS Casper Theme Starter", // Alternative site title for SEO.
  siteLogo:
    "/assets/LOGO.svg", // Logo used for SEO and manifest. e.g. "/logos/logo-1024.png",
  // siteUrl: "https://haysclark.github.io", // Domain of your website without pathPrefix.
  pathPrefix: "/gatsby-starter-casper", // Prefixes all links. For cases when deployed to example.github.io/gatsby-starter-casper/.
  siteDescription:
    "A Casper themed GatsbyJS stater based on the Advanced Starter.", // Website description used for RSS feeds/meta description tag.
  siteCover:
    "/assets/background.svg", // Optional, the cover image used in header for home page. e.g: "/images/blog-cover.jpg",
  siteNavigation: true, // If navigation is enabled the Menu button will be visible
  // siteRss: "/rss.xml", // Path to the RSS file.
  siteRssAuthor: "Casper User", // The author name used in the RSS file
  // siteFBAppID: "1825356251115265", // optional, sets the FB Application ID for using app insights
  sitePaginationLimit: 10, // The max number of posts per page.
  googleAnalyticsID: "UA-111982167-1", // GA tracking ID.
  // disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter", // enables Disqus comments, visually deviates from original Casper theme.
  // siteSocialUrls: [
  //   "https://github.com/haysclark/gatsby-starter-casper",
  //   "https://twitter.com/gatsbyjs",
  //   "mailto:gatsbyjs@example.com"
  // ],
  postDefaultCategoryID: "Tech", // Default category for posts.
  // Links to social profiles/projects you want to display in the navigation bar.
  // userLinks: [
  //   {
  //     label: "GitHub",
  //     url: "https://github.com/haysclark/gatsby-starter-casper",
  //     iconClassName: "fa fa-github" // Disabled, see Navigation.jsx
  //   },
  //   {
  //     label: "Twitter",
  //     url: "https://twitter.com/gatsbyjs",
  //     iconClassName: "fa fa-twitter" // Disabled, see Navigation.jsx
  //   },
  //   {
  //     label: "Email",
  //     url: "mailto:gatsbyjs@example.com",
  //     iconClassName: "fa fa-envelope" // Disabled, see Navigation.jsx
  //   }
  // ],
  // Copyright string for the footer of the website and RSS feed.
  copyright: {
    label: "Gatsby Casper Starter" // Label used before the year
    // year: "2018" // optional, set specific copyright year or range of years, defaults to current year
    // url: "https://www.gatsbyjs.org/" // optional, set link address of copyright, defaults to site root
  },
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
  promoteGatsby: true, // Enables the GatsbyJS promotion information in footer.

  activities: {
    Mountain: "/assets/activities/Mountain.svg",
    Beach: "/assets/activities/Beach.svg",
    City: "/assets/activities/City.svg",
    Sports: "/assets/activities/Sports.svg",
    Camping: "/assets/activities/Camping.svg",
  },
  destinations: {
    1: {
      images: [
          "/assets/destinations/destinations1.svg",
          "/assets/destinations/destinations2.svg",
          "/assets/destinations/destinations3.svg",
        ],
      topic: "ASIA",
      title: "Discover Asia",
      description: "Its beautiful.",
    },
    2: {
      images: [
          "/assets/destinations/destinations4.svg",
          "/assets/destinations/destinations5.svg",
          "/assets/destinations/destinations6.svg",
        ],
      topic: "FEATURED ACTIVITIES",
      title: "Adventure with friends",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue massa quis nisi vehicula, dictum fermentum dolor vestibulum. Morbi pulvinar sapien feugiat, blandit justo quis, dapibus nibh.",
    },
  },
  adventures: {
    1: "/assets/adventures/image1.svg",
    2: "/assets/adventures/image2.svg",
    3: "/assets/adventures/image3.svg",
    4: "/assets/adventures/image4.svg",
    5: "/assets/adventures/image5.svg",
    6: "/assets/adventures/image6.svg",
  },
  articles: {
    1: "/assets/articles/article1.svg",
    2: "/assets/articles/article2.svg",
    3: "/assets/articles/article3.svg",
    4: "/assets/articles/article4.svg",
  },
  community: {
    1: "/assets/community/question1.svg",
    2: "/assets/community/question2.svg",
    3: "/assets/community/question3.svg",
    4: "/assets/community/question4.svg",
  },

  sliderData: [
    {
      id: 0,
      header: 'Himalayan Villages Cultural Exploration',
      body: 'per person',
      color: '#242846',
      img: '/assets/background.svg'
    }, {
      id: 1,
      header: 'Himalayan Villages Cultural Exploration',
      body: 'Himalayan Villages Cultural Exploration',
      color: '#ba9077',
      img: '/assets/background2.svg'
    }, {
      id: 2,
      header: 'Himalayan Villages Cultural Exploration',
      body: 'per person',
      color: '#1ABC9C',
      img: '/assets/background.svg'
    }, {
      id: 3,
      header: 'Himalayan Villages Cultural Exploration',
      body: 'per person',
      color: '#C0392B',
      img: '/assets/background2.svg'
    }, {
      id: 4,
      header: 'Himalayan Villages Cultural Exploration',
      body: 'per person',
      color: '#513B56',
      img: '/assets/background.svg'
    }
  ],
};
