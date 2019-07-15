<template>
<div class="signu">
  <p class="icon iconfont" @click="back">&#xe502;</p>  <div class="dl">登录</div>
  <div class="dlmain">
<p class="icon iconfont" id="phtu">&#xe867;</p>
<input type="text" placeholder="手机号码" class="phone"   />
<span class="icon iconfont" id="ctu">&#xe60b;</span></div>
<div class="psd">
<p class="icon iconfont">&#xe602;</p>
<input type="text" placeholder="密码"  ref="psd" />
<span class="icon iconfont"  v-if="flag"  ></span><span class="icon iconfont" v-else >&#xe625;</span>
</div>
  <button  @click="login">登录</button>
  <p class="zc">还没有注册   立即<span class="zcw" @click="regist">注册</span></p>


  </div>

</template>
<script>

export default {
    data(){
        return{
flag:false
}

    },
    methods:{
      regist(){
        this.$router.push("/regist");
      }
    }
    // created(){

     
    // },

//     methods:{
//       back(){
// this.$router.go(-1);
//       },
//      login(){
//        var username=JSON.parse(localStorage.setItem('username'));
//        var password=JSON.parse(localStorage.setItem('password'));
//        if(this.$refs.use.value==='username'&& this.$refs.psd.value==='password'){
//          this.$router.push("/home/shouye");
//        }else{
//          alert("账户或密码错误");
//        }

//      }
      
//     }
}
</script>
<style lang="scss">
.signu{
  width:100%;
  height:100%;

  .dl{
   margin-top: -.6rem;
   margin-left:3.2rem;
   font-size:16px;
  }
  .dlmain{
    width:100%;
    height:.6rem;
    // background: #ccc;
    margin-top:2rem;
    position: relative;
    #phtu{
      width: .4rem;
      height:.4rem;
      position: absolute;
top:-.4rem;

 left:.5rem;
 font-size:20px;

    }
input{
  margin-top:-.3rem;
  display: block;
margin-left:1rem;
width:5.2rem;
background: none;
  border:none;
}
  span{
    display: block;
    margin-top: -.3rem;
    margin-left:7rem;
color:#ccc;
  }  
  }
  .psd{
    width:100%;
    height:.6rem;
    // background: pink;
    margin-top:.4rem;
    position: relative;
p{
  width:.4rem;
  height:.4rem;
  margin: 0;
  position: absolute;
  left:.6rem;
}
input{
  margin-left:1rem;
  width:5.2rem;
  background: none;
  border:none;
}
span{
  display: block;
   left: 7rem;
   top:-.4rem;
   font-size: 20px;
   position: relative;
   color:#ccc;
}
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
 .zc{
    margin-left:.8rem;
    .zcw{
      color: blue;
    }
  }
}
</style>
