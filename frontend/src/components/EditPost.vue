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
        post.created_at = post?.created_at.slice(0,10)
        return {post}
    },methods:{
        submitHandler(post, body){
          post.Body = body
          store.updatePost(post)
          return this.$router.push(`/posts`)
        }
    }
})
</script>
<template>
  <div class="w-[550px] h-[400px] flex flex-col items-center bg-slate-100 rounded p-[10px]">
    Edit The Post Below
    <div class="w-[90%] h-0 border border-gray-300 mb-[5px] mt-[10px]"></div>
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
  <div class="flex items-center" >
    <label>Edit the title here : </label>
  <FormKit :classes="{
    input: '$reset w-[400px] align-top bg-slate-100 focus-none border-2  rounded ',
   }"
    type="text"
    v-model="post.Title"/>
  </div>
  <div class="flex items-center" >
    <label>Edit the Date here : </label>
  <FormKit :classes="{
    input: '$reset w-[400px] align-top bg-slate-100 focus-none border-2  rounded ',
   }"
   type="date"
    v-model="post.created_at"/>
  </div>
  <div class="w-[90%] h-0 border border-gray-300 mb-[5px] mt-[10px]"></div>
  <label>Edit the Body of the post below </label>
  <!-- <div class="w-[90%] h-0 border border-gray-300 mb-[5px] mt-[10px]"></div> -->
  <FormKit :classes="{
    input: '$reset h-[400px] w-[550px] align-top bg-slate-100 focus-none p-1',
   }"
    type="textarea"
    v-model="post.Body"/>
    <FormKit
  type="submit"
  :classes="{
    input:'border bg-slate-300 rounded w-[80px] mt-[10px]'
  }"
  
/>
</FormKit>
  </div>


</template>