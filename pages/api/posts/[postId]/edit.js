import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res){
  console.log("BODY", req.body)
  // req.body.created_at = new Date(req.body.created_at.split('-').join('/'))
    const updatePost = await prisma.post.update({
        where: {
          id: parseInt(req.query.postId)
        },
        data: req.body
      })
    res.json(updatePost)
}