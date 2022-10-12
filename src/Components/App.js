import React from "react";
import LayOut from "../Components/LayOut";
import { Routes, Route } from "react-router-dom";
import SingleEmployee from "./SingleEmployee";
const App = () => {
  return (
    <>
      <Routes baseName="employees">
        <Route exact path="/employees" element={<LayOut />} />
        <Route path="/employees/:emp_id/" element={<SingleEmployee />} />
        <Route
          path="*"
          element={
            <div>
              <h1>not found</h1>
            </div>
          }
        />
      </Routes>
    </>
  );
};

export default App;
