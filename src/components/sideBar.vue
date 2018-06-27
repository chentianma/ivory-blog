<template>
  <div class="side-bar">
    <ul class="btn-list">
      <router-link to="/posts"><li class="btn"><i class="icon ion-md-share-alt"></i></li></router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SideBar'
}
</script>

<style scoped>
  .side-bar {
    width: 80px;
    position: fixed;
    right: 40px;
    bottom: 200px
  }
  .btn-list {
    list-style: none;
    padding-left: 0;
  }
  .btn {
    opacity: 0.9;
    color: #333333;
    margin: 10px auto 0 auto;
    width: 50px;
    height: 50px;
    background-color: whitesmoke;
    border: 1px whitesmoke;
    border-radius: 25px;
    text-align: center;
    box-shadow: 1px 1px 5px gray;
  }
  .btn i {
    padding-top: 20px;
    color: #666666;
    font-size: 40px;
  }
  .btn:hover {
    color: #333333;
    margin-top: 10px;
    width: 60px;
    height: 60px;
    border-radius: 30px;
    box-shadow: 1px 1px 5px #ffffff;

  }
  .btn:hover i {
    padding-top: 20px;
    font-size: 50px;
  }

</style>
