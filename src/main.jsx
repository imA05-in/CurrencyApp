import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { createBrowserRouter, RouterProvider } from "react-router";
import Content from "./pages/Content.jsx";
import { Compare, Favorites, History, Log } from "./components/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "content/",
        element: <Content />,
        children: [
          {
            path: "history",
            element: <History />,
          },
          {
            path: "compare",
            element: <Compare />,
          },
          {
            path: "favourites",
            element: <Favorites />,
          },
          { path: "log", element: <Log /> },
        ],
      },
      {
        index: true,
        element: <Content />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
