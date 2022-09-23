<script>
  import { defineComponent } from 'vue';
  import {postsStore} from '@/store/index'
  export default defineComponent({
    name: 'PostsList',
    data() {
      const store = postsStore()
      store.getPosts()

      
        return {store}
    },
    methods:{
      edit(id){
        this.$router.push(`/edit/${id}`)
      }
    }
  });
</script>
<template>
    <div class="flex flex-col items-center w-3/4 h-60 border border-black rounded bg-gray-400 p-6" v-for="post in store.posts" :key="post.id">
        <div>
          Title : {{post.Title}}
        </div>
        <div>
          Created : {{new Date(post.created_at)}}
        </div>
        <div class="w-3/4 h-0 border border-gray-300"></div>
        <div>
          {{post.Body}}
        </div>
        <button @click="() => edit(post.id)" class="border bg-slate-300 rounded w-10">edit</button>
    </div>
</template>
