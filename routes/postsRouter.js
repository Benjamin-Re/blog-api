import { Router } from "express"
import { getAllPosts, createPost, editPost, getOnePost, deletePost } from "../controllers/postsController.js"
import { passport } from "../config/passport.js";

const postsRouter = Router();

postsRouter.get("/", getAllPosts)
postsRouter.post("/create", passport.authenticate("jwt", { session: false }), createPost)
postsRouter.post("/edit", passport.authenticate("jwt", { session: false }), editPost)
postsRouter.post("/delete", passport.authenticate("jwt", { session: false }), deletePost)
postsRouter.get("/:id", getOnePost)

export default postsRouter