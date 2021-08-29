import { VFC } from 'react';
import { css } from '@emotion/react';
import Layout from '../components/layout';

const LinkPage: VFC = () => (
  <Layout>
    <p css={head}>links</p>
  </Layout>
);

export default LinkPage;

const head = css`
  color: black;
`;
