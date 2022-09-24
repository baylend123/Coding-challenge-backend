// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  if(req.method === 'GET'){
    const posts = await prisma.post.findMany({
      orderBy: [
        {
          id: 'asc',
        }
      ],
      include : {
        author : {
          include: {
            state : true
          }
        },
      }
    })
    res.json(posts)
  }
}
