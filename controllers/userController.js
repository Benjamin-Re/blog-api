import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "../lib/prisma.js";

async function addUser(req, res, next) {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  await prisma.user.create({
    data: { name: req.body.name, password: hashedPassword },
  });
  return res.status(200).json({ "success": "true"});
}

async function login(req, res, next) {
  try {
    const user = await prisma.user.findFirst({ where: { name: req.body.name } });
    if (!user) return res.status(401).json({ error: "Invalid credentials" });

    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) return res.status(401).json({ error: "Invalid credentials" });

    const token = jwt.sign({ sub: user.id }, process.env.JWT_SECRET, { expiresIn: "1d" });
    return res.json({ token });
  } catch (err) {
    return next(err);
  }
}

export { addUser, login };
