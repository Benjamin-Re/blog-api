import prisma from "../lib/prisma.js";

async function getAllPosts(req, res, next) {
    const posts = await prisma.post.findMany()
    res.json(posts)
}

async function createPost(req, res, next) {
    const title = req.body.title
    const content = req.body.content
    await prisma.post.create({
        data: {
            title: title,
            content: content
        },
    })
    res.status(200).json({title, content})
}

export { getAllPosts, createPost }