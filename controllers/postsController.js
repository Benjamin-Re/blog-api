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

async function editPost(req, res, next) {
    const title = req.body.title
    const content = req.body.content
    const postId = req.body.id
    await prisma.post.update({
        where: { id: Number(postId)},
        data: { title, content}
    })
    res.status(200).json({"update": "success"})
}

async function getOnePost(req, res, next) {
    const post = await prisma.post.findUnique({
        where: { id: Number(req.params.id) }
    })
    res.status(200).json({ "post": post})
}

export { getAllPosts, createPost, editPost, getOnePost }