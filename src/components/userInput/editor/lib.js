export const createLogger = (setLog) => ({
  log: (message) => {
    return setLog((prev) => [...prev, { method: "log", args: [message] }]);
  },
  error: (message) => {
    return setLog((prev) => [...prev, { method: "error", args: [message] }]);
  },
});

export const buildRiddleTestString = (code, riddle) => {
  const { fnName, arg } = riddle.setup;

  return `
  
    ${code};

    check(${fnName}(${JSON.stringify(arg)}))

  `;
};
