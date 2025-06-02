import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import WorksView from '@/views/WorksView.vue'
import WorkDetailView from '@/views/WorkDetailView.vue'
import ContactView from '@/views/ContactView.vue'  // Import the new ContactView

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/works',
    name: 'works',
    component: WorksView
  },
  {
    path: '/works/:slug',
    name: 'work-detail',
    component: WorkDetailView,
    props: true
  },
  {
    path: '/contact',  // Define the new route for the contact page
    name: 'contact',
    component: ContactView  // Add the new route
  }
  // Add other routes as needed
]

const router = createRouter({
  history: createWebHashHistory(), // ← changed this line
  routes
})

export default router