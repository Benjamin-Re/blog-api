import { Router } from "express"
import { getAllMessages } from "../controllers/messagesController.js"
// import { isAuth } from '../config/passport'

const messagesRouter = Router();

messagesRouter.get("/", getAllMessages)
// messagesRouter.post("/create-message", isAuth, validateMessageData, addNewMessage)
// messagesRouter.post("/delete/:id", isAuth, deleteMessage)

export default messagesRouter