import { VFC } from 'react';
import { css } from '@emotion/react';
import Layout from '../components/layout';

const CoffeePage: VFC = () => (
  <Layout>
    <p css={head}>coffee</p>
  </Layout>
);

export default CoffeePage;

const head = css`
  color: black;
`;
