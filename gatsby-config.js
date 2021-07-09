
// Get the data from the .env file which holds Secret keys.
require('dotenv').config();

module.exports = {
  siteMetadata: {
    siteUrl: "https://michaeldutoit.netlify.app",
    title: "Michael du Toit Portfolio",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.CONTENTFUL_ACCESSTOKEN,
        spaceId: process.env.CONTENTFUL_SPACEID
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp"
  ],
};
