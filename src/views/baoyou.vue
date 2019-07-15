<template>
  <div class="baoyou">
    <div class="baoyouh">
      <ul>
        <li><img src="../assets/img1.png"/></li>
        <li class="imgb"><img src="../assets/img3.png"/></li>
        <li class="byimg"><img src="../assets/img2.png"/></li>
      </ul>
    </div>
    <div class="bmain">
      <ul class="bmain1">
<li class="bytu" >
<span class="bytu_left">9.9块每日精选</span>
<span class="bytu_right">十元封顶"</span>
<img src="../assets/img4.png"/>
</li>
<li class="bytu2">
<span>3.9元区</span>
<span>文娱小件</span>
<img src="../assets/img5.png" alt="">
</li>
<li class="bytu3">
  <span>5.9元区</span>
  <span>居家杂货铺</span>
  <img src="../assets/img6.png" alt="">
</li>
</ul>
     <ol class="bmain2">
<li class="bytu4" >
<span class="bytu4_left">9.9块每日精选</span>
<span class="bytu4_right">十元封顶"</span>
<img src="../assets/img7.png"/>
</li>
<li class="bytu5">
<span>3.9元区</span>
<span>文娱小件</span>
<img src="../assets/img8.png" alt="">
</li>
<li class="bytu6">
  <span>5.9元区</span>
  <span>居家杂货铺</span>
  <img src="../assets/img9.png" alt="">
</li>
</ol>
    </div>
    <div class="bylist">
      <ul>
        <li>居家百货</li>
        <li>美食</li>
        <li>服装</li>
        <li>配饰</li>
        <li>美妆</li>
      </ul>
    </div><h3>近一小时疯抢</h3>
    <ul class="mainlist">   
      <li class="imglist"  v-for="(item,index) in list" :key="index">
     
       
       
         <img :src="item.url" />
          <p>{{item.desc}}</p>
          <p>{{item.price}}</p>
        

      
       
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data(){
    return{
      list:[]
    }
  },
  created(){
    this.$axios.get("http://localhost:3000/list").then((res)=>{
      this.list=res.data;
    });
  }
}
</script>

<style >
.baoyou{
  width:  100%;

}
.baoyouh {
 
   width: 100%;
  height: 0.88rem; 
  background: linear-gradient(to left,#fa4dbe 0,#fbaa58 100% )
}
.baoyouh ul{
  
  width: 100%;
   height: 0.88rem;
}
.baoyouh li{
  float: left;
  
  line-height: 0.88rem;
}
.imgb{
  margin-left: 2.4rem;
}

.byimg{
  margin-right:1rem;
  margin-left:2rem;

}
.bmain{
  width: 100%;
  height:3.72rem;
  /* background: #ccc; */
 
}
.bmain ul{
  width: 100%;
  height:3.72rem;

}
.bmain li{
  float:left;

}
.bytu{
 width: 3.74rem;
 height: 1.82rem;
  /* background: #fa4dbe; */
}
li.bytu2{
  width: 1.82rem;
  height:1.82rem;
  /* background: #fbaa58; */
}
li.bytu3{
  width: 1.82rem;
  height:1.82rem;
  /* background: #fa4dbe; */
}
.bytu_left{
  display: block;
  color:#fa4dbe;
}
.bytu_right{
  display: block;
  color: #ccc;
}
.bytu img{
  margin-left: 1.1rem;
  margin-top: -.6rem;
}
.bytu2  span{
display: block;
}
.bytu2 img{
  margin-top: .2rem;
  margin-left: .5rem;
}
.bytu3 span{
  display:block;


}
.bytu3 img{
    margin-top: .2rem;
  margin-left: .5rem;
}
.bytu4{
  width: 3.74rem;
 height: 1.82rem;
 /* background: red; */
margin-top: -2rem;
margin-left: -.8rem;
}
.bytu4_left{
  color:#fa4dbe;
} 
.bytu4_right{
  color:#ccc;
}
.bytu4 span{
  display: block;
}
.bytu4 img{
   margin-left: 1.6rem;
  margin-top: -.3rem;
}
.bytu5{
  width: 1.82rem;
  height:1.82rem;
  /* background:pink; */
margin-top: -2rem;
margin-left: 2.9rem;
}
.bytu5 span{
  display: block;
}
.bytu5 img{
   margin-top: .2rem;
  margin-left: .5rem;
}
.bytu6{
  width: 1.82rem;
  height:1.82rem;
  /* background:red; */
margin-top: -2rem;
margin-left: 4.8rem;
}
.bytu6 span{
  display: block;
}
.bytu6 img{
   margin-top: .2rem;
  margin-left: .5rem;
}
.bylist{
  width:100%;
  display: flex;
  height:0.96rem;
}
.bylist ul{
  width:100%;
  display: flex;
}
.bylist li{
  text-align: center;
  line-height: 0.96rem;
  flex:1;
  font-size: .28rem;
}
.mainlist{
  width:100%;
  height:3.82rem;
  /* background: #ccc; */

}
  li.imglist{
  width:1.92rem;
  height:3rem;
  /* background: red; */
  
}
.mainlist li{
  float: left;
  width:1.92rem;
  height:3rem;
  margin: .1rem .28rem;

}
.imglist img{
  width: 1.92rem;
 height:2rem;
}

 h3{
  width:100%;
  height:0.4rem;
  /* background:#fbaa58; */
  text-align: center;
  color:#ccc;


}
</style>
