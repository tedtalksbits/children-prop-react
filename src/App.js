import { ChildOne } from "./ChildOne";
import { Parent } from "./Parent";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Children Prop</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Parent>
        {(state, setState) => (
          <>
            <fieldset>
              <p>I am a child but i have access to my...</p>
              <div>{state.username}</div>
              <button
                onClick={() =>
                  setState({
                    ...state,
                    username: "michael",
                    user_img:
                      "https://resources.premierleague.com/premierleague/photos/players/250x250/p84450.png"
                  })
                }
              >
                change state
              </button>
            </fieldset>
            <ChildOne state={state} />
          </>
        )}
      </Parent>
    </div>
  );
}
