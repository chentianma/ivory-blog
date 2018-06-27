<template>
  <div class="resume">
    <div class="resume-left">
      <div class="resume-photoframe">
        <img v-bind:src="resume.photo" class="resume-photo">
      </div>
      <div class="resume-info">
        <h3  class="resume-left-title">- - - - Personal Info - - - -</h3>
        <p><i class="icon ion-md-calendar"></i>生日 : {{resume.birthday}}</p>
        <p><i class="icon ion-md-pin"></i>城市 : {{resume.city}}</p>
        <p><i class="icon ion-md-contacts"></i>QQ : {{resume.QQ}}</p>
        <!--<p><i class="icon ion-md-compass"></i>地址 : {{resume.address}}</p>-->
        <p><i class="icon ion-md-mail"></i>邮箱 : {{resume.email}}</p>
      </div>
      <ul class="resume-skill-list">
        <li class="resume-left-title"><h3>- - - - Skill List - - - -</h3></li>
        <li class="resume-skill" v-for="skill in resume.skills" v-bind:key="skill.id">
          <p class="skill-name">{{skill.name}}</p>
          <!--<span class="skill-level">{{skill.level * 25 + '%'}}</span>-->
          <p v-bind:class='["skill-eval-"+skill.level]'>{{skill.evaluation}}</p>
          <div class="clear"></div>
        </li>
      </ul>
      <ul class="resume-hobby-list">
        <li  class="resume-left-title"><h3>- - - - Hobby - - - -</h3></li>
        <li class="resume-hobby" v-for="(hobby, index) in resume.hobby" v-bind:key="index">{{hobby}}</li>
        <div class="clear"></div>
      </ul>
    </div>
    <div class="resume-right">
      <div class="resume-header">
        <div class="resume-ribbon">
          <div class="resume-ribbon-text">{{resume.name}}</div>
        </div>
        <p class="word"><i class="icon ion-md-musical-note"></i> {{resume.word}}</p>
        <p class="flipWord"><i class="icon ion-md-musical-note"></i> {{resume.word}}</p>
      </div>
      <div>
        <p class="resume-right-title"><i class="icon ion-md-pulse"></i>求职意向</p>
        <div class="resume-right-block">
          <div class="resume-right-item"><p><span><strong><i class="icon ion-md-cog"></i>意向职位：</strong></span>{{resume.intention.post}}
          </p></div>
          <div class="resume-right-item"><p><span><strong><i class="icon ion-md-business"></i>意向城市：</strong></span>{{resume.intention.position}}
          </p></div>
          <div class="resume-right-item"><p><span><strong><i class="icon ion-md-wallet"></i>意向薪资：</strong></span>{{resume.intention.salary}}￥
          </p></div>
          <div class="resume-right-item"><p><span><strong><i class="icon ion-md-stopwatch"></i>入职时间：</strong></span>{{resume.intention.date}}
          </p></div>
          <div class="clear"></div>
        </div>
      </div>
      <div>
        <p class="resume-right-title"><i class="icon ion-md-book"></i>教育背景</p>
        <div class="resume-right-block">
          <table class="resume-right-table">
            <tr>
              <th class="resume-right-table-th-first">时间区间</th>
              <th class="resume-right-table-th-other">学校名称</th>
              <th class="resume-right-table-th-other">专业名称</th>
            </tr>
            <tr v-for="(edu, index) in resume.eduExperience" v-bind:key="index">
              <td class="resume-right-table-date">{{edu.beginDate}} - {{edu.endDate}}</td>
              <td class="resume-right-table-school">{{edu.school}}</td>
              <td class="resume-right-table-major">{{edu.major}}</td>
            </tr>
          </table>
        </div>
      </div>
      <div>
        <p class="resume-right-title"><i class="icon ion-md-trending-up"></i>工作经历</p>
        <div class="resume-right-block">
          <table class="resume-right-table">
            <tr>
              <th class="resume-right-table-th-first">时间区间</th>
              <th class="resume-right-table-th-other">公司名称</th>
              <th class="resume-right-table-th-other">曾任职位</th>
            </tr>
            <template v-for="(work, index) in resume.workExperience">
              <tr v-bind:key="index">
                <td class="resume-right-table-date">{{work.date}}</td>
                <td class="resume-right-table-school">{{work.company}}</td>
                <td class="resume-right-table-major">{{work.post}}</td>
              </tr>
              <tr v-bind:key="index">
                <td class="resume-right-table-desc" colspan="3">
                  <p>{{work.description}}</p>
                </td>
              </tr>
            </template>
          </table>
        </div>
      </div>
      <div>
        <p class="resume-right-title"><i class="icon ion-md-ribbon"></i>自我评价</p>
        <div class="resume-right-block">
          <p class="resume-right-evaluation">{{resume.evaluation}}</p>
        </div>
      </div>
    </div>
    <div class="clear"></div>
  </div>
</template>

<script>
export default {
  name: 'Resume',
  data () {
    return {
      resume: {
        name: 'Kevin',
        birthday: '2000-01-01',
        city: '浙江宁波',
        address: '银河市太阳区地球村',
        QQ: '819252000',
        photo: '/static/image/logo.png',
        email: 'test@test.com',
        // word: '生活就像盒子里的巧克力糖，你永远都不知道下一块会是什么颜色......',
        word: 'Where there is a will there is a way !',
        intention: {
          post: '开发工程师',
          position: '地球',
          salary: 20000,
          date: '2018-01-01'
        },
        skills: [
          {
            id: 1,
            name: 'Python',
            level: 4,
            evaluation: '精通'
          },
          {
            id: 2,
            name: 'JavaScript',
            level: 3,
            evaluation: '熟练'
          },
          {
            id: 3,
            name: 'HTML',
            level: 2,
            evaluation: '良好'
          },
          {
            id: 4,
            name: 'CSS',
            level: 1,
            evaluation: '一般'
          }
        ],
        hobby: [
          '编程',
          '竞技游戏',
          '动漫',
          '旅游',
          '看别人画画',
          '编程',
          '竞技游戏',
          '动漫',
          '旅游',
          '编程',
          '竞技游戏',
          '动漫',
          '旅游'
        ],
        eduExperience: {
          2: {
            school: '南京XXXXXXXX大学',
            beginDate: '2012/03',
            endDate: '2015/04',
            major: '电子信息工程'
          },
          1: {
            school: '南京XXXXXXXX大学',
            beginDate: '2012/01',
            endDate: '2015/02',
            major: '电子信息工程'
          }
        },
        workExperience: {
          2: {
            date: '2018/09 - 2018/10',
            company: '是你的拉卡萨诺的',
            post: 'djaksbdkasbdasbdkba',
            description: '邯郸市来哈市的还是屌丝大山地爬上哈斯；好的；啊圣诞节阿里山的拉花水陆大会SD卡是打算数据的拉货收到了哈师大哈吉斯的哈雷声大'
          },
          1: {
            date: '2018/01 - 2018/08',
            company: '的难度辣酸奶',
            post: 'djaksbdkasbdasbdkba',
            description: '邯郸市来哈市的还是屌丝大山地爬上哈斯；好的；啊圣诞节阿里山的拉花水陆大会SD卡是打算数据的拉货收到了哈师大哈吉斯的哈雷声大'
          }
        },
        evaluation: '测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试'
      }
    }
  }
}
</script>

<style scoped>
  .resume {
    opacity: 0.9;
    --main--bgcolor: #666666;
    width: 800px;
    height: 1132px;
    margin: 10px auto 10px auto;
    text-align: center;
    animation: displayShadow 0.5s;
    animation-fill-mode: forwards;
  }
  @keyframes displayShadow {
    from {
    }
    to {
      box-shadow: 3px -3px 5px dimgray;
    }
  }

  .resume i {
    margin-right: 10px
  }

  .resume-left {
    width: 233px;
    height: 100%;
    float: left;
    background-color: var(--main--bgcolor);
    border-left: 5px dashed #ffffff;
    border-right: 2px dashed var(--main--bgcolor);
  }

  .resume-right {
    overflow: scroll;
    margin: 0 auto;
    width: 560px;
    height: 100%;
    float: left;
    background-color: white;
  }

  @keyframes roatePhoto {
    from {
      width: 95%;
      height: auto;
      padding: 10px 0 30px 0;
      box-shadow: 3px 3px 5px dimgray;
      background-color: white;
      transform: rotate(0deg);
      margin: 5px 0 0 5px;
    }
    to {
      width: 95%;
      height: auto;
      padding: 10px 0 30px 0;
      box-shadow: 3px 3px 5px dimgray;
      background-color: white;
      transform: rotate(-15deg);
      margin: 5px 0 0 5px;
    }
  }

  .resume-photoframe {
    width: 90%;
    height: auto;
    padding: 10px 0 30px 0;
    box-shadow: 3px -3px 5px dimgray;
    background-color: white;
    margin: 10px 0 0 10px;
    animation: roatePhoto 1s;
    animation-fill-mode: forwards;
    /*transition: width 0.5s, height 0.5s, transform 0.5s;*/
  }

  /*.resume-photoframe:hover {*/
    /*position: relative;*/
    /*width: 100%;*/
    /*height: auto;*/
    /*transform: rotate(-20deg);*/
  /*}*/
  .resume-ribbon {
    --ribbon--bgcolor: var(--main--bgcolor);
    position: relative;
    left: 100%;
    top: 20px;
    height: 50px;
    width: 60%;
    background-color: var(--ribbon--bgcolor);
    box-shadow: 3px 3px 5px var(--ribbon--bgcolor);
    animation: slideRibbon 1s;
    animation-fill-mode: forwards;
  }
  .resume-ribbon-text {
    color: white;
    position: relative;
    top: 10px;
    /*font-family: "Malayalam MN";*/
    font-size: 1.3em;
    text-shadow: 5px 5px 5px var(--main--bgcolor)
  }
  @keyframes slideRibbon {
    from {
      left: 100%
    }
    to {
      left: 40%
    }
  }
 .resume-photo {
    width: 90%;
    height: auto;
  }

  .resume-info {
    width: 80%;
    margin: 50px auto;
    text-align: left;
    color: whitesmoke;
    line-height: 20px;
    font-size: 0.8em;
  }
  .resume-left-title {
    text-shadow: 5px 5px 5px gray;
  }

  .resume-skill-list {
    list-style: none;
    width: 80%;
    padding-left: 0;
    margin: 50px auto;
    text-align: left;
    color: whitesmoke;
    line-height: 15px;
    font-size: 0.8em;
  }

  .resume-skill {
    line-height: 15px
  }

  .skill-name {
    display: inline-block;
  }

  .skill-level {
    display: inline-block;
  }

  .skill-eval-1 {
    display: inline-block;
    background-color: #74777b;
    padding: 3px 10px;
    border-radius: 15px;
    font-weight: lighter;
    font-size: 0.3em;
    box-shadow: 1px 1px 3px dimgray;
    float: right;
  }

  .skill-eval-2 {
    display: inline-block;
    background-color: goldenrod;
    padding: 3px 10px;
    border-radius: 15px;
    font-weight: lighter;
    font-size: 0.3em;
    box-shadow: 1px 1px 3px dimgray;
    float: right;
  }

  .skill-eval-3 {
    display: inline-block;
    background-color: yellowgreen;
    padding: 3px 10px;
    border-radius: 15px;
    font-weight: lighter;
    font-size: 0.3em;
    box-shadow: 1px 1px 3px dimgray;
    float: right;
  }

  .skill-eval-4 {
    display: inline-block;
    background-color: blueviolet;
    padding: 3px 10px;
    border-radius: 15px;
    font-weight: lighter;
    font-size: 0.3em;
    box-shadow: 1px 1px 3px dimgray;
    float: right;
  }

  .resume-hobby-list {
    list-style: none;
    width: 80%;
    padding-left: 0;
    margin: 50px auto;
    text-align: left;
    color: whitesmoke;
    line-height: 15px;
    font-size: 0.8em;
  }

  .resume-hobby {
    float: left;
    margin: 10px 20px 10px 0
  }

  .resume-header {
    /*height: 100px;*/
    margin-bottom: 20px;
  }

  .resume-header .word {
    max-width: 80%;
    font-size: 1em;
    text-align: center;
    margin-top: 50px;
    margin-left: 5%;
    color: var(--main--bgcolor);
    text-shadow: -5px 5px 10px var(--main--bgcolor)
  }
  .resume-header .flipWord {
    opacity: 0.5;
    max-width: 80%;
    margin: 20px 0 0 15%;
    font-size: 1em;
    text-align: center;
    transform: rotateX(180deg);
    -webkit-transform:rotateX(180deg); /* Safari and Chrome */
    -moz-transform:rotateX(180deg); /* Firefox */
    color: var(--main--bgcolor);
    text-shadow: 5px -5px 5px var(--main--bgcolor)
  }
  .resume-right-title {
    margin: 20px 0 5px 20px;
    text-align: left;
    font-size: 1.1em;
    color: #74777b;
  }

  .resume-right-block {
    padding-top: 10px;
    padding-left: 20px;
    margin-left: 20px;
    margin-right: 20px;
    /*height: 150px;*/
    border-top: 1px dashed dimgray;
    /*box-shadow: 0 -2px 4px dimgray;*/
  }

  .resume-right-item {
    float: left;
    display: inline-block;
    /*margin-right: 80px;*/
    min-width: 250px;
  }

  .resume-right-item span {
    margin-right: 10px;
    font-size: 1em;
    color: var(--main--bgcolor);
  }

  .resume-right-item p {
    text-align: left;
    font-size: 0.9em;
    color: #74777b;
  }

  .resume-right-table {
    width: 100%;
    text-align: justify;
  }

  .resume-right-table tr {
    /*margin-bottom: 20px;*/
  }

  .resume-right-table-th-first {
    text-align: left;
    font-size: 0.9em;
    color: var(--main--bgcolor);
    padding: 10px 0
  }

  .resume-right-table-th-other {
    text-align: center;
    font-size: 0.9em;
    color: var(--main--bgcolor);
    padding: 10px 0
  }

  .resume-right-table-date {
    width: 30%;
    font-size: 0.9em;
    padding: 10px 0;
    color: cornflowerblue;
  }

  .resume-right-table-school {
    text-align: center;
    width: 40%;
    font-size: 0.9em;
    padding: 10px 0
  }

  .resume-right-table-major {
    text-align: center;
    width: 30%;
    font-size: 0.9em;
    padding: 10px 0
  }

  .resume-right-table-desc {
    text-indent: 25px;
    color: #74777b;
    padding: 0 10px 10px 10px;
    margin-bottom: 20px;
    width: 90%;
    font-size: 0.9em;
    border-style: hidden dashed dashed dashed;
    border-width: 0 1px 1px 1px;
    border-color: var(--main--bgcolor);
  }

  .resume-right-evaluation {
    text-indent: 25px;
    text-align: justify;
    color: #74777b;
    margin-bottom: 20px;
    width: 95%;
    font-size: 0.9em;
  }
</style>
