import CustomCounterOne from "./CustomCounterOne";
import CustomCounterTwo from "./CustomCounterTwo";

const CustomCounter = () => {
  return (
    <div className="p-3">
      <h4>Custom counter:</h4>
      <CustomCounterOne />
      <CustomCounterTwo />
    </div>
  );
};

export default CustomCounter;
