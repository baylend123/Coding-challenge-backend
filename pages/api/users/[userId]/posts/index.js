import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res){
    const {userId} = req.query
    const newPost = await prisma.post.create({
        data: {...req.body, user_uuid : parseInt(userId, 10)}
      })
    res.json(newPost)
}