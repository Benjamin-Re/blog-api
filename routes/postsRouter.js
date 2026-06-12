import { Router } from "express"
import { getAllPosts, createPost } from "../controllers/postsController.js"
import { isAuth } from '../config/passport.js'

const postsRouter = Router();

postsRouter.get("/", getAllPosts)
postsRouter.post("/create", isAuth, createPost)
// postsRouter.post("/delete/:id", isAuth, deletepost)

export default postsRouter