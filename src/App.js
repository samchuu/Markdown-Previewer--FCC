import React, { useState } from "react";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
function App() {
  const defaultText = `
  # React Markdown Previewer
  ## Sub-heading here!
  Make this word **bold!**
  > Block quotes!

  - list item 1
  - list item 2
  - list item 3
  [FCC Markdown Previewer](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer)
  \`\`\`
  BLOCK I
  BLOCK II
  BLOCK III
  \`\`\`
  Inline style \`<div></div>\` 
  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  `;

  const [editorText, setEditorText] = useState(defaultText);

  return (
    <div>
      <header>
        <div id="markdown">Markdown Previewer</div>
      </header>
      <div className="App">
        <Editor editorText={editorText} setEditorText={setEditorText} />
        <Previewer editorText={editorText} />
      </div>
    </div>
  );
}

export default App;
