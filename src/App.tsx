// import { useState } from "react";
// import Alert from "./components/Alert";
// import Button from "./components/Button";
// import ListGroup from "./components/ListGroup";
// import ReducerHook from "./hooks/ReducerHook";

import Counter from "./hooks/useContext/Counter";
import MealsList from "./hooks/useContext/MealsList";
import MealsProvider from "./hooks/useContext/MealsProvider";

import ReducerHook from "./hooks/ReducerHook";
import { Link, Route, Routes } from "react-router-dom";
import Image from "./components/Image";
import VideoPlayer from "./components/VideoPlayer";
import SimpleForm from "./components/SimpleForm";
import UseEffect from "./hooks/UseEffect";
import UseRef from "./hooks/UseRef";
import UseStateHook from "./hooks/useState/UseStateHook";
import ParentUseCallback from "./hooks/useCallback/ParentUseCallback";
import UseMemoHook from "./hooks/UseMemoHook";
import CustomHook from "./hooks/customHooks/CustomHook";

function App() {
  // const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // const [showAlert, setShowAlert] = useState(false);

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  return (
    <div className="m-5">
      <nav className="mb-5">
        <Link to="/" className="nav-item p-2">
          useState
        </Link>
        <Link to="/useEffect" className="nav-item p-2">
          useEffect
        </Link>
        <Link to="/useContext" className="nav-item p-2">
          useContext
        </Link>
        <Link to="/useReduce" className="nav-item p-2">
          useReduce
        </Link>
        <Link to="/useCallback" className="nav-item p-2">
          useCallback
        </Link>
        <Link to="/useMemo" className="nav-item p-2">
          useMemo
        </Link>
        <Link to="/useRef" className="nav-item p-2">
          useRef
        </Link>
        <Link to="/customHook" className="nav-item p-2">
          Custom Hooks
        </Link>
        <Link to="/images" className="nav-item p-2">
          Images
        </Link>
        <Link to="/videos" className="nav-item p-2">
          Videos
        </Link>
        <Link to="/sform" className="nav-item p-2">
          Simple Form
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<UseStateHook />}></Route>
        <Route path="/useEffect" element={<UseEffect />} />
        <Route
          path="/useContext"
          element={
            <MealsProvider>
              <MealsList />
              <Counter />
            </MealsProvider>
          }
        ></Route>
        <Route path="/useReduce" element={<ReducerHook />}></Route>
        <Route path="/useCallback" element={<ParentUseCallback />}></Route>
        <Route path="/useMemo" element={<UseMemoHook />}></Route>
        <Route path="/useRef" element={<UseRef />} />
        <Route path="/customHook" element={<CustomHook />} />
        <Route path="/images" element={<Image />}></Route>
        <Route path="/videos" element={<VideoPlayer />}></Route>
        <Route path="/sform" element={<SimpleForm />}></Route>
      </Routes>

      {/* {showAlert == true && (
        <Alert onClose={() => setShowAlert(false)}>My Alert</Alert>
      )}
      <br />
      <Button color="primary" onClick={() => setShowAlert(true)}>
        My Button
      </Button> */}
      <br />
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}
    </div>
  );
}

export default App;
