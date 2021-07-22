import React from "react";
import "../styles.css";

function Editor({ editorText, setEditorText }) {
  const textHandler = (e) => {
    setEditorText(e.target.value);
  };

  return (
    <div className="box1">
      <div className="bar">Editor</div>
      <textarea
        value={editorText}
        id="editor"
        rows="10"
        cols="45"
        onChange={textHandler}
      ></textarea>
    </div>
  );
}

export default Editor;
