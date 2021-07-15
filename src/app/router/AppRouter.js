import React, { Suspense, lazy, useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";
import Navbar from "../components/Navbar/Navbar";
import ROUTES from "./routes.json";

const HomePage = lazy(() => import("../pages/HomePage"));
const Error404Page = lazy(() => import("../pages/Error404Page"));

function AppRouter(props) {
  const [theme, setTheme] = useState("light");
  const [scrolling, setScrolling] = useState(false);
  const [canHide, setCanHide] = useState(true);
  useEffect(() => {
    console.log("Can hide state", canHide);
  }, [canHide]);
  return (
    <Suspense fallback={<LoadingScreen />}>
      <div className={theme}>
        <Navbar
          scrolling={scrolling}
          canHide={canHide}
          setCanHide={setCanHide}
          theme={theme}
          setTheme={setTheme}
        />
        <Switch>
          <Route
            path={"/" + ROUTES.ERROR_404_NOT_FOUND}
            component={Error404Page}
          />
          <Route
            path="/"
            // component={HomePage}
            children={() => (
              <HomePage
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
    </Suspense>
  );
}

export default AppRouter;
