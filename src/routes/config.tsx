import { createBrowserRouter } from "react-router-dom";

import { ErrorPage } from "../error-page";

import { Root, loader as rootLoader, action as rootAction } from "./root";
import { Contact, loader as contactLoader, action as contactAction } from "./contact";
import { EditContact, action as editContactAction } from "./edit-contact";
import { action as destroyAction } from "./destroy";
import { Index } from ".";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [{
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Index />
        },
        {
          loader: contactLoader,
          action: contactAction,
          path: "contacts/:contactId",
          element: <Contact />,
        },
        {
          action: editContactAction,
          loader: contactLoader,
          path: "contacts/:contactId/edit",
          element: <EditContact />,
        },
        {
          path: "contacts/:contactId/destroy",
          action: destroyAction,
          errorElement: <ErrorPage />
        },
      ],
    }]
  },
]);

export const PAGE_ANIMATION = {
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      duration: .3,
      ease: 'easeOut',
      bounce: 0
    }
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: .3,
      ease: 'easeOut',
      bounce: 0
    }
  }
}

export { router };
