import { Link } from 'gatsby';
import { css } from '@emotion/react';
import { snakeCase, capitalize } from 'lodash';
import {
  SiRuby,
  SiRails,
  SiJavascript,
  SiTypescript,
  SiEslint,
  SiPrettier,
  SiWebpack,
  SiBabel,
  SiReact,
  SiGatsby,
} from 'react-icons/si';

const TagPresentation = ({
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

export const RubyTag = () => (
  <TagPresentation
    iconComponent={
      <SiRuby
        css={css`
          color: red;
        `}
      />
    }
    tagName="Ruby"
  />
);
export const RailsTag = () => (
  <TagPresentation
    iconComponent={
      <SiRails
        css={css`
          color: red;
        `}
      />
    }
    tagName="RubyonRails"
  />
);

export const JavaScriptTag = () => (
  <TagPresentation
    iconComponent={
      <SiJavascript
        css={css`
          color: yellow;
          background-color: black;
        `}
      />
    }
    tagName="JavaScript"
  />
);

export const TypeScriptTag = () => (
  <TagPresentation
    iconComponent={
      <SiTypescript
        css={css`
          color: blue;
        `}
      />
    }
    tagName="TypeScript"
  />
);

export const EsLintTag = () => (
  <TagPresentation
    iconComponent={
      <SiEslint
        css={css`
          color: purple;
        `}
      />
    }
    tagName="EsLint"
  />
);

export const PrettierTag = () => (
  <TagPresentation
    iconComponent={
      <SiPrettier
        css={css`
          color: brown;
        `}
      />
    }
    tagName="Prettier"
  />
);

export const WebpackTag = () => (
  <TagPresentation
    iconComponent={
      <SiWebpack
        css={css`
          color: lightblue;
        `}
      />
    }
    tagName="Webpack"
  />
);

export const BabelTag = () => (
  <TagPresentation
    iconComponent={
      <SiBabel
        css={css`
          color: yellow;
          background-color: black;
        `}
      />
    }
    tagName="Babel"
  />
);
export const ReactTag = () => (
  <TagPresentation
    iconComponent={
      <SiReact
        css={css`
          color: blue;
        `}
      />
    }
    tagName="React"
  />
);

export const GatsbyTag = () => (
  <TagPresentation
    iconComponent={
      <SiGatsby
        css={css`
          color: purple;
        `}
      />
    }
    tagName="Gatsby"
  />
);

export const DefaultTag = ({ name }) => <TagPresentation tagName={name} />;
