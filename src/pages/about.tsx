import { VFC } from 'react';
import { css } from '@emotion/react';
import Layout from '../components/layout';

const AboutPage: VFC = () => (
  <Layout>
    <p css={head}>about</p>
  </Layout>
);

export default AboutPage;

const head = css`
  color: black;
`;
