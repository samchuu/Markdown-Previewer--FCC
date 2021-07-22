import React from "react";
import marked from "marked";
function Previewer({ editorText }) {
  const markdown = marked(editorText, { breaks: true });
  return (
    <div className="box2">
      <div className="bar2">Previewer</div>
      <div id="preview" dangerouslySetInnerHTML={{ __html: markdown }}></div>
    </div>
  );
}

export default Previewer;
