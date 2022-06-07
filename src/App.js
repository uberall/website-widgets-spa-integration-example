import { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import RouteWithStoreLocator from "./routes/RouteWithStoreLocator";
import RouteWithoutStoreLocator from "./routes/RouteWithoutStoreLocator";

function App() {
  const [isStoreFinderBundleLoaded, setIsStoreFinderBundleLoaded] =
    useState(false);

  return (
    <div className="page-wrapper">
      <div className="nav-bar">
        <NavLink to="/">Page without Store Locator</NavLink>{" "}
        <NavLink to="/with-store-locator">Page with Store Locator</NavLink>{" "}
      </div>
      <Routes>
        <Route path="/" element={<RouteWithoutStoreLocator />} />
        <Route
          path="/with-store-locator"
          element={
            <RouteWithStoreLocator
              isStoreFinderBundleLoaded={isStoreFinderBundleLoaded}
              setIsStoreFinderBundleLoaded={setIsStoreFinderBundleLoaded}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
