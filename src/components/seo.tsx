import { VFC } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet, HelmetProvider } from 'react-helmet-async';

type Props = {
  title: string;
  description: string;
};

const SEO: VFC<Props> = ({ title, description }) => (
  <HelmetProvider>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
    </Helmet>
  </HelmetProvider>
);

const SEOwithQuery: VFC = () => {
  const {
    site: {
      siteMetadata: { title, description },
    },
  } = useStaticQuery<GatsbyTypes.siteMetaDataQuery>(graphql`
    query siteMetaData {
      site {
        siteMetadata {
          description
          title
        }
      }
    }
  `);

  return (
    <SEO
      title={typeof title === 'string' ? title : ''}
      description={typeof description === 'string' ? description : ''}
    />
  );
};

export default SEOwithQuery;
