import { useState } from "react";

export const Parent = ({ children }) => {
  const [state, setState] = useState("Parent state");
  return (
    <>
      <h1>
        Hi there
        <span role="img" aria-label="emoji">
          🙋‍♀️
        </span>{" "}
        I'm the parent component
      </h1>
      <div>{children(state, setState)}</div>
      <button onClick={() => setState("Parent state")}>reset state</button>
    </>
  );
};
