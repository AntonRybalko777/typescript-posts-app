import { Outlet } from "react-router-dom";
import { Menu } from "../Menu/Menu";
import { Suspense } from "react";

export const Layout = () => {
  return (
    <div>
      <Menu />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
