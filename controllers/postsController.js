import prisma from "../lib/prisma.js";

async function getAllPosts(req, res) {
    const posts = await prisma.post.findMany()
    res.json(posts)
}

async function createPost(req, res) {
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

async function editPost(req, res) {
    const title = req.body.title
    const content = req.body.content
    const postId = req.body.id
    await prisma.post.update({
        where: { id: Number(postId)},
        data: { title, content}
    })
    res.status(200).json({"update": "success"})
}

async function getOnePost(req, res) {
    const post = await prisma.post.findUnique({
        where: { id: Number(req.params.id) }
    })
    res.status(200).json({ "post": post})
}

async function deletePost(req, res) {
    await prisma.post.delete({
        where: { id: Number(req.body.id) }
    })
    res.status(200).json({ "deleted": "success"})
}

export { getAllPosts, createPost, editPost, getOnePost, deletePost }