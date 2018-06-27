<template>
  <div>
    <Navigator></Navigator>
    <div class="content">
      <resume></resume>
    </div>
    <div class="clear"></div>
  </div>
</template>

<script>
import Navigator from '../components/Navigator'
import Resume from '../components/Resume'

export default {
  name: 'ResumePage',
  components: {Resume, Navigator},
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
