import React, { useCallback, useState } from "react";
import "./App.css";
import ListProducts from "./components/ListProducts";
import ViewProduct from "./components/ViewProduct";
import { useLocation } from "./context/Context";

function App() {
  const { location, changeLocation } = useLocation();

  return (
    <div className="App">
      {location.page === "list" && (
        <ListProducts changeLocation={changeLocation} />
      )}
      {location.page === "view" && <ViewProduct id={location.params.id} />}
      {location.page !== "list" && (
        <div>
          <a className="link" onClick={() => changeLocation("list")}>
            Return to list
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
