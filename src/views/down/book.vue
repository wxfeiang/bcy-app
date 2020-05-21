<template>
<div class="down">
      <div class="tab_show">
             <!-- <li v-for="item in  sorceList" :key="item.sorc"> -->
            <div class="item" v-for="(item,index) in down " :key="index">
              <div class="img_box">
                <!-- <img :src="item.url" alt=""> -->
                 <img src="../../assets/images/banner.png" alt="">
              </div>
                <h3>{{item.title}}</h3>
                
            </div>
           
      </div> 
 
  <!-- contant  end -->
</div>

</template>

<script>
// @ is an alias to /src


export default {
  name: 'down',
  components: {
    
  },
  data(){
      return {
          down :[
              {"url" :"../../assets/images/banner.png",
              "title": "ceshi"
              
              },
              {"url" :"../../assets/images/banner.png",
              "title": "ceshi"
              
              },
          
          {"url" :"../../assets/images/banner.png",
              "title": "ceshi"
              
              }
          
          
          ] 
      }

  },
  created(){
    

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
        // height: rem(360px)
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
