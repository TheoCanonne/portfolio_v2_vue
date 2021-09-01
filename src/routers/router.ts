import HomePage from '../pages/HomePage.vue';
import Experiences from '../pages/Experiences.vue';
import AboutMe from '../pages/AboutMe.vue';
import Projects from '../pages/Projects.vue';
import * as VueRouter from 'vue-router';

const routes = [
  { path: '/', component: HomePage },
  { path: '/experiences', component: Experiences },
  { path: '/about-me', component: AboutMe },
  { path: '/projects', component: Projects },
]

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
})