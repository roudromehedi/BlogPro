import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BangladeshPost from '@/components/Categorys/BangladeshPost.vue'
import BiographyPost from '@/components/Categorys/BiographyPost.vue'
import BookMoviePost from '@/components/Categorys/BookMoviePost.vue'
import Fable from '@/components/Categorys/Fable.vue'
import HistoryPost from '@/components/Categorys/HistoryPost.vue'
import LibraryPost from '@/components/Categorys/LibraryPost.vue'
import LifeStylePost from '@/components/Categorys/LifeStylePost.vue'
import Science from '@/components/Categorys/Science.vue'
import SportPost from '@/components/Categorys/SportPost.vue'
import WorldPost from '@/components/Categorys/WorldPost.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:id',
      name: 'library',
      component: LibraryPost
    },
    {
      path: '/:id',
      name: 'history',
      component: HistoryPost
    },
    {
      path: '/:id',
      name: 'sport',
      component: SportPost
    },
    {
      path: '/:id',
      name: 'bangladesh',
      component: BangladeshPost
    },
    {
      path: '/:id',
      name: 'world',
      component: WorldPost
    },
    {
      path: '/:id',
      name: 'book',
      component: BookMoviePost
    },
    {
      path: '/:id',
      name: 'science',
      component: Science
    },
    {
      path: '/:id',
      name: 'biography',
      component: BiographyPost
    },
    {
      path: '/:id',
      name: 'life',
      component: LifeStylePost
    },
    {
      path: '/:id',
      name: 'fable',
      component: Fable
    }
  ]
})

export default router
