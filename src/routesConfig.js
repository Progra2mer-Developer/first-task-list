import { HOME_PAGE_ROUTE, NOT_FOUND_PAGE_ROUTE } from "./constants";

import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

export const routes = [
  { name: "Home", path: HOME_PAGE_ROUTE, element: <HomePage /> },

  { name: "Not Found", path: NOT_FOUND_PAGE_ROUTE, element: <NotFoundPage /> },
];
