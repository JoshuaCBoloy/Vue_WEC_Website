import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginPage from '@/views/LoginPage.vue'
import RegisterPage from '@/views/RegisterPage.vue'
import eBooksPage from '@/views/eBooksPage.vue'
import BookPdf from '@/views/BookPdf.vue'
import ParallelPage from '@/views/ParallelPage.vue'
import KingJames from '@/views/KingJames.vue'
import CrossReference from '@/views/CrossReference.vue'
import WisdomBible from '@/views/WisdomBible.vue'
import BiblePlus from '@/views/BiblePlus.vue'
import BibleAtlas from '@/views/BibleAtlas.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: RegisterPage
  },
  {
    path: '/ebooks',
    name: 'eBooksPage',
    component: eBooksPage
  },
  {
    path: '/book',
    name: 'BookPdf',
    component: BookPdf,
    props: true
  },
  {
    path: '/parallel',
    name: 'ParallelPage',
    component: ParallelPage
  },
  {
    path: '/kingjames',
    name: 'KingJames',
    component: KingJames
  },
  {
    path: '/crossreference',
    name: 'CrossReference',
    component: CrossReference
  },
  {
    path: '/wisdombible',
    name: 'WisdomBible',
    component: WisdomBible
  },
  {
    path: '/bibleplus',
    name: 'BiblePlus',
    component: BiblePlus
  },
  {
    path: '/bibleatlas',
    name: 'BibleAtlas',
    component: BibleAtlas
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
