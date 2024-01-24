import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { useEffect, lazy } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../redux/operations";
import { RestrictedRoute } from "../RestrictedRoute";
import { PrivateRoute } from "../PrivateRoute";

const Main = lazy(() => import("../pages/main"));
const Admin = lazy(() => import("../pages/admin"));
const Login = lazy(() => import("../pages/login"));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route
          path="/admin"
          element={<PrivateRoute redirectTo="/login" component={<Admin />} />}
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/admin" component={<Login />} />
          }
        />
      </Route>
    </Routes>
  );
};
