import { memo } from "react";

const CountUseCallback = ({ text, count }) => {
  console.log(`Rendering - ${text}`);
  return (
    <div>
      {text} - {count}
    </div>
  );
};

export default memo(CountUseCallback);
