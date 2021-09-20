import { VFC } from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/react';

const NavMenu: VFC = () => (
  <div css={navMenu}>
    <nav>
      <ul css={menu}>
        <li css={menuList}>
          <Link to="/about" css={menuLink}>
            About
          </Link>
        </li>
        <li css={menuList}>
          <Link to="/blog" css={menuLink}>
            Blog
          </Link>
        </li>
        <li css={menuList}>
          <Link to="/work" css={menuLink}>
            Work
          </Link>
        </li>
        <li css={menuList}>
          <Link to="/sweets" css={menuLink}>
            Ref
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

const navMenu = css`
  height: 3.5vh;
  background-color: hsl(45, 80%, 65%);
  border-top: 3px double rgb(184, 134, 11);
  border-bottom: 3px double rgb(184, 134, 11);
`;

const menu = css`
  margin-top: 0px;
  list-style-type: none;
  display: flex;
  justify-content: space-around;
`;

const menuList = css`
  font-size: 1.25em;
  backdrop-filter: saturate(50%);
`;

const menuLink = css`
  font-size: 1.1em;
  color: snow;
  --border: 1.5px 2px 0 rgb(184, 134, 11);
  text-shadow: var(--border), var(--border), var(--border), var(--border);
  text-decoration: none;
`;

export default NavMenu;
