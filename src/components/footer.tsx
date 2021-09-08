import { VFC } from 'react';
import { css } from '@emotion/react';

const Footer: VFC = () => <footer css={footer}>footer</footer>;

const footer = css`
  background-color: hsl(45, 80%, 65%);
  border-top: 3px double rgb(184, 134, 11);
`;
export default Footer;
