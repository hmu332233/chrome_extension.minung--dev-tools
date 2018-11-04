import snippets from './../snippets/react.js';

const replaceReactSnippets = ({ prefix }) => {
  let result;
  Object.keys(snippets).some(key => {
    result = snippets[key].body;
    return prefix === snippets[key].prefix;
  });

  return result;
}

export { replaceReactSnippets };