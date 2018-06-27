import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import IndexPage from '@/page/IndexPage'
import ResumePage from '@/page/ResumePage'
import PostPage from '@/page/PostPage'
import PostListPage from '@/page/PostListPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: IndexPage
    },
    {
      path: '/resume',
      name: 'Resume',
      component: ResumePage
    },
    {
      path: '/post/:id',
      name: 'Post',
      component: PostPage
    },
    {
      path: '/posts',
      name: 'Posts',
      component: PostListPage
    }
  ]
})
