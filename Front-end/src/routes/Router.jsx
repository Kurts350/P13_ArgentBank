import { createBrowserRouter } from "react-router-dom";
import {HomePage} from '../page/HomePage';
import {Layout} from '../layout/Layout';
import { ErrorPage404 } from "../page/ErrorPage404";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage404 />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

export {router};