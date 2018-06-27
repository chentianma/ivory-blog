<template>
  <div>
    <Navigator></Navigator>
    <div class="content">
    </div>
    <div class="clear"></div>
    <!--<SideBar></SideBar>-->
  </div>
</template>

<script>
import Navigator from '../components/Navigator'
import SideBar from '../components/sideBar'

export default {
  name: 'IndexPage',
  components: {SideBar, Navigator},
  data () {
    return {
      msg: 'Index Page!'
    }
  }
}
</script>

<style scoped>
</style>
