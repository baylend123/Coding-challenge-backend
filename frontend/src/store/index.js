import { defineStore } from 'pinia'

export const postsStore = defineStore('posts', {
  state: () => ({
     posts :[]
    }),
    actions:{
      getPosts(){
        try {
          fetch('/api/posts')
          .then(res => res.json())
          .then(arr => {
            this.posts = arr
          })
        }
        catch(e){
          console.log(e)
        }
      },
      updatePost(post){
        const {id, Body, user_uuid, updated_at} = post
        const [newTitle, newDate, newBody] = Object.values(Body)
        console.log(Body)
        fetch(`/api/posts/${post.id}/edit`, {
          method : 'POST',
          headers : {
            'Content-Type' : 'application/json'
          },
            body : JSON.stringify({
              id, 
              Title : newTitle,
              Body:newBody, 
              user_uuid, 
              created_at : new Date(newDate.split('-').join('/')), 
              updated_at
            })
          })
      }
    }
})