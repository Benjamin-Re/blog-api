import { Router } from "express"
import { getAllMessages, createMessage } from "../controllers/messagesController.js"
// import { isAuth } from '../config/passport'

const messagesRouter = Router();

messagesRouter.get("/", getAllMessages)
messagesRouter.post("/create", createMessage)
// messagesRouter.post("/delete/:id", isAuth, deleteMessage)

export default messagesRouter