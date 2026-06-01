import express from "express";
import session from "express-session";
import { passport } from "./config/passport.js";
import userRouter from "./routes/userRouter.js";
import cors from "cors"


const app = express();

app.use(cors())         
app.use(express.json());
app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => res.json("{ 'greeting': 'Hello World'}"))

app.use("/users", userRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, (error) => {
  if (error) { throw error; }
  console.log(`My first Express app - listening on port ${PORT}!`);
});
  