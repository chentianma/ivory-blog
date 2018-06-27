<template>
  <nav class="nav" :style="{height: this.navHeight}">
    <div class="nav-content">
      <div class="nav-siteName">
        <p>IVORY</p>
      </div>
      <div class="nav-logo">
        <img class="nav-logo-img" src="/static/image/333.png">
      </div>
      <ul class="nav-list">
        <router-link class="nav-title" to="/"><li>首页</li></router-link>
        <router-link  class="nav-title" to="/posts"><li>文章</li></router-link>
        <router-link  class="nav-title" to="/resume"><li>简历</li></router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigator',
  data () {
    return {
      navHeight: window.innerHeight + 'px'
    }
  }
}
</script>

<style scoped>
  .nav {
    opacity: 0.9;
    position: fixed;
    width: 22%;
    float: left;
    background-color: #ffffff;
    box-shadow: 3px -3px 5px dimgray;
    border-left: 5px dashed #666666;
    border-right: 5px dashed #666666;
  }
  .nav:hover {
    box-shadow: 3px 3px 10px #ffffff;
  }
  .nav-content {
    margin: 0 auto;
  }
  .nav-list {
    padding-left: 0;
    width: auto;
    margin: 0 auto;
    list-style: none;
  }
  .nav-siteName {
    width: 100%;
    margin: 50px auto;
    text-align: center;
  }
  .nav-siteName p {
    font-size: 1.2em;
    color: #666666;
  }
  .nav-logo{
    width: 100%;
  }
  .nav-logo-img {
    display: block;
    width: 100px;
    height: 100px;
    margin: 50px auto;
    border: 5px solid whitesmoke;
    box-shadow: -3px 3px 5px dimgray;
    border-radius: 55px;
  }

  .nav-title {
    text-align: center;
    margin: 0 30px;
    color: #666666;
    font-size: 1.1em;
    line-height: 40px;
    text-decoration: none;
  }
  .nav-title:hover {
    font-size: 1.4em;
    color: #99ccff;
    text-shadow: -1px -1px 1px #99ccff;
  }
</style>
