<template>
<div class="enshr">

     <!-- header -->
  <header class="mui-bar mui-bar-nav dis-tit">
    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
    <h1 class="mui-title">我的下载</h1>
  </header>
  <!-- header end-->
  <!-- contant -->
  <div class="mui-content">
    <div class="tab_box">
      <!-- tab 切换 -->
      <div class="tabxs">

            <router-link to="/down/book" class="ahref">影视</router-link>
            
      </div>
        <!-- 内容 -->
            <keep-alive>
            <!-- 对路由状态的缓存 -->
                    <router-view></router-view>
            </keep-alive>

  
    </div>
  </div>
  <!-- contant  end -->
   

    
    
</div>

</template>

<script>
// @ is an alias to /src


export default {
  name: 'enshr',
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

.mui-content
    background: #fff
.tab_box
    padding: 0 rem(50px)
.tabxs
    border-bottom: 1px solid #e9e9e9
    .ahref
        display: inline-block
        margin: 0 rem(4px)
        line-height: rem(88px)
        font-size: rem(32px)
        font-weight: normal
        letter-spacing: 1px
        color: #000000
        &.active
            color: #ff522a
            border-bottom: 1px solid #ff522a


.tab_show
    display: flex
    background: #fff
    justify-content: space-between
    flex-wrap: wrap
    a
        display: block
    .item
        margin: rem(40px) 0 0 0
        width: rem(194px)
        height: rem(360px)
        background: #ccc
        .img_box
            border-radius: rem(10px)
            img
                width: rem(194px)
                height: rem(246px)
        h3
            font-family: MicrosoftYaHei
            font-size: rem(26px)
            font-weight: bold
            font-stretch: normal
            line-height: rem(40px)
            letter-spacing: 0px
            color: #fe3f46
            text-align: center
        .authour
            font-family: SourceHanSansSC-Regular
            font-size: rem(20px)
            font-weight: bold
            font-stretch: normal
            line-height: rem(40px)
            letter-spacing: 0px
            color: #828386
            text-align: center
        .desc
            font-family: SourceHanSansSC-Regular
            font-size: rem(16px)
            font-weight: normal
            font-stretch: normal
            line-height: rem(40px)
            letter-spacing: 0px
            color: #828386







</style>
