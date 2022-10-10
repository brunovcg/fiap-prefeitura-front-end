import { Route, Routes, Navigate } from "react-router-dom";
import Session from "../pages/session";
import Auth from "../pages/auth";
import Home from "../pages/home";
import Buildings from "../pages/buildings";
import NotFound from "../pages/not-found/";
import { useStore } from "../providers/store/";
import { useEffect } from "react";

function Router() {
  const { token } = useStore();

  const protect = (component) => {
    if (!token) {
      return <Navigate to="/" />;
    }
    return component;
  };

  const logged = (component) => {
    if (token) {
      return <Navigate to="/session" />;
    }
    return component;
  };

  useEffect(() => {
    if (!token) {
      <Navigate to="/" />;
    }
  }, [token]);

  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="auth" element={logged(<Auth />)} />
      <Route path="session">
        <Route index element={protect(<Session />)} />
        <Route path="buildings" element={protect(<Buildings />)} />
      </Route>
    </Routes>
  );
}

export default Router;
