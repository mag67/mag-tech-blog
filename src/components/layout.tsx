import { FC } from 'react';
import { css } from '@emotion/react';
import { HelmetProvider } from 'react-helmet-async';
import SEO from './seo';
import Header from './header';
import Footer from './footer';

type Props = {
  children: any;
};

const Layout: FC<Props> = ({ children }) => (
  <HelmetProvider>
    <SEO />
    <Header />
    <main css={background}>{children}</main>
    <Footer />
  </HelmetProvider>
);

const background = css`
  background-color: hsl(45, 90%, 95%);
  overflow: hidden;
`;

export default Layout;
