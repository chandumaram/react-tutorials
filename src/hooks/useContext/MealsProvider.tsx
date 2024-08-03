import { createContext, useState, useContext } from "react";

const MealsContext = createContext(undefined);

const todayMeals = ["Baked Beens", "Baked Sweet Potatoes", "Baked Potatoes"];

const MealsProvider = ({ children }) => {
  const [meals, setMeals] = useState(todayMeals);

  return (
    <MealsContext.Provider value={{ meals, setMeals }}>
      <ul>
        <li>React Context is a way to manage state globally.</li>
        <li>
          It can be used together with the useState Hook to share state between
          deeply nested components more easily than with useState alone.
        </li>
      </ul>
      {children}
    </MealsContext.Provider>
  );
};

export const useMealsListContext = () => useContext(MealsContext);

export default MealsProvider;
