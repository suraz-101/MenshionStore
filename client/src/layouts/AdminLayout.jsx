import React from "react";
import { Outlet } from "react-router-dom";
import { AdminFooter } from "./AdminFooter";
import { AdminNavbar } from "./AdminNavbar";

export const AdminLayout = () => {
  return (
    <div className="row m-auto">
      <AdminNavbar />
      <Outlet />
      <AdminFooter />
    </div>
  );
};
