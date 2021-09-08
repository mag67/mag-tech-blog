import { VFC } from 'react';
import * as list from './list';
import TagPresentation from './presenter';

type TagProps = {
  category: string;
};

const Tag: VFC<TagProps> = ({ category }) => {
  if (category === 'Ruby') {
    return <list.RubyTag />;
  }
  if (category === 'RubyonRails') {
    return <list.RailsTag />;
  }
  if (category === 'JavaScript') {
    return <list.JavaScriptTag />;
  }
  if (category === 'TypeScript') {
    return <list.TypeScriptTag />;
  }
  if (category === 'EsLint') {
    return <list.EsLintTag />;
  }
  if (category === 'Prettier') {
    return <list.PrettierTag />;
  }
  if (category === 'Babel') {
    return <list.BabelTag />;
  }
  if (category === 'Webpack') {
    return <list.WebpackTag />;
  }
  if (category === 'React') {
    return <list.ReactTag />;
  }
  if (category === 'Gatsby') {
    return <list.GatsbyTag />;
  }

  return <DefaultTag category={category} />;
};

export const DefaultTag: VFC<TagProps> = ({ category }) => (
  <TagPresentation tagName={category} />
);

export default Tag;
