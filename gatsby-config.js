/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Mr. Fix It LLC. | Salida Colorado's best handyman service`,
    description: `Your go to handyman for all kinds of projects. Services include general handyman, kitchen and bath, tile, panting, and carpentry.`,
    siteUrl: `https://mrfixitsalida.com/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      }
    },
    `gatsby-transformer-sharp`,
  ],
}
