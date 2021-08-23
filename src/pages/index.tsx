import React from 'react';
import { Link, graphql, PageProps } from 'gatsby';
import Layout from '../components/layout';

const IndexPage: React.VFC<
  PageProps<GatsbyTypes.allBlogOrderedByDateDescQuery>
> = ({ data }) => (
  <Layout pageTitle="Home Page">
    {data.allMdx.nodes.map((node) => (
      <article key={node.id}>
        <h2>
          <Link to={`/blog/${node.slug}`}>{node?.frontmatter?.title}</Link>
        </h2>
        <p>Posted: {node?.frontmatter?.date}</p>
      </article>
    ))}
  </Layout>
);

export const query = graphql`
  query allBlogOrderedByDateDesc {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        body
        slug
      }
    }
  }
`;

export default IndexPage;
