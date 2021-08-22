import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

const BlogPage = ({ data }) => (
  <Layout pageTitle="My Blog Posts">
    {data.allMdx.nodes.map((node) => (
      <section key={node.id}>
        <h2>{node.frontmatter.title}</h2>
        <p>Posted: {node.frontmatter.date}</p>
        <MDXRenderer>{node.body}</MDXRenderer>
      </section>
    ))}
  </Layout>
);

export const query = graphql`
  query {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        body
      }
    }
  }
`;

export default BlogPage;
