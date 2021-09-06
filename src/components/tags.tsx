import { css } from '@emotion/react';
import Tag from './tag';

const Tags = ({ tagNames }) => (
  <div css={tags}>
    <ul css={[list, isFlexed]}>
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
`;

const isFlexed = css`
  display: flex;
  justify-content: start;
  aligne-items: center;
  flex-wrap: wrap;
`;

const tag = css`
  margin-right: 1vw;
  margin-bottom: 1vh;
`;

export default Tags;
