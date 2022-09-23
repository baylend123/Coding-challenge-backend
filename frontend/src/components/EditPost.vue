<script>
import { defineComponent } from 'vue';
// import { FormKit } from '@formkit/vue';
  import {postsStore} from '@/store/index'
  export default defineComponent({
    name : 'EditPost',
    data(){
        const store = postsStore()
        store.getPosts()
        let id = this.$route.params.id
        const post = store.$state.posts.find(el => el.id === parseInt(id, 10))
        return {post}
    },methods:{
        submitHandler(){
            return ''
        }
    }
})
</script>
<template>
  <div class="h-20 w-20 bg-white">
    <FormKit
    type="button"
    label="Checkout my label"
    help="You can use the label prop."
    outer-class="mb-5"
  />
  </div>
</template>