import { FC, ReactElement } from "react";
import { RouteComponentProps } from "react-router-dom";

const NotFound: FC<RouteComponentProps> = (): ReactElement => {
  return <div>404 not found</div>;
};

export default NotFound;
