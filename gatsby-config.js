module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Michael du Toit Portfolio",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken:
          "0725613dfc3fae0832de7ec5b5d63940aed45168e0df0f8b68dd38b0c0c2258a",
        spaceId: "",
      },
    },
    "gatsby-plugin-sass",
  ],
};
