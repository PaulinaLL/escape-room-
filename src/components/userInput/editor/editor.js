import React from "react";
import "./editor.css";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

import "codemirror/mode/javascript/javascript";

const Editor = ({ userCode, setLog, setUserCode }) => (
  <CodeMirror
    className="editor"
    value={userCode}
    options={{
      mode: "javascript",
      theme: "material",
      lineNumbers: true,
    }}
    onBeforeChange={(editor, data, value) => {
      setLog([]);
      setUserCode(value);
    }}
    onChange={(editor, data, value) => {}}
  />
);

export default Editor;
