import { VFC } from 'react';
import { css } from '@emotion/react';
import { graphql } from 'gatsby';
import Blogs from '../components/blogs';
import Layout from '../components/layout';
import TagBox from '../components/tag-box';

const BlogPage: VFC = ({
  data: {
    allMarkdownRemark: { tagsGroup, blogs },
  },
}) => (
  <Layout>
    <TagBox group={tagsGroup} />
    <Blogs edges={blogs} />
  </Layout>
);

export const allBlogs = graphql`
  query AllTagandBlog {
    allMarkdownRemark {
      tagsGroup: group(field: frontmatter___tags) {
        tag: fieldValue
        totalCount
      }
      blogs: edges {
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
