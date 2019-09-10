import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import Overview from "./views/Overview";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import Feeds from "./views/Feeds";
import Sources from "./views/Sources";
import FeedsPreview from "./views/FeedsPreview";
import Login from "./views/Login";
import EmptyLayout from "./layouts/Empty";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/overview" />
  },
  {
    path: "/overview",
    layout: DefaultLayout,
    component: Overview
  },
  {
    path: "/user-profile",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/feeds",
    layout: DefaultLayout,
    component: Feeds
  },
  {
    path: "/sources",
    layout: DefaultLayout,
    component: Sources
  },
  {
    path: "/feeds-preview",
    layout: DefaultLayout,
    component: FeedsPreview
  },
  {
    path: "/login",
    exact: false,
    layout: EmptyLayout,
    component: Login
  },
];
