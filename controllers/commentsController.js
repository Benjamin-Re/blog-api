import prisma from "../lib/prisma.js";

async function getAllComments(req, res) {
    const comments = await prisma.comment.findMany()
    res.json(comments)
}

async function createComment(req, res) {
    const author = req.body.author
    const body = req.body.body
    const post = Number(req.body.postId)
    await prisma.comment.create({
        data: {
            author: author,
            body: body,
            postId: post
        },
    })
    res.status(200).json({author, body, post})
}

async function editComment(req, res) {
    const author = req.body.author
    const body = req.body.body
    const postId = req.body.postId
    const commentId = req.body.commentId
    await prisma.comment.update({
        where: { id: Number(commentId)},
        data: { id: commentId, author, body, postId }
    })
    res.status(200).json({"update": "success"})
}

async function getOneComment(req, res) {
    const comment = await prisma.comment.findUnique({
        where: { id: Number(req.params.id) }
    })
    res.status(200).json({ "comment": comment})
}

async function deleteComment(req, res) {
    await prisma.comment.delete({
        where: { id: Number(req.body.id) }
    })
    res.status(200).json({ "deleted": "success"})
}

export { getAllComments, createComment, editComment, getOneComment, deleteComment }