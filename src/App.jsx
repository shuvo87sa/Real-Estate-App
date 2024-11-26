import HomePage from "./routes/homePage/homePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./routes/listPage/listPage";
import Layout from "./routes/layout/layout";
import SinglePage from "./routes/singlePage/SinglePage";
import { listData } from "./lib/dummydata";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage properties={listData} />,
        },
        {
          path: "/:id",
          element: <SinglePage properties={listData} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
