import { VFC } from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import Tags from './tags';

type Props = {
  slug: string;
  title: string;
  gatsbyImageData?: IGatsbyImageData;
  imageAlt: string;
  tags: [string];
  description: string;
};

const Post: VFC<Props> = ({
  slug,
  title,
  gatsbyImageData,
  imageAlt,
  tags,
  description,
}) => (
  <article css={card}>
    <Link to={slug} css={linkStyleOff}>
      <h2 css={headingTitle}>{title}</h2>
    </Link>
    <Tags tagNames={tags} />
    {gatsbyImageData && (
      <Link to={slug} css={linkStyleOff}>
        <GatsbyImage image={gatsbyImageData} alt={imageAlt} css={img} />
      </Link>
    )}
    <Link to={slug} css={linkStyleOff}>
      <p>{description}</p>
    </Link>
  </article>
);

const linkStyleOff = css`
  color: hsla(0, 0%, 0%, 0.775);
  text-decoration: none;
`;

const card = css`
  background-color: white;
  margin: 30px;
  width: 290px;
  border: 1px solid red;
  border-radius: 5px;
  padding: 30px;
`;

const headingTitle = css`
  margin-top: 0;
  font-size: 1.7rem;
  font-weight: bold;
`;

const img = css`
  max-width: 100%;
  margin-bottom: 2vh;
`;
export default Post;
