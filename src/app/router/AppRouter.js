import React, { Suspense, lazy, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import ROUTES from "./routes.json";

const Home = lazy(() => import("../pages/Home"));
const Error404 = lazy(() => import("../pages/Error404"));

function AppRouter(props) {
  const [theme, setTheme] = useState("dark");
  return (
    <Suspense fallback={<Spinner animation="grow" />}>
      <Navbar theme={theme} setTheme={setTheme} />
      <div className={theme}>
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
