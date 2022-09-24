This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
### if you would like to just test the backend run the up command, and that should be all you need to do

Clone this repo and run 
```bash
docker compose up
```


Open [http://localhost:3000/api/posts](http://localhost:3000) with your browser to see the result.

## Routes list
### /api/posts - Get all posts - GET
### /api/postId/edit - edit post - POST
### /api/postId - get info on single post -GET
Expected body for update post 
```bash
{
            Title,
            Body, 
            user_uuid,
            created_at,
            updated_at
}
```
/api

# Run the front end, 
### cd into frontend
### npm i or npm install
### npm run serve


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Tailwind docs](https://tailwindcss.com/) - CSS library
- [FormKit Docs](https://formkit.com/) - Library used for form inputs

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

