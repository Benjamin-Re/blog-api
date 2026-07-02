import express from "express";
import userRouter from "./routes/userRouter.js";
import postsRouter from './routes/postsRouter.js'
import commentsRouter from './routes/commentsRouter.js'
import cors from "cors"

const app = express();

app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:4001'],
  credentials: true
}))         
app.use(express.json());

app.get("/", (req, res) => {
  if(req.user) {
    res.json({ 'greeting': `Hello ${req.user.name}`})
  } else {
    res.json({ 'greeting': 'Hello World'})
  }
})

app.use("/users", userRouter);
app.use("/posts", postsRouter);
app.use("/comments", commentsRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT, (error) => {
  if (error) { throw error; }
  console.log(`My first Express app - listening on port ${PORT}!`);
});
  