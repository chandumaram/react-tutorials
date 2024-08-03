import { useEffect, useState } from "react";

const UseEffect = () => {
  const [toggle, setToggle] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("useEffect work");
    document.title = toggle ? "Welcome to My App" : "Using the useEffect hook";
  }, [toggle]);

  return (
    <div>
      <ul>
        <li>
          The useEffect Hook allows you to perform side effects in your
          components.
        </li>
        <li>
          Some examples of side effects are: fetching data, directly updating
          the DOM, and timers.
        </li>
        <li>
          useEffect accepts two arguments. The second argument is optional.
        </li>
        <li>{`useEffect(<function>, <dependency>)`}</li>
      </ul>
      <input
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setToggle(!toggle)}>Toggle Message</button>
      {toggle && <h2>Welcome to My App</h2>}
    </div>
  );
};

export default UseEffect;
