import * as React from 'react';
import { Link, graphql, PageProps } from 'gatsby';
import Layout from '../../components/layout';

const BlogPage: React.VFC<PageProps<GatsbyTypes.allBlogPageQuery>> = ({
  data,
}) => (
  <Layout pageTitle="My Blog Posts">
    {data.allMdx.nodes.map((node: any) => (
      <article key={node.id}>
        <h2>
          <Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
        </h2>
        <p>Posted: {node.frontmatter.date}</p>
      </article>
    ))}
  </Layout>
);

export const query = graphql`
  query allBlogPage {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`;

export default BlogPage;
