import { VFC } from 'react';
import { getImage, ImageDataLike } from 'gatsby-plugin-image';
import { css } from '@emotion/react';
import Post from './post';

type Props = {
  edges: [PostProps];
};

type PostProps = {
  node: {
    frontmatter: {
      slug: string;
      title: string;
      image: ImageDataLike | undefined;
      imageAlt: string;
      tags: [string];
      description: string;
    };
  };
};

const Posts: VFC<Props> = ({ edges }) => (
  <div css={isFlexed}>
    {edges.map(
      ({
        node: {
          frontmatter: { slug, title, image, imageAlt, tags, description },
        },
      }) => (
        <Post
          slug={slug}
          title={title}
          gatsbyImageData={image ? getImage(image) : undefined}
          imageAlt={imageAlt}
          tags={tags}
          description={description}
        />
      ),
    )}
  </div>
);

const isFlexed = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default Posts;
