import { Router } from "express"
import { getAllPosts, createPost, editPost, getOnePost } from "../controllers/postsController.js"
import { isAuth } from '../config/passport.js'

const postsRouter = Router();

postsRouter.get("/", getAllPosts)
postsRouter.post("/create", isAuth, createPost)
postsRouter.post("/edit", editPost)
// postsRouter.post("/delete/:id", isAuth, deletepost)
postsRouter.get("/edit/:id", getOnePost)

export default postsRouter