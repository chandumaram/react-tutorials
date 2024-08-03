import { useMemo, useState } from "react";

const useMemoHook = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const handleCounterOne = () => {
    setCounterOne(counterOne + 1);
  };
  const hanCountertwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 200000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);
  return (
    <div>
      <ul>
        <li>The React useMemo Hook returns a memoized value.</li>
        <li>
          Think of memoization as caching a value so that it does not need to be
          recalculated.
        </li>
        <li>The useMemo Hook only runs when one of its dependencies update.</li>
        <li>This can improve performance.</li>
      </ul>
      <div>
        <button onClick={handleCounterOne}>Count - {counterOne}</button>
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>
      <button onClick={hanCountertwo}>Count - {counterTwo}</button>
    </div>
  );
};

export default useMemoHook;
