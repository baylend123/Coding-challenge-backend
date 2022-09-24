<template>
  <div class="flex flex-col items-center bg-gray-600 h-screen">
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 w-screen flex flex-row justify-around mb-10">
      <router-link to="/">Home</router-link>
      <router-link to="/posts">Posts</router-link>
    </nav>
    <router-view/>
  </div>
</template>

