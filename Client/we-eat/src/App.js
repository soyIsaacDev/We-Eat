import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import Filters from "./Components/filters";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Routes>
          <Route exact path="/" element={
              <>
                <Filters />
              </>
            }
          />
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
