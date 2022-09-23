<template>
  <div class="flex flex-col items-center gap-5 w-screen h-screen">
    <PostsList />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import '../assets/app.css'
export default defineComponent({
  name: 'HomeView',
  components:{ },
});
</script>

<style>
  .contain{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>