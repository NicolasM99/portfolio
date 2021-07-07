import React, { Suspense, lazy, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";
import Navbar from "../components/Navbar/Navbar";
import ROUTES from "./routes.json";

const Home = lazy(() => import("../pages/Home"));
const Error404 = lazy(() => import("../pages/Error404"));

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
          <Route path={"/" + ROUTES.ERROR_404_NOT_FOUND} component={Error404} />
          <Route path={"/" + ROUTES.HOME} component={Home} exact />
          <Redirect to={"/" + ROUTES.ERROR_404_NOT_FOUND} />
        </Switch>
      </div>
    </Suspense>
  );
}

export default AppRouter;
