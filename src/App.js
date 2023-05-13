import React, { useState, useEffect } from 'react';
import {marked} from 'marked';
import './App.css';

function App() {
  const [markdown, setMarkdown] = useState('');

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  const getMarkdownText = () => {
    return { __html: marked(markdown, { gfm: true, breaks: true }) };
  };

  const defaultText = `
# My Markdown Previewer

## Sub-heading

Here's a [link](https://www.freecodecamp.org/).

\`\`\`js
function addNumbers(a, b) {
  return a + b;
}
\`\`\`

- List item 1
- List item 2

> Blockquote

**Bold text**

![React Logo w/ Text](https://goo.gl/Umyytc)

Here is some inline code: \`const myVariable = 'hello world';\`
`;

useEffect(() => {
  setMarkdown(defaultText);
}, [defaultText]);


  return (
    <>
    <div>
      <a href='' >Github</a>
    </div>
    <div className="App">
      <textarea id='editor' onChange={handleChange} value={markdown}></textarea>

      <div>
        <section id='preview' dangerouslySetInnerHTML={getMarkdownText()}></section>
      </div>
    </div>
    </>

  );
}

export default App;








