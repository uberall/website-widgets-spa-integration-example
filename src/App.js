import { NavLink, Route, Routes } from "react-router-dom";
import RouteWithoutWebsiteWidgets from "./routes/RouteWithoutWidgets";
import RouteWithWebsiteWidgets from "./routes/RouteWithWebsiteWidgets";

function App() {
  return (
    <div className="page-wrapper">
      <div className="nav-bar">
        <NavLink to="/">Page without Website widgets</NavLink>{" "}
        <NavLink to="/with-website-widgets">Page with Website widgets</NavLink>
      </div>
      <Routes>
        <Route path="/" element={<RouteWithoutWebsiteWidgets />} />
        <Route
          path="/with-website-widgets"
          element={<RouteWithWebsiteWidgets />}
        />
      </Routes>
    </div>
  );
}

export default App;
