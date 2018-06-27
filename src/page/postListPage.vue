<template>
  <div>
    <Navigator></Navigator>
    <div class="content">
      <PostList></PostList>
    </div>
    <div class="clear"></div>
  </div>
</template>

<script>
import Navigator from '../components/Navigator'
import PostList from '../components/PostList'
// import SideBar from '../components/sideBar'

export default {
  name: 'PostListPage',
  components: {PostList, Navigator},
  data () {
    return {
      msg: 'Index Page!'
    }
  }
}
</script>

<style scoped>
</style>
