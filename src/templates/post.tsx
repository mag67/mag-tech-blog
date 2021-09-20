import { VFC } from 'react';
import { css } from '@emotion/react';
import { graphql, PageProps } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Tags from '../components/tags';
import Layout from '../components/layout';

const PostPage: VFC<PageProps<GatsbyTypes.AllPostPageQuery>> = ({ data }) => (
  <Layout>
    <div css={[flame, isFlexed]}>
      <h1>{data?.markdownRemark?.frontmatter?.title && ''}</h1>
      <Tags tagNames={data?.markdownRemark?.frontmatter?.tags} />
      <GatsbyImage
        image={getImage(
          data?.markdownRemark?.frontmatter?.image?.childrenImageSharp[0],
        )}
        alt={data?.markdownRemark?.frontmatter?.imageAlt}
        css={img}
      />

      {/* eslint-disable react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: data?.markdownRemark?.html }} />
    </div>
  </Layout>
);

export const query = graphql`
  query AllPostPage($slug: String!) {
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
        imageAlt
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
