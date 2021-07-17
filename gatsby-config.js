// Get the data from the .env file which holds Secret keys.
require('dotenv').config();
// Get Autoprefixer
const autoprefixer = require('autoprefixer');

module.exports = {
  siteMetadata: {
    siteUrl: "https://michaeldutoit.netlify.app",
    description: `Michael du Toit Full Stack Developer - Crafting wonderful software solutions`,
    title: "Michael du Toit Portfolio",
    author: "Michael du Toit",
    twitterHandle: `@michaeldtdev`
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.CONTENTFUL_ACCESSTOKEN,
        spaceId: process.env.CONTENTFUL_SPACEID
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Michael Du Toit Portfolio`,
        short_name: `Michael Du Toit`,
        start_url: `/`,
        background_color: `#1f66e5`,
        theme_color: `#1f66e5`,
        display: `browser`,
        icon: `src/images/favicon-icon.png`
      }
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        postCssPlugins: [
          autoprefixer()
        ]
      }
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-remark"
  ],
};