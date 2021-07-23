import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";
import ROUTES from "./routes.json";
import Loadable from "react-loadable";
const HomePage = Loadable({
  loader: () => import("../pages/HomePage"),
  loading: LoadingScreen,
});
const Error404Page = Loadable({
  loader: () => import("../pages/Error404Page"),
  loading: LoadingScreen,
});

function AppRouter(props) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [scrolling, setScrolling] = useState(false);
  const [canHide, setCanHide] = useState(true);
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <div className={theme}>
      <Switch>
        <Route
          path={"/" + ROUTES.ERROR_404_NOT_FOUND}
          component={Error404Page}
        />
        <Route
          path="/"
          children={() => (
            <HomePage
              theme={theme}
              setTheme={setTheme}
              scrolling={scrolling}
              canHide={canHide}
              setCanHide={setCanHide}
              setScrolling={setScrolling}
            />
          )}
          exact
        />
        <Redirect to={"/" + ROUTES.ERROR_404_NOT_FOUND} />
      </Switch>
    </div>
  );
}

export default AppRouter;
