import { css } from '@emotion/react';
import Tag from './tag';

const Tags = ({ tagNames }) => (
  <div css={tags}>
    <ul css={list}>
      {tagNames.map((name) => (
        <li css={tag}>
          <Tag name={name} />
        </li>
      ))}
    </ul>
  </div>
);

const tags = css``;

const list = css`
  padding-left: 0;
  list-style-type: none;
  display: flex;
  justify-content: start;
`;

const tag = css`
  margin-right: 1vw;
`;

export default Tags;
