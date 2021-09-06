import { VFC } from 'react';
import { css } from '@emotion/react';
import Layout from '../components/layout';

const SweetsPage: VFC = () => (
  <Layout>
    <p css={head}>sweets</p>
  </Layout>
);

export default SweetsPage;

const head = css`
  color: black;
`;
