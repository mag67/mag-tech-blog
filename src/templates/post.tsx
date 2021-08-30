import { css } from '@emotion/react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Tags from '../components/tags';
import Layout from '../components/layout';

const PostPage = ({
  data: {
    markdownRemark: {
      html,
      frontmatter: { title, tags, image, image_alt },
    },
  },
}) => (
  <Layout>
    <div css={[flame, isFlexed]}>
      <h1>{title}</h1>
      <Tags tagNames={tags} />
      <GatsbyImage
        image={getImage(image.childrenImageSharp[0])}
        alt={image_alt}
        css={img}
      />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  </Layout>
);

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        date
        image {
          childrenImageSharp {
            gatsbyImageData
          }
        }
        tags
        title
        image_alt
        slug
      }
      html
    }
  }
`;

const flame = css`
  margin: auto;
  width: 800px;
  background-color: snow;
`;

const isFlexed = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const img = css`
  width: 400px;
`;

export default PostPage;
