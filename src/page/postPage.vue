<template>
  <div>
    <Navigator></Navigator>
    <div class="content">
      <post></post>
    </div>
    <SideBar></SideBar>
  </div>
</template>

<script>
import Navigator from '../components/Navigator'
import Post from '../components/Post'
import SideBar from '../components/sideBar'

export default {
  name: 'IndexPage',
  components: {SideBar, Post, Navigator},
  data () {
    return {}
  }
}
</script>

<style scoped>
</style>
