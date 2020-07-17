import React, { useState, useEffect } from "react";
import { parse } from "@babel/parser";

import { createIframe } from "./frame";
import { createLogger, buildRiddleTestString } from "./lib";

import Log from "./log";
import Editor from "./editor";

function RiddleEditor({ currentRiddle, userCode, setUserCode }) {
  const [logs, setLog] = useState([]);

  const frame = createIframe(setLog);

  const { log, error } = createLogger(setLog);

  const runCode = async (code) => {
    const { check } = currentRiddle;

    // Eval code to check for errors
    try {
      if (check.testFn) {
        frame.contentWindow.check = check.testFn(log, error);
      }
      frame.contentWindow.eval(buildRiddleTestString(code, currentRiddle));
    } catch (e) {
      return error(e.toString());
    }
  };

  useEffect(() => {
    if (!userCode) return;

    try {
      // 1. Parse for syntax error (throws)
      parse(userCode);
      // 2. Run code if no syntax error
      runCode(userCode);
    } catch (e) {
      error(e.toString());
    }

    // eslint-disable-next-line
  }, [userCode]);

  return (
    <>
      <Editor setLog={setLog} setUserCode={setUserCode} userCode={userCode} />
      <Log logs={logs} />
    </>
  );
}

export default RiddleEditor;
