import { NotFound } from "./404/NotFound";
import { EditTodoPage } from "./edit/EditTodoPage";
import { HomePage } from "./home/HomePage";
import { NewTodoPage } from "./new/NewTodoPage";

export const routes = [
  {
    path: "/",
    element: <HomePage />,
    text: "Home",
    // private: false,
  },
  {
    path: "/new",
    element: <NewTodoPage />,
    text: "New",
    // private: false,
  },
  {
    path: "/edit",
    element: <EditTodoPage />,
    text: "Edit",
    // private: false,
    children: [
      {
        path: ":id",
        // element: ,
        // text: "",
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
    // text: "NotFound",
  },
];
