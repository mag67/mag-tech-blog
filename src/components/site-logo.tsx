import { VFC } from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/react';

const SiteLogo: VFC = () => (
  <div css={siteTitle}>
    <Link to="/" css={logo}>
      mag-tech-blog
    </Link>
  </div>
);

const siteTitle = css`
  margin-left: 1vw;
  height: 4vh;
  width: 170px;
  min-width: 130px;
  text-align: center;
  backdrop-filter: saturate(50%);
  border-radius: 10px;
`;

const logo = css`
  font-size: 1.25em;
  text-decoration: none;
  color: white;
  display: block;
`;

export default SiteLogo;
