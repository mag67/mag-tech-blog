import { css } from '@emotion/react';
import NavTop from './nav-top';
import NavMenu from './nav-menu';

const Header = () => (
  <header css={isFixed}>
    <NavTop />
    <NavMenu />
  </header>
);

const isFixed = css`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
`;

export default Header;
