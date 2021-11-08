/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-react-helmet`, //追加
    {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `GatsbyTest`,
      short_name: `GatsbyTest`,
      start_url: `/`,
      background_color: `yellow`,
      theme_color: `yellow`,
      display: `standalone`,
      icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@src": "src",
          "@components": "src/components",
        },
        extensions: ["js", "jsx"],
      }

    },
  ],
}
