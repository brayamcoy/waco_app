import { Application } from "express";
import auth from "./auth";
import users from "./users";
import verifyToken from "../middlewares/auth";

export const paths = {
  auth: "/auth",
  users: "/users",
};

// main routes imports

const routes = (app: Application) => {
  app.use(paths.auth, auth);
  app.use(paths.users, [verifyToken], users);
};
export default routes;
