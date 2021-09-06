const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMarkdownRemark {
        tagsGroup: group(field: frontmatter___tags) {
          tag: fieldValue
        }
        postsRemark: nodes {
          id
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  // pages
  result.data.allMarkdownRemark.postsRemark.forEach(
    ({ frontmatter: { slug } }) => {
      createPage({
        path: slug,
        component: path.resolve(`./src/templates/post.tsx`),
        context: {
          slug: slug,
        },
      });
    },
  );

  // tags
  result.data.allMarkdownRemark.tagsGroup.forEach(({ tag }) => {
    createPage({
      path: `blog/tags/${tag}`,
      component: path.resolve('./src/templates/tag.tsx'),
      context: { tag: tag },
    });
  });
};
