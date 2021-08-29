module.exports = {
  siteMetadata: {
    siteUrl: 'https://mag67.github.io/mag-tech-blog/',
    title: 'mag-tech-blog',
    description: 'Japanese Tech and Sweets Lover Engineer Blog',
  },
  plugins: [
    'gatsby-plugin-gatsby-cloud',
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet-async`,
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `images`,
        path: path.join(__dirname, `static`, `images`),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    'gatsby-plugin-mdx',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-typegen',
      options: {
        outputPath: `src/__generated__/gatsby-types.d.ts`,
      },
    },
  ],
  pathPrefix: '/mag-tech-blog',
};
