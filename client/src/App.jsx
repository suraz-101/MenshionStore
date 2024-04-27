import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Route, Link } from "react-router-dom";
import { Routes } from "react-router-dom";
import { AdminLayout } from "./layouts/AdminLayout";
import { AppFooter } from "./layouts/AppFooter";
import { AppLayout } from "./layouts/AppLayout";
import { AppNavbar } from "./layouts/AppNavbar";
import { About } from "./pages/About";
import { AdminPanel } from "./pages/admin/AdminPanel";
import { Products } from "./pages/admin/Products";
import { Users } from "./pages/admin/Users";
import { Collections } from "./pages/Collections";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { NewArrivals } from "./pages/NewArrivals";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="collection" element={<Collections />} />
          <Route path="contact" element={<Contact />} />
          <Route path="newarrivals" element={<NewArrivals />} />
          <Route path="*" element={<NotFound />} />
          <Route path="login" element={<Login />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminPanel />} />
          <Route path="products" element={<Products />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
