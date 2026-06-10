import prisma from "../lib/prisma.js";

async function getAllMessages(req, res, next) {
    const messages = await prisma.message.findMany()
    res.json(messages)
}

async function createMessage(req, res, next) {
    const title = req.body.title
    const content = req.body.content
    await prisma.message.create({
        data: {
            title: title,
            content: content
        },
    })
    res.status(200).json({title, content})
}

export { getAllMessages, createMessage }