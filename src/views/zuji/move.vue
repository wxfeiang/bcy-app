<template>
<div class="enshr">
      <div class="tab_show" v-if="bookdata.length>0">
            <div class="item" v-for="(item,index) in bookdata" :key="index">
              <div class="img_box">
                <img :src="`${item.coverImg}`" alt="">
              </div>
                <h3>{{item.title}}</h3>
                <h4 class="authour">{{item.author}}</h4>
                <p class="desc"> 已有{{item.like}}人看过</p>
            </div> 
      </div> 
      <div class="no_show" v-else>
            暂无数据
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
          sorceList : {},
          bookdata:[],
          nodata: true
      }

  },
  created(){
      this.getData()
  },
   methods: {
       getData(){
           var params = {
               limit: 100,
               start: 1,
               type: 5
           }
            this.$axios
                .get("/api/score/stores/listHistory",{params})
                .then(res => {
                    if(res.data.code == 200){
                        this.bookdata = res.data.obj

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

        .img_box
            border-radius: 12px
            overflow: hidden
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
            @extend .workspace

        .authour
            font-family: SourceHanSansSC-Regular
            font-size: rem(20px)
            font-weight: bold
            font-stretch: normal
            line-height: rem(40px)
            letter-spacing: 0px
            color: #828386
            text-align: center
            @extend .workspace
        .desc
            font-family: SourceHanSansSC-Regular
            font-size: rem(16px)
            font-weight: normal
            font-stretch: normal
            line-height: rem(40px)
            letter-spacing: 0px
            color: #828386
            text-align: center
            @extend .workspace







</style>
