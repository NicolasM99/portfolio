import React, { Suspense, lazy, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";
import Navbar from "../components/Navbar/Navbar";
import ROUTES from "./routes.json";

const HomePage = lazy(() => import("../pages/HomePage"));
const Error404Page = lazy(() => import("../pages/Error404Page"));

function AppRouter(props) {
  const [theme, setTheme] = useState("dark");
  return (
    <Suspense fallback={<LoadingScreen />}>
      <div className={theme}>
        <Navbar theme={theme} setTheme={setTheme} />
        <Switch>
          <Route path="/" exact>
            <Redirect to={"/" + ROUTES.HOME} />
          </Route>
          <Route
            path={"/" + ROUTES.ERROR_404_NOT_FOUND}
            component={Error404Page}
          />
          <Route path={"/" + ROUTES.HOME} component={HomePage} exact />
          <Redirect to={"/" + ROUTES.ERROR_404_NOT_FOUND} />
        </Switch>
      </div>
    </Suspense>
  );
}

export default AppRouter;
