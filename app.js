import express from "express";
import userRouter from "./routes/userRouter.js";
import postsRouter from './routes/postsRouter.js'
import cors from "cors"

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
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
app.use("/posts", postsRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT, (error) => {
  if (error) { throw error; }
  console.log(`My first Express app - listening on port ${PORT}!`);
});
  