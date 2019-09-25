/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
siteMetadata:{
  title: 'Portfolio',
  description: 'My first gatsby built portfolio',
  author: '@JuanitaPirizadeh',
  data: {
    name: "juanita",
    age: 30,
  }
},
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-sass`,
'gatsby-plugin-styled-components',`gatsby-transformer-sharp`, `gatsby-plugin-sharp`],
}
