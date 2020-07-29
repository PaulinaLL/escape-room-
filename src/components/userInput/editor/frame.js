const bindConsole = (frame, logger = () => null) => {
  // supported methods
  const apply = [
    "log",
    "error",
    "dir",
    "info",
    "warn",
    "assert",
    "debug",
    "clear",
  ];

  apply.forEach(function (method) {
    frame.contentWindow.console[method] = (...args) => {
      logger((prev) => [...prev, { method, args }]);
      window.console[method].apply(window.console, args);
    };
  });
};

export const createIframe = (logger) => {
  const frame = document.getElementById("userFrame");
  bindConsole(frame, logger);

  return frame;
};
