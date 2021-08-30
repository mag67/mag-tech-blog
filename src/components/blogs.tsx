import { css } from '@emotion/react';

import Blog from './blog';

const Blogs = ({ edges }) => (
  <div css={isFlexed}>
    {edges.map(
      ({
        node: {
          frontmatter: { slug, title, image, image_alt, tags, description },
        },
      }) => (
        <Blog
          slug={slug}
          title={title}
          image={image}
          image_alt={image_alt}
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

export default Blogs;
