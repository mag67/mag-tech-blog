import { VFC } from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/react';
import { GoMarkGithub } from 'react-icons/go';
import { GiCoffeeCup, GiCakeSlice } from 'react-icons/gi';

const HeaderIcons: VFC = () => (
  <div>
    <ul css={menu}>
      <li css={menuList}>
        <Link to="/coffee">
          <GiCoffeeCup css={icon} />
        </Link>
      </li>
      <li css={menuList}>
        <Link to="/sweets">
          <GiCakeSlice css={icon} />
        </Link>
      </li>
      <li css={menuList}>
        <a href="https://github.com/mag67">
          <GoMarkGithub css={icon} />
        </a>
      </li>
    </ul>
  </div>
);

const menu = css`
  list-style: none;
  display: flex;
  justify-content: flex-end;
`;
const menuList = css`
  padding: 1vw;
`;
const icon = css`
  color: white;
  font-size: 1.8em;
`;

export default HeaderIcons;
