import { FC, ReactElement, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import routes from "./routes";

const Router: FC = (): ReactElement => {
  return (
    <Suspense fallback="loading">
      <BrowserRouter>
        <Switch>
          {routes.map((route) => (
            <Route key={route.id} {...route} />
          ))}
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};

export default Router;
