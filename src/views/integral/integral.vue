<template>
  <div class="login">
        <!-- header -->
        <header class="mui-bar mui-bar-nav dis-tit">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
            <h1 class="mui-title">我的积分</h1>
        </header>
     <!-- <router-link to="/home">Home</router-link> |
     <router-link to="/about">About</router-link>
     <van-button type="primary">主要按钮</van-button> -->
       <!-- contant -->
    <div class="mui-content">
        <div class="top disflex integral">
            <div class="integral_left">
                <span>5824</span>
                <br>当前积分
            </div>
            <div class="integral_right">
                <span>5824</span>
                <br>可消费积分
            
            </div>
        </div>
        <!-- 广告位置 -->
        <div class="banner">
            <a href="javaScript:;">
                <img src="../../assets/images/banner.png" alt="">
            </a>
        </div>
        <!-- 积分列表 -->
        <div class="list_box">
            <h3>积分收支明细</h3>
            <ul class="item_box">
                <li v-for="item in  sorceList" :key="item.sorc">
                    <div class="list_left">
                        <h4>{{item.content}}</h4>
                        <p>{{item.addTime}}</p>
                    </div>
                    <div class="list_right red " :class="[list_right ,item.score>0 ? red : green]">
                        +{{item.score}}
                    </div>
                </li>
                <!-- <li>
                    <div class="list_left">
                        <h4>会员回购图书（订单号：29272578）</h4>
                        <p>2020-10-19  12:27</p>
                    </div>
                    <div class="list_right green">
                    -75 
                </div>
                </li> -->
            </ul>
        </div>
    </div>
  <!-- contant  end -->
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'integral',
  components: {
    
  },
  data(){
      return {
          sorceList : {}
      }

  },
  created(){
      this.get()

  },
   methods: {
       get(){
           var loginVo ={
                "pageNum": 0,
                "pageSize": 0,
                "param": {}
            }
            this.$axios
        .post("api/score/detail/list", loginVo)
        .then(res => {
            if(res.data.code ==200){
                 console.log(res)
                 this.sorceList = res.data.obj.list

            }
           
        
           
        });
       }
   
  },

}
</script>
<style lang="sass" scoped>
@import '../../styles/public'
.integral
    div
        width: 50%
        text-align: center
        font-family: MicrosoftYaHei
        font-weight: normal
        font-stretch: normal
        letter-spacing: 0px
        color: #ffffff
        font-size: rem(24px)
        line-height: rem(40px)
        span
            font-size: rem(60px)
            line-height: rem(88px)
            
.banner
    background: #ffffff
    margin: 0 0 rem(28px) 0
    a
        display: block
        text-align: center
        padding: rem(40px) 0
        img
            width: rem(681px)
            height: rem(145px)
.list_box
    padding: rem(30px) rem(28px) 
    background: #fff
    h3
        margin: 0 0 rem(30px) 0
        padding: 0 0 0 rem(10px)
        font-family: MicrosoftYaHei
        font-size: rem(28px)
        font-weight: normal
        font-stretch: normal
        letter-spacing: 0px
        color: #1d1d1d
        border-left: 8px solid #ff4848
    .item_box
        li
            display: flex
            //justify-content: space-around
            border-bottom: 1px solid #dcdcdc
        .list_left
            width: 70%
            h4
                font-family: MicrosoftYaHei
                font-size: rem(26px)
                font-weight: normal
                font-stretch: normal
                letter-spacing: 0px
                color: #333333
                line-height: rem(65px)
            p
                font-family: MicrosoftYaHei
                font-size: rem(20px)
                font-weight: normal
                font-stretch: normal
                line-height: rem(46rem)
                letter-spacing: 0px
                color: #dfdfdf
        .list_right
            width: 30%
            text-align: center
            font-family: MicrosoftYaHei
            font-size: rem(50px)
            font-weight: normal
            font-stretch: normal
            line-height: rem(100px)
            letter-spacing: 0px
        .red
            color: #ff4f2f
        .green
            color:#7bb62d

           


        






</style>
