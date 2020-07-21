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
  const frameID = "userFrame";
  const prevFrame = document.querySelector(`#${frameID}`);

  if (prevFrame) {
    prevFrame.remove();
  }

  const frame = document.createElement("iframe");
  Object.assign(frame, {
    id: frameID,
    title: "User Frame",
    hidden: true,
  });

  document.body.append(frame);
  bindConsole(frame, logger);

  return frame;
};
