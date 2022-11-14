import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import NotFoundPage from "./pages/NotFound";
import LoungePage from "./pages/Lounge";
import UnauthorizedPage from "./pages/Unauthorized";

import Layout from "./components/Layout";
import ErrorBoundary from "./components/ErrorBoundary";

import { AuthProvider, RequireAuth } from "./context/Auth";

const routesFromElements = createRoutesFromElements(
  <Route element={<Layout />}>
    <Route index element={<HomePage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="*" element={<NotFoundPage />} />
    <Route path="/unauthorized" element={<UnauthorizedPage />} />
    <Route element={<RequireAuth />}>
      <Route
        path="/lounge"
        element={<LoungePage />}
        errorElement={<ErrorBoundary />}
      />
    </Route>
  </Route>
);

const router = createBrowserRouter(routesFromElements);

export const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};
