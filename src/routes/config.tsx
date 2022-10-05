import { createBrowserRouter } from "react-router-dom";

import { ErrorPage } from "../error-page";

import { Root, loader as rootLoader, action as rootAction } from "./root";
import { Contact, loader as contactLoader } from "./contact";
import { EditContact, action as editContactAction } from "./edit-contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        loader: contactLoader,
        path: "contacts/:contactId",
        element: <Contact />,
      },
      {
        action: editContactAction,
        loader: contactLoader,
        path: "contacts/:contactId/edit",
        element: <EditContact />,
      },
    ],
  },
]);

export { router };
