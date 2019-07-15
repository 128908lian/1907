<template>
  <div class="regist">
<div class="nav1" >
<p class="icon iconfont" id="ztu" @click="zcgo">&#xe502;</p><span>注册</span>
<div class="remain">
<ul>
  <li><p class="icon iconfont">&#xe867;</p><input type="text" placeholder="手机号码"><span class="icon iconfont">&#xe60b;</span></li>
  <li><p><img src="../assets/img18.png"/></p><input type="text" placeholder="请输入验证码"><span ><input class="yput" type="text" value="请输入验证码"></span></li>
  <li><p><img src="../assets/img18.png"/></p><input type="text" placeholder="密码"><span class="icon iconfont" id="yj">&#xe625;</span></li>
</ul>

</div>
<button>注册</button>
<div class="zmesage"><p class="zcmes">点击注册表示您已同意<span class="xiaomi">小咪购用户协议</span></p></div>
</div>
 </div>  
</template>
<script>
export default {
  methods:{
    zcgo(){
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="scss" scoped>
.regist{
  width:100%;
  .nav1{
    width:100%;
    height: .3rem;
    position: relative;
     p{
    width:.4rem;
    height:.4rem;
    margin:0;
    font-size: 18px;
  }
span{
  display: block;
  position: absolute;
  top:-0.08rem;
  left:3rem;
  font-size: 18px;


}
  }
 .remain{
   width: 100%;
  height:2.56rem;
  // background: #ccc;
  margin-top:1rem;
  position: relative;
 }
 li{
  
   width:100%;
   height:.9rem;
   p{
     width:.4rem;
     height:.4rem;
     position:absolute;
left:.3rem;

   }
   input{
     display: block;
    
     width:5.2rem;
    
     margin-left:.8rem;
     background: none;
     border: none;
   }
   span{
     display: block;
     margin-left:3.5rem;
     color:#ccc;

   }
 }
 li{
   span{
.yput{
  position:relative;
  top: 1rem;
  left: -2rem;
 border-radius: 20px;
display:block;
width:1.84rem;
border:1px solid #fff;
color:#ccc;
}
   }
 }
 #yj{
   width:.4rem;
   
   height:.4rem;
   position: relative;
   color:#ccc;
  
 }
 button{
     width: 6.2rem;
    height:0.74rem;
    margin-top:.6rem;
    margin-left:.5rem;
     background: #ccc;
    border:none;
text-align: center;
 }
 .zmesage{
   position: relative;
 p.zcmes{
   width:100%;
   height:.4rem;
   font-size: 14px;
   margin-top: .3rem;
   margin-left:.4rem;
   span{
position: absolute;
     display: block;
     font-size: 14px;
    left:3.2rem;
    top:0.02rem;
    color:blue;
   }
 }
 }
}
</style>