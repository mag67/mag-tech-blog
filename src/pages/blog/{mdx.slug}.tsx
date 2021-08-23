import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../../components/layout';

const BlogPost: React.VFC<PageProps<GatsbyTypes.blogInfoQuery>> = ({
  data,
}) => {
  // TODO: childrenImageSharpが配列になってしまいgetImageできないので修正
  const alt = data?.mdx?.frontmatter?.hero_image_alt || '';
  const title = data?.mdx?.frontmatter?.title || '';
  const contents = data?.mdx?.body || '';
  const img: any =
    data?.mdx?.frontmatter?.hero_image?.childrenImageSharp?.[0]
      ?.gatsbyImageData;

  return (
    <Layout pageTitle={title}>
      <p>Posted: {data?.mdx?.frontmatter?.date}</p>
      <GatsbyImage image={img} alt={alt} />
      <p>
        Photo Credit:{' '}
        <a href={data?.mdx?.frontmatter?.hero_image_credit_link}>
          {data?.mdx?.frontmatter?.hero_image_credit_text}
        </a>
      </p>

      <MDXRenderer>{contents}</MDXRenderer>
    </Layout>
  );
};

export const query = graphql`
  query blogInfo($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childrenImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`;

export default BlogPost;
