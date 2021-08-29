import { VFC } from 'react';
import { css } from '@emotion/react';
import Layout from '../components/layout';

const WorkPage: VFC = () => (
  <Layout>
    <p css={head}>portfolio</p>
  </Layout>
);

export default WorkPage;

const head = css`
  color: black;
`;
