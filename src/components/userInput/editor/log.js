import React, { Fragment } from "react";

const postfixCommas = (val, index, array) => {
  const lastIndex = array.length - 1;
  if (index === lastIndex) {
    return val;
  }

  return <>{val}, </>;
};

const formatLog = (input, index) => {
  const type = typeof input;
  const isArray = Array.isArray(input);

  const styles = {
    ex: "blue",
    string: "green",
    number: "orange",
    function: "purple",
  };

  if (!input) {
    return (
      <Fragment key={index}>
        <code key={index} style={{ color: styles["undefined"] }}>
          {typeof input === "undefined" ? "undefined" : "null"}
        </code>
      </Fragment>
    );
  }

  if (isArray) {
    return (
      <Fragment key={index}>
        <code>[</code>
        {input.map((val) => formatLog(val)).map(postfixCommas)}
        <code>]</code>
      </Fragment>
    );
  }

  if (type === "object") {
    try {
      input = JSON.parse(JSON.stringify(input));
    } catch (e) {
      console.log("to big");
      return (
        <Fragment key={index}>
          Log Skipped: Sorry, this log was too large for our console. You might
          need to use the browser console instead.
          <br />
        </Fragment>
      );
    }

    const props = Object.keys(input);
    return (
      <Fragment key={index}>
        <code>&#123;</code> <br />
        {props.map((prop, index) => {
          return (
            <Fragment key={index}>
              &nbsp;&nbsp;
              <code>
                {prop}: {formatLog(input[prop])}, <br />
              </code>
            </Fragment>
          );
        })}
        <code>&#125;</code> <br />
      </Fragment>
    );
  }

  if (type === "string") {
    return (
      <code key={index} style={{ color: styles[type] }}>
        "{input}"
      </code>
    );
  }

  if (type === "number") {
    return (
      <code key={index} style={{ color: styles[type] }}>
        {input}
      </code>
    );
  }

  if (type === "function") {
    return (
      <Fragment key={index}>
        <code style={{ color: styles["ex"] }}>ƒ</code>
        <code key={index} style={{ color: styles[type] }}>
          {" "}
          {input.name || "anonymous"}()
        </code>
      </Fragment>
    );
  }

  return input;
};
const Log = ({ logs } = { logs: [] }) => {
  const cl = { error: "rgb(255,38,0)" };
  const bg = { error: "rgb(255,240,240)" };

  return (
    <div>
      {logs &&
        logs.map(({ method, args }, index) => (
          <Fragment key={index}>
            <pre
              style={{
                backgroundColor: bg[method],
                color: cl[method],
                overflow: "scroll",
              }}
            >
              {method === "log" ? (
                <code>{args && args.map(formatLog)}</code>
              ) : (
                <code>{args}</code>
              )}
            </pre>
            <hr />
          </Fragment>
        ))}
    </div>
  );
};

export default Log;
