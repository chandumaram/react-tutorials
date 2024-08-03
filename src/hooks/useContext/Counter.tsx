import { useMealsListContext } from "./MealsProvider";

const Counter = () => {
  const { meals } = useMealsListContext();
  return (
    <>
      <div>Number of meals today: {meals.length}</div>
    </>
  );
};

export default Counter;
