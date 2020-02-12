import Vue from 'vue'
import VueRouter from 'vue-router'
import Latest from '@/components/Latest'
import Movie from '@/components/Movie'


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
    ]
})