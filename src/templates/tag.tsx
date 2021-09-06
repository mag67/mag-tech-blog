import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Blogs from '../components/blogs';

const TagPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
  pageContext,
}) => {
  const { tag } = pageContext;
  return (
    <Layout>
      <h1>{tag}</h1>
      <Blogs edges={edges} />
    </Layout>
  );
};

export const query = graphql`
  query ($tag: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { tags: { in: [$tag] } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            tags
            slug
            image_alt
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
            description
          }
        }
      }
    }
  }
`;

export default TagPage;
