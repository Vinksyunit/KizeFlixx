import Vue from 'vue'
import VueRouter from 'vue-router'
import Latest from '@/components/Latest'
import Movie from '@/components/Movie'
import Search from '@/components/Search'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Latest',
      component: Latest
    },
    {
      path: '/movie/:id',
      name: 'Movie',
      props: true,
      component: Movie
    },
    {
      path: '/search/:name',
      name: 'Search',
      props: true,
      component: Search
    }
  ],
  mode: 'history'
})
