import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import {
  container,
  navLinks,
  navLinkItem,
  navLinkText,
  heading,
  siteTitle,
} from './layout.module.css';

type Props = {
  pageTitle: string;
  children: any;
};

const Layout: React.FC<Props> = ({ pageTitle, children }) => {
  const data = useStaticQuery<GatsbyTypes.siteTitleQuery>(graphql`
    query siteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div className={container}>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>pageTitle</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
