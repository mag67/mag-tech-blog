import {
  RubyTag,
  RailsTag,
  JavaScriptTag,
  TypeScriptTag,
  EsLintTag,
  PrettierTag,
  BabelTag,
  WebpackTag,
  ReactTag,
  GatsbyTag,
  DefaultTag,
} from './presenter';

const Tag = ({ name }) => {
  if (name === 'Ruby') {
    return <RubyTag />;
  }
  if (name === 'RubyonRails') {
    return <RailsTag />;
  }
  if (name === 'JavaScript') {
    return <JavaScriptTag />;
  }
  if (name === 'TypeScript') {
    return <TypeScriptTag />;
  }
  if (name === 'EsLint') {
    return <EsLintTag />;
  }
  if (name === 'Prettier') {
    return <PrettierTag />;
  }
  if (name === 'Babel') {
    return <BabelTag />;
  }
  if (name === 'Webpack') {
    return <WebpackTag />;
  }
  if (name === 'React') {
    return <ReactTag />;
  }
  if (name === 'Gatsby') {
    return <GatsbyTag />;
  }

  return <DefaultTag name={name} />;
};

export default Tag;
