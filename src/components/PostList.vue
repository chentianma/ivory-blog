<template>
    <div class="posts">
      <ul class="post-list">
        <li class="post" v-for="(post, index) in postList" v-bind:key="index">
          <router-link :to="{name: 'Post', params: {id: post.id}}">
            <img class="post-img" v-bind:src="post.img">
          <div class="post-header">
            <p class="post-header-title">{{truncate(post.title, 18)}}</p>
            <p class="post-header-category"><span>Category : </span>{{post.category}}</p>
            <p class="post-header-date"><span>Date : </span>{{post.publishedDate}}</p>
            <div class="clear"></div>
          </div>
          </router-link>
          <!--<p class="post-header-content">{{post.content}}</p>-->
        </li>
      </ul>
      <div class="clear"></div>
    </div>
</template>

<script>
export default {
  name: 'PostList',
  data () {
    return {
      postList: [
        {
          id: 1,
          title: '一篇不靠谱的文章一篇不靠谱的文章一篇不靠谱的文章一篇不靠谱的文章',
          content: '不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容',
          publishedDate: '2018-01-01',
          author: '不靠谱',
          category: 'Funny',
          img: '/static/image/123.png'
        },
        {
          id: 5,
          title: '一篇不靠谱的文章',
          content: '不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容',
          publishedDate: '2018-01-01',
          author: '不靠谱',
          category: 'Funny',
          img: '/static/image/111.png'
        },
        {
          id: 2,
          title: '一篇不靠谱的文章',
          content: '不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容',
          publishedDate: '2018-01-01',
          author: '不靠谱',
          category: 'Funny',
          img: '/static/image/321.jpg'
        },
        {
          id: 5,
          title: '一篇不靠谱的文章',
          content: '不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容',
          publishedDate: '2018-01-01',
          author: '不靠谱',
          category: 'Funny',
          img: '/static/image/222.png'
        },
        {
          id: 3,
          title: '一篇不靠谱的文章',
          content: '不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容',
          publishedDate: '2018-01-01',
          author: '不靠谱',
          category: 'Funny',
          img: '/static/image/333.png'
        },
        {
          id: 5,
          title: '一篇不靠谱的文章',
          content: '不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容',
          publishedDate: '2018-01-01',
          author: '不靠谱',
          category: 'Funny',
          img: '/static/image/444.png'
        },
        {
          id: 4,
          title: '一篇不靠谱的文章',
          content: '不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容',
          publishedDate: '2018-01-01',
          author: '不靠谱',
          category: 'Funny',
          img: '/static/image/111.png'
        },
        {
          id: 5,
          title: '一篇不靠谱的文章',
          content: '不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容不靠谱的内容',
          publishedDate: '2018-01-01',
          author: '不靠谱',
          category: 'Funny',
          img: '/static/image/222.png'
        }
      ]
    }
  },
  methods: {
    truncate: function (content, num) {
      if (content.length <= num - 3) {
        return content
      } else {
        return content.substring(0, num - 3) + '...'
      }
    }
  }
}
</script>

<style scoped>
  .posts {
    opacity: 0.9;
    width: 800px;
    min-height: 500px;
    margin: 0 auto;
    background-color: #ffffff;
    box-shadow: -3px 3px 5px dimgray;
    border-left: 5px dashed #666666;
    border-right: 5px dashed #666666;
  }
  .posts:hover {
    box-shadow: -2px 5px 15px #ffffff;
  }
  .post-list {
    width: 100%;
    display: inline-block;
    list-style: none;
    padding-left: 0;
  }
  .post {
    float: left;
    width: 320px;
    margin: 20px 40px;
    box-shadow: -1px 1px 5px dimgray;
    background-color: #ffffff;
    /*border: 1px solid gray;*/
  }
  .post a{
    text-decoration: none;
  }
  .post:hover {
    box-shadow: -2px 5px 15px #99ccff;
  }
  .post-img {
    width: 320px;
    height: 320px;
  }
  .post-header {
    opacity: 0.7;
    font-size: 0.7em;
    margin-bottom: 20px;
    text-align: center;
    color: gray;
  }
  .post-header span {
    color: blueviolet;
  }
  .post-header-title {
    text-align: center;
    width: 100%;
    font-size: 1.5em;
    color: blueviolet;
  }
  .post-header-category {
    margin-left: 10%;
    text-align: left;
    width: 40%;
    float: left;
  }
  .post-header-date {
    margin-right: 10%;
    text-align: right;
    width: 40%;
    float: left;
  }
  .post-header-content {
    text-align: justify;
  }

</style>
