import { defineStore } from 'pinia'

export const postsStore = defineStore('posts', {
  state: () => ({
     posts :[]
    }),
    getters:{
      
    },

    actions:{
      getPosts(){
        try {
          fetch('/api/posts')
          .then(res => res.json())
          .then(arr => {
            console.log(arr)
            this.posts = arr
          })
        }
        catch(e){
          console.log(e)
        }
      },
      updatePost(post){
        fetch(`/api/posts/${post.id}/edit`, {
          method : 'POST',
          headers : {
            'Content-Type' : 'applications/json'
          },
            body : JSON.stringify(post)
          
        })
      }
    }
})