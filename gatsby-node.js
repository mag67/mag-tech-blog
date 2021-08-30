const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  result.data.allMarkdownRemark.nodes.forEach(({ frontmatter: { slug } }) => {
    createPage({
      path: slug,
      component: path.resolve(`./src/templates/post.tsx`),
      context: {
        slug: slug,
      },
    });
  });
};
