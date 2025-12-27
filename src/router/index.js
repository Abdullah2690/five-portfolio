import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import WorksView from '@/views/WorksView.vue'
import WorkDetailView from '@/views/WorkDetailView.vue'
import ContactView from '@/views/ContactView.vue'  // Import the new ContactView
import PrivacyPolicy from '@/views/PrivacyPolicy.vue'
import FaqView from '@/views/FaqView.vue'

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
    name: 'workDetail',
    component: WorkDetailView, // ✅ Corrected
    props: true
  },
  {
    path: '/skills',
    name: 'skills',
    component: () => import('@/views/SkillsView.vue')
  },
  {
    path: '/skills/:slug',
    name: 'skill-detail',
    component: () => import('@/views/SkillDetailView.vue'),
    props: true
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: PrivacyPolicy
  },
  {
    path: '/faq',
    name: 'faq',
    component: FaqView
  },
  {
  path: '/about',
  name: 'about',
  component: () => import('@/views/AboutView.vue')
},
{
  path: '/donate',
  name: 'donate',
  component: () => import('@/views/DonateView.vue')
}]


const router = createRouter({
  history: createWebHashHistory(), // ← changed this line
  routes
})

export default router