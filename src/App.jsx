import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./pages/Home";
import OtherPage from "./pages/Other";

import Layout from "./components/Layout";
import ErrorBoundary from "./components/ErrorBoundary";

const routesFromElements = createRoutesFromElements(
  <Route element={<Layout />}>
    <Route index element={<HomePage />} />
    <Route
      path="/other"
      element={<OtherPage />}
      errorElement={<ErrorBoundary />}
    />
  </Route>
);

const router = createBrowserRouter(routesFromElements);

export const App = () => {
  return <RouterProvider router={router} />;
};
