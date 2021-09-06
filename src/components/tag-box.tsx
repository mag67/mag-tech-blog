import { css } from '@emotion/react';
import Tag from './tag';

const TagBox = ({ group }) => (
  <div css={[boxSize, isFlexed]}>
    {group.map(({ tag, totalCount }) => (
      <div css={position}>
        <Tag name={tag} />×{totalCount}
      </div>
    ))}
  </div>
);
const boxSize = css`
  margin: auto;
  width: 60%;
`;
const isFlexed = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const position = css`
  margin-top: 1vh;
  margin-bottom: 1vh;
  padding-right: 1vw;
`;

export default TagBox;
