import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

export const ROUTES = {
  Home: {
    path: "/",
    component: <Home />,
  },
};

export function getRoutes() {
  return (
    <Routes>
      {Object.entries(ROUTES).map(([key, value]) => (
        <Route
          key={"route-" + key}
          path={value.path}
          element={value.component}
        />
      ))}
    </Routes>
  );
}
