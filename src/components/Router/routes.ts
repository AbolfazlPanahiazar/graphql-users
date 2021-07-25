import { FC, lazy } from "react";
import { RouteComponentProps } from "react-router-dom";

// pages
const UserList = lazy(() => import("pages/UserList/UserList"));
const NotFound = lazy(() => import("pages/NotFound/NotFound"));
const UserProfile = lazy(() => import("pages/UserProfile/UserProfile"));

// route interface
interface IRoute {
  id: string;
  exact: boolean;
  path?: string;
  component: FC<RouteComponentProps>;
}

// page routes
const routes: IRoute[] = [
  {
    id: "1",
    exact: true,
    path: "/",
    component: UserList,
  },
  {
    id: "2",
    exact: true,
    path: "/profile/:id",
    component: UserProfile,
  },
  {
    id: "3",
    exact: false,
    component: NotFound,
  },
];

export default routes;
