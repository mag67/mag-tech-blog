import { VFC } from 'react';
import { css } from '@emotion/react';
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
import TagPresentation from './presenter';

export const RubyTag: VFC = () => (
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
export const RailsTag: VFC = () => (
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

export const JavaScriptTag: VFC = () => (
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

export const TypeScriptTag: VFC = () => (
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

export const EsLintTag: VFC = () => (
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

export const PrettierTag: VFC = () => (
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

export const WebpackTag: VFC = () => (
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

export const BabelTag: VFC = () => (
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
export const ReactTag: VFC = () => (
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

export const GatsbyTag: VFC = () => (
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
