import { VFC } from 'react';
import { css } from '@emotion/react';
import SiteLogo from './site-logo';
import HeaderIcons from './header-icons';

const NavTop: VFC = () => (
  <div css={[navTop, background]}>
    <SiteLogo />
    <HeaderIcons />
  </div>
);

const background = css`
  --polca-base-color: hsl(355, 95%, 50%);
  --polca-dot-color: hsl(355, 70%, 40%);
  --polca-dots: radial-gradient(hsl(355, 70%, 40%) 35%, transparent 30%);
  background-color: var(--polca-base-color);
  background-image: var(--polca-dots), var(--polca-dots);
  background-position: 0 0, 30px 30px;
  background-size: 60px 60px;
`;

const navTop = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6vh;
`;

export default NavTop;
