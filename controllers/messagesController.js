import prisma from "../lib/prisma.js";

async function getAllMessages(req, res, next) {
    const messages = await prisma.message.findMany()
    res.json(messages)
}

export { getAllMessages }