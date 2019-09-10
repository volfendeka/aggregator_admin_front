import React from "react";
import {Badge, Button, Dropdown, Nav, NavItem, NavLink} from "shards-react";

import Notifications from "./Notifications";
import UserActions from "./UserActions";
import FeedRunnerActions from "./FeedRunnerActions";

export default () => (
  <Nav navbar className="border-left flex-row">
    <FeedRunnerActions />
    <Notifications />
    <UserActions />
  </Nav>
);
