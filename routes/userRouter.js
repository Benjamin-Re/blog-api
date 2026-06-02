import { Router } from "express";
import { addUser } from "../controllers/userController.js";
import { passport } from "../config/passport.js";

const userRouter = Router();

userRouter.post("/signup", addUser);

userRouter.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return next(err);
    if (!user) {
      console.log("Login failed:", info?.message);
      return res.redirect("/users/login");
    }
    req.logIn(user, (err) => {
      if (err) return next(err);
      res.redirect("/");
    });
  })(req, res, next);
});

userRouter.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    } else {
      res.redirect("/");
    }
  });
});

export default userRouter;
