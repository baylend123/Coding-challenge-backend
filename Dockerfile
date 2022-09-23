FROM node
workdir /coding-challenge-backend
copy . .
env DATABASE_URL "postgresql://baylendoss:baylendoss@db:5432/mydb?schema=public"
expose 3000
run npm install
run npx prisma generate
