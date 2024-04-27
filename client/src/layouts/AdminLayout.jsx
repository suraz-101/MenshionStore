import { Outlet } from "react-router-dom";
import { AdminFooter } from "./AdminFooter";
import { AdminNav } from "./AdminNav";
import { AdminNavbar } from "./AdminNavbar";

export const AdminLayout = () => {
  return (
    <div className="row m-auto">
      <AdminNav />
      <AdminNavbar />
      <Outlet />
      <AdminFooter />
    </div>
  );
};
