import { VFC } from 'react';
import { css } from '@emotion/react';
import NavTop from './nav-top';
import NavMenu from './nav-menu';

const Header: VFC = () => (
  <header css={[header, isFixed]}>
    <NavTop />
    <NavMenu />
  </header>
);

const header = css`
  z-index: 1;
`;

const isFixed = css`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
`;

export default Header;
