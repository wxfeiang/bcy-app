<template>
<div class="invite">
    <!-- header -->
    <header class="mui-bar mui-bar-nav dis-tit">
        <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
        <h1 class="mui-title">我的邀请</h1>
    </header>
  <!-- header end-->
  <!-- contant -->
    <div class="mui-content">
        <div class="top invite">
            <h3>{{obj.inviteCode}}</h3>
            <h4>我的邀请码</h4>
            <p>已邀请{{obj.totalCounts}} 人</p>
            
        </div>
   
        <!-- 广告位置 -->
        <div class="banner">
            <a href="javaScript:;">
                <img src="../../assets/images/banner.png" alt="">
            </a>
        </div>
        <!-- 积分列表 -->
        <div class="list_box">
            <h3>邀请新人记录</h3>
            <ul class="item_box">
                <li v-for="(item,index) in obj.details" :key="index">
                    <h4>{{item.nickName}}（邀请码：{{obj.inviteCode}}）</h4>
                    <div class="date">
                    <!-- 2020-10-19  12:27 -->
                    </div>
                </li>
               
            
            </ul>


        </div>
  </div>

</div>

</template>

<script>
// @ is an alias to /src


export default {
  name: 'invite',
  components: {
    
  },
  data(){
      return {
          sorceList : {},
          obj: {},
       
      }

  },
  created(){
    this.getUrl()
  },
   methods: {
         getUrl(){
           //  过去url 传递的参数 
            let loc = window.location.href;  
            let n1 = loc.length;//地址的总长度
            let n2 = loc.indexOf("=");//取得=号的位置
            let outToken = loc.substr(n2 + 1, n1 - n2);//从=号后面的内容
    
            localStorage.setItem("Token", outToken);   
           //  再调用请求  
             this.get() 
       },
      

       get(){
          
        this.$axios
        .get("/user/api/listSons?limit="+100+"&start="+1,)
        .then(res => {
            if(res.data.code ==200){
                 console.log(res.data.obj)
                 this.obj = res.data.obj    
            }
        });
       }
   
  },

}
</script>
<style lang="sass" scoped>
@import '../../styles/public'

.invite
    height: rem(200px)
    h3
        font-family: MicrosoftYaHei
        font-size: rem(60px)
        font-weight: normal
        font-stretch: normal
        line-height: rem(88px)
        letter-spacing: 0px
        color: #ffffff
        text-align: center
    h4
        font-family: MicrosoftYaHei
        font-size: rem(24px)
        font-weight: normal
        font-stretch: normal
        line-height: rem(60px)
        letter-spacing: 0px
        color: #ffffff
        text-align: center
    p
        margin: 0 auto rem(20px)
        width: rem(218px)
        height: rem(36px)
        background-image: linear-gradient(0deg, #ffa000 0%,  #ffd332 100%), linear-gradient(#ff4d39, #ff4d39)
        background-blend-mode: normal, normal
        border-radius: rem(18px)
        text-align: center
        font-size: rem(20px)
        line-height: rem(36px)

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
        text-align: left
        height: rem(26px)
        line-height: rem(26px)
    .item_box
        li
            display: flex
            justify-content: space-between
            border-bottom: 1px solid #dcdcdc
            padding:  rem(20px)  0
            h4
                font-family: MicrosoftYaHei
                font-size: rem(26px)
                font-weight: normal
                font-stretch: normal
                letter-spacing: 0px
                color: #333333
                line-height: rem(65px)
            .date
                font-family: MicrosoftYaHei
                font-size: rem(26px)
                font-weight: normal
                font-stretch: normal
                letter-spacing: 0px
                color: #dfdfdf
                line-height: rem(65px)


        






</style>
