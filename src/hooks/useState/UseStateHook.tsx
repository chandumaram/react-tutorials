import ArrayUseState from "./ArrayUseState";
import ObjectUseState from "./ObjectUseState";
import PreviousValueUseState from "./PreviousValueUseState";

const UseStateHook = () => {
  return (
    <div>
      <ul>
        <li>
          The React useState Hook allows us to track state in a function
          component.
        </li>
        <li>
          State generally refers to data or properties that need to be tracking
          in an application.
        </li>
      </ul>
      <PreviousValueUseState />
      <ObjectUseState />
      <ArrayUseState />
    </div>
  );
};

export default UseStateHook;
