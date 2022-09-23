import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostsList from '../components/PostsList.vue'
import EditPost from '../components/EditPost.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/posts',
    name: 'posts',
    component: PostsList
  },
  {
    path: '/edit/:id',
    name: 'home',
    component: EditPost
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
