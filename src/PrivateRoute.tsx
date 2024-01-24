import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "./redux/selectors";

type Props = { component: JSX.Element; redirectTo: string };

export const PrivateRoute = ({
  component: Component,
  redirectTo = "/",
}: Props) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return !isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
