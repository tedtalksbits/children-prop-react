export const ChildOne = ({ state, setState }) => {
  return (
    <fieldset>
      <h1>username: {state?.username}</h1>
      <img height="200" width="200" src={state?.user_img} alt="user avatar" />
    </fieldset>
  );
};
