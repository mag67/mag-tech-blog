import { Link } from 'gatsby';
import { css } from '@emotion/react';

const Tag = ({ name }) => {
  let [borderColor, backgroundColor, fontColor] = ['black', 'white', 'black'];
  if (name === 'react') {
    [borderColor, backgroundColor, fontColor] = ['blue', 'blue', 'white'];
  }

  return (
    <TagPresentation
      tagName={name}
      borderColor={borderColor}
      backgroundColor={backgroundColor}
      fontColor={fontColor}
    />
  );
};

const TagPresentation = ({
  tagName,
  borderColor,
  backgroundColor,
  fontColor,
}) => (
  <div
    css={[
      boxStyle,
      css`
        border: 1px solid ${borderColor};
        background-color: ${backgroundColor};
      `,
    ]}
  >
    <Link
      to="/blog"
      css={[
        linkStyleOff,
        css`
          color: ${fontColor};
        `,
      ]}
    >
      {tagName}
    </Link>
  </div>
);

const linkStyleOff = css`
  text-decoration: none;
`;
const boxStyle = css`
  padding: 0px 5px;
  border-radius: 5px;
`;

export default Tag;
