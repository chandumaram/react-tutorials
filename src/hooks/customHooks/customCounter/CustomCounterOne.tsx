import useCounter from "./useCounter";

const CustomCounterOne = () => {
  const [{ count, increment, decrement, reset }] = useCounter(0, 1);

  return (
    <div>
      <h5>Count - {count}</h5>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default CustomCounterOne;
