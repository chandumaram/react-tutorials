import { memo } from "react";

const ButtonUsecallback = ({ handleClick, children }) => {
  console.log(`Rendering ${children}`);
  return <button onClick={handleClick}>{children}</button>;
};

export default memo(ButtonUsecallback);
