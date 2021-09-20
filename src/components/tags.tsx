import { VFC } from 'react';
import { css } from '@emotion/react';
import Tag from './tag';

type Props = {
  tagNames: [string];
};

const Tags: VFC<Props> = ({ tagNames }) => (
  <div>
    <ul css={[list, isFlexed]}>
      {tagNames.map((name) => (
        <li css={tag}>
          <Tag category={name} />
        </li>
      ))}
    </ul>
  </div>
);

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
