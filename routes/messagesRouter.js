import { Router } from "express"
import { getAllMessages, createMessage } from "../controllers/messagesController.js"
import { isAuth } from '../config/passport.js'

const messagesRouter = Router();

messagesRouter.get("/", getAllMessages)
messagesRouter.post("/create", isAuth, createMessage)
// messagesRouter.post("/delete/:id", isAuth, deleteMessage)

export default messagesRouter