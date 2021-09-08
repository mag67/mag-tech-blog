import { VFC, ReactElement } from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/react';

type Props = {
  tagName: string;
  borderColor?: string;
  backgroundColor?: string;
  fontColor?: string;
  iconComponent?: ReactElement;
};

const TagPresentation: VFC<Props> = ({
  iconComponent,
  tagName,
  borderColor = 'black',
  backgroundColor = 'white',
  fontColor = 'black',
}) => (
  <Link
    to={`/blog/tags/${tagName}`}
    css={[
      linkStyleOff,
      css`
        color: ${fontColor};
      `,
    ]}
  >
    <span
      css={[
        boxStyle,
        css`
          border: 1px solid ${borderColor};
          background-color: ${backgroundColor};
        `,
      ]}
    >
      {iconComponent}
      {tagName}
    </span>
  </Link>
);

const linkStyleOff = css`
  text-decoration: none;
`;
const boxStyle = css`
  padding: 0px 5px;
  border-radius: 5px;
`;

export default TagPresentation;
