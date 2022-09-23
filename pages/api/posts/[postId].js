import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
    if(req.method === 'GET'){
        const {postId} = req.query
      const post = await prisma.post.findUnique({
        where : {
            id : parseInt(postId, 10)
        },
        include : {
          author : {
            include: {
              state : true
            }
          },
        }
      })
      res.json(post)
    }
  }
  