import { VFC } from 'react';
import { css } from '@emotion/react';
import { graphql } from 'gatsby';
import Blogs from '../components/blogs';
import Layout from '../components/layout';

const BlogPage: VFC = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <Layout>
    <div>タグ一覧</div>
    <Blogs edges={edges} />
  </Layout>
);

export const allBlogs = graphql`
  query AllBlogs {
    allMarkdownRemark(
      sort: { fields: id, order: ASC }
      filter: { frontmatter: { tags: { in: "blog" } } }
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "YYYY/MM/DD")
            description
            slug
            tags
            title
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`;

export default BlogPage;
