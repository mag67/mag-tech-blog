import { VFC } from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from '../components/layout';
import Posts from '../components/posts';

const tagName: ({
  pageContext: { tag },
}: {
  pageContext: { tag: string };
}) => string = ({ pageContext: { tag } }) => tag;

const TagPage: VFC<PageProps<GatsbyTypes.AllTagPageQuery>> = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <Layout>
    <h1>{tagName}</h1>
    <Posts edges={edges} />
  </Layout>
);

export const query = graphql`
  query AllTagPage($tag: String!) {
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
            imageAlt
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
