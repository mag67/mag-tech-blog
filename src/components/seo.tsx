import { useStaticQuery, graphql } from 'gatsby';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const SEO: FC = ({ siteMetaData }) => (
  <Helmet>
    <title>{siteMetaData.title}</title>
    <meta name="description" content={siteMetaData.description} />
    <meta charSet="utf-8" />
  </Helmet>
);

const SEOwithQuery: FC = () => {
  const {
    site: { siteMetadata },
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

  return <SEO siteMetaData={siteMetadata} />;
};

export default SEOwithQuery;
