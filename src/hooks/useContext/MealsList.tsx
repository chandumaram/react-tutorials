import { useMealsListContext } from "./MealsProvider";

const MealsList = () => {
  const { meals } = useMealsListContext();
  return (
    <div>
      <h4>Meals List using Context API</h4>
      <ul>
        {meals.map((meal, index) => (
          <li key={index}>{meal}</li>
        ))}
      </ul>
    </div>
  );
};

export default MealsList;
