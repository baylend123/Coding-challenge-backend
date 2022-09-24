import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res){
  console.log(req.body)
    const updatePost = await prisma.post.update({
        where: {
          id: parseInt(req.query.postId)
        },
        data: req.body
      })
    res.json(updatePost)
}