<template>
  <div class="flex flex-col items-center bg-gray-600 h-screen">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/posts">Posts</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
