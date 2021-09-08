import { VFC } from 'react';
import { graphql, PageProps } from 'gatsby';
import Posts from '../components/posts';
import Layout from '../components/layout';
import TagBox from '../components/tag-box';

const BlogPage: VFC<PageProps<GatsbyTypes.PostIndexQuery>> = ({
  data: {
    allMarkdownRemark: { tagsGroup, blogs },
  },
}) => (
  <Layout>
    <TagBox group={tagsGroup} />
    <Posts edges={blogs} />
  </Layout>
);

export const allBlogs = graphql`
  query PostIndex {
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
