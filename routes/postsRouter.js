import { Router } from "express"
import { getAllPosts, createPost, editPost, getOnePost } from "../controllers/postsController.js"
import passport from "passport";

const postsRouter = Router();

postsRouter.get("/", getAllPosts)
postsRouter.post("/create", passport.authenticate("jwt", { session: false }), createPost)
postsRouter.post("/edit", passport.authenticate("jwt", { session: false }), editPost)
// postsRouter.post("/delete/:id", isAuth, deletepost)
postsRouter.get("/edit/:id", getOnePost)

export default postsRouter