import { Route, Routes } from "react-router-dom";
import Session from "../pages/session";
import Auth from "../pages/auth";
import Home from "../pages/home";
import Buildings from "../pages/buildings";
import NotFound from "../pages/not-found/";

function Router() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="session">
        <Route index element={<Session />} />
        <Route path="buildings" element={<Buildings />} />
      </Route>
      <Route path="auth" element={<Auth />} />
    </Routes>
  );
}

export default Router;
