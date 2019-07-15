<template>
<div>
  <div class="home">
    <ul>
   <li> <router-link to="/home/shouye">首页</router-link></li>
    <li>  <router-link to="/home/baoyou">9.9包邮</router-link></li>
      <li>  <router-link to="/home/fenlei">分类</router-link></li>
      <li>  <router-link to="/home/shoucang">收藏</router-link></li>
        <li>  <router-link to="/home/my">我的</router-link></li></ul>
    <router-view/>
  </div></div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
 
  data(){
    return{

    }
  },
created(){
  this.$axios.get("/mz/api/goods/list-category?entityId=4&userId=669231").then((res)=>{
console.log(res);
  });
}


}
</script>
<style scoped>
.home{
  
  /* background: #ccc; */
  
  display: flex;

}
.home ul{width:100%;
  height:0.98rem;
  display: flex;
  position: fixed;
  z-index:10;
  bottom: 0;
  list-style: none;
  margin: 0;
  padding: 0;
  background: #fff;
}
.home li{
  flex:1;
}
</style>

