const express = require("express");
const { isAuth } = require("../middlewares/isAuth.middleware");

const {
  getAllUsers,
  register,
  login,
  checkSession,
} = require("../controllers/users.controllers");

const usersRouter = express.Router();

usersRouter.get("/", [isAuth], getAllUsers);
usersRouter.post("/checksession", [isAuth], checkSession); 
usersRouter.post("/register", register);
usersRouter.post("/login", login);

module.exports = usersRouter;