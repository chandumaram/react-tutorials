import { useState } from "react";

const ObjectUseState = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <h4>Object with useState:</h4>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <p>Your first name is: {name.firstName}</p>
      <p>Your last name is: {name.lastName}</p>
    </div>
  );
};

export default ObjectUseState;
