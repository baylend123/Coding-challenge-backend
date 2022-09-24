<script>
import { defineComponent } from 'vue';
// import { FormKit } from '@formkit/vue';
  import {postsStore} from '@/store/index'
  let store;
  export default defineComponent({
    name : 'EditPost',
    data(){
      store = postsStore()
        store.getPosts()
        let id = this.$route.params.id
        const post = store.$state.posts.find(el => el.id === parseInt(id, 10))
        const res = {}
        res.Body = post.Body
        return {post}
    },methods:{
        submitHandler(post, body){
          post.Body = body
          console.log(body, post)
          store.updatePost(post)
          return ''
        }
    }
})
</script>
<template>
  <div class="w-[500px] h-[400px] flex flex-col items-center bg-slate-100 rounded">
    Edit The Post Below
    <FormKit
    :classes="{
      form:'flex flex-col items-center '
    }"
    type="form"
    id="registration-example"
    :form-class="submitted ? 'hide' : 'show'"
    submit-label="Register"
    @submit="(e) => submitHandler(post, e)"
    :actions="false"
    
  >

  <FormKit :classes="{
    input: '$reset h-[400px] w-[500px] align-top bg-slate-100 focus-none p-1',
   }"
    type="textarea"
    v-model="post.Body"/>
    <FormKit
  type="submit"
  
/>
</FormKit>
  </div>


</template>