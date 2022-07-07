import { useState } from "react";
const initalState = {
  username: "Tedane",
  user_img:
    "https://resources.premierleague.com/premierleague/photos/players/250x250/p58822.png",
  auth_level: 1
};
export const Parent = ({ children }) => {
  const [state, setState] = useState(initalState);
  return (
    <>
      {state.username === "" ? (
        <button onClick={() => setState(initalState)}>Log in</button>
      ) : (
        <button
          onClick={() =>
            setState({
              username: "",
              user_img: "",
              auth_level: 0
            })
          }
        >
          Log out
        </button>
      )}
      <h1>
        Hi there
        <span role="img" aria-label="emoji">
          🙋‍♀️
        </span>{" "}
        I'm the parent component
      </h1>
      {state.username && <div>{children(state, setState)}</div>}
    </>
  );
};
