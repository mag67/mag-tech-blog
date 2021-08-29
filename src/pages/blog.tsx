import { VFC } from 'react';
import { css } from '@emotion/react';
import Layout from '../components/layout';

const BlogPage: VFC = () => (
  <Layout>
    <p css={head}>blog</p>
  </Layout>
);

export default BlogPage;

const head = css`
  color: black;
`;
