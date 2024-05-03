import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Route, Link } from "react-router-dom";
import { Routes } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import { AdminLayout } from "./layouts/AdminLayout";
import { AppFooter } from "./layouts/AppFooter";
import { AppLayout } from "./layouts/AppLayout";
import { AppNavbar } from "./layouts/AppNavbar";
import { About } from "./pages/About";
import { AddProduct } from "./pages/admin/AddProduct";
import { AdminPanel } from "./pages/admin/AdminPanel";
import { Products } from "./pages/admin/Products";
import { Users } from "./pages/admin/Users";
import { Collections } from "./pages/Collections";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { NewArrivals } from "./pages/NewArrivals";
import { NotFound } from "./pages/NotFound";
import { Register } from "./pages/Register";

function App() {
  return (
    <>
      <Routes>
        <Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="collection" element={<Collections />} />
          <Route path="contact" element={<Contact />} />
          <Route path="newarrivals" element={<NewArrivals />} />
        </Route>
        <Route path="*" element={<NotFound />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route
            index
            element={
              <PrivateRoute role="admin">
                <AdminPanel />
              </PrivateRoute>
            }
          />
          <Route
            path="products"
            element={
              <PrivateRoute role="admin">
                <Products />
              </PrivateRoute>
            }
          />
          <Route
            path="users"
            element={
              <PrivateRoute role="admin">
                <Users />
              </PrivateRoute>
            }
          />
          <Route
            path="addProduct"
            element={
              <PrivateRoute role="admin">
                <AddProduct />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
