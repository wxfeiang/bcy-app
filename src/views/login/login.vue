<template> 
<div>
     <router-link to="/integral">我的积分</router-link> |
     <router-link to="/invite">我的邀请</router-link> |
     <router-link to="/enshrine">我的收藏 </router-link>|    
     <router-link to="/zuji">我的足迹</router-link>|   
     <router-link to="/down">我的下载 </router-link> |  
     <!-- <van-button type="primary">主要按钮</van-button> -->
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
          sorceList : {}
      }

  },
  created(){
    // this.get()
      this.getUrl()

  },
   methods: {
      
       getUrl(){
  
                let loc = window.location.href;  
                let n1 = loc.length;//地址的总长度
                let n2 = loc.indexOf("=");//取得=号的位置
                let outToken = loc.substr(n2 + 1, n1 - n2);//从=号后面的内容
                this.get()

       },
        get(){
            //  
       
        
         var params = {
               limit: 100,
               start: 1,
               type: 1
           }
            this.$axios
                .get(" /score/stores/listDownload",{params})
                .then(res => {
                    if(res.data.code == 200){
                        console.log(res)

                    }
             }); 
       },



   
  },

}
</script>