import { Router } from "express"
import { getAllComments, createComment, editComment, getOneComment, deleteComment, getAllCommentsPerPost } from "../controllers/commentsController.js"
import { passport } from "../config/passport.js";

const commentsRouter = Router();

commentsRouter.get("/", getAllComments)
commentsRouter.post("/create", createComment)
commentsRouter.post("/edit", editComment)
commentsRouter.post("/delete", passport.authenticate("jwt", { session: false }), deleteComment)
commentsRouter.get("/post/:postId", getAllCommentsPerPost)
commentsRouter.get("/:id", getOneComment)

export default commentsRouter