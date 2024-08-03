import { useReducer } from "react";

const initialState = { money: 200 };

const reducer = (state, action) => {
  if (action.type == "ride") return { money: state.money + 10 };
  if (action.type == "fuel") return { money: state.money - 50 };
  // return new Error("");
};

function ReducerHook() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <ul>
        <li>The useReducer Hook is similar to the useState Hook.</li>
        <li>It allows for custom state logic.</li>
        <li>
          If you find yourself keeping track of multiple pieces of state that
          rely on complex logic, useReducer may be useful.
        </li>
      </ul>
      <h4>Wallet: {state.money}</h4>
      <button onClick={() => dispatch({ type: "ride" })}>
        A new customer!
      </button>
      <button onClick={() => dispatch({ type: "fuel" })}>
        Refill the tank!
      </button>
    </>
  );
}

export default ReducerHook;
