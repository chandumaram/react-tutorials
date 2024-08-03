import { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef(null);

  const formInputRef = useRef(null);

  const focusInput = () => {
    formInputRef.current.focus();
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <>
      <ul>
        <li>The useRef Hook allows you to persist values between renders.</li>
        <li>
          It can be used to store a mutable value that does not cause a
          re-render when updated.
        </li>
        <li>It can be used to access a DOM element directly.</li>
      </ul>
      <h4>useRef example</h4>
      <div className="m-5">
        <input ref={formInputRef} type="text" />
        <button onClick={focusInput}>Focus Input</button>
      </div>
      <div>
        Hook Timer - {timer}
        <button onClick={() => clearInterval(intervalRef.current)}>
          Clear Timer
        </button>
      </div>
    </>
  );
};

export default UseRef;
