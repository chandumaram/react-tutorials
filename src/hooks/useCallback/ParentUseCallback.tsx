import { useCallback, useState } from "react";
import ButtonUsecallback from "./ButtonUsecallback";
import CountUseCallback from "./CountUseCallback";

const ParentUseCallback = () => {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(25000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);
  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div>
      <ul>
        <li>
          The React useCallback Hook returns a memoized callback function.
        </li>
        <li>
          This allows us to isolate resource intensive functions so that they
          will not automatically run on every render.
        </li>
        <li>
          The useCallback Hook only runs when one of its dependencies update.
        </li>
        <li>This can improve performance.</li>
        <li>
          The useCallback and useMemo Hooks are similar. The main difference is
          that useMemo returns a memoized value and useCallback returns a
          memoized function.
        </li>
      </ul>
      <CountUseCallback text="Age" count={age} />
      <ButtonUsecallback handleClick={incrementAge}>
        Increment Age
      </ButtonUsecallback>
      <CountUseCallback text="Salary" count={salary} />
      <ButtonUsecallback handleClick={incrementSalary}>
        Increment Salary
      </ButtonUsecallback>
    </div>
  );
};

export default ParentUseCallback;
