<template>
    <div class="my">
<div class="mynav">
<img src="../assets/img10.png"/><div class="mydl"><span class="signup" @click="signup">登录</span>/<span>注册</span></div>
<p class="icon iconfont">&#xe613;</p>
</div>
<ul class="main1">
    <li><p class="text"><img src="../assets/img11.png"/><span>我的收藏</span></p><span class="it"><img src="../assets/img17.png"/></span></li>
    <li><p class="text1"><img src="../assets/img12.png"/><span>浏览记录</span></p><span class="it"><img src="../assets/img17.png"/></span></li>
</ul>
<ol class="main2">
    <li><p class="text3"><img src="../assets/img13.png"/><span>意见反馈</span></p><span class="it1"><img src="../assets/img17.png"/></span></li>
    <li><p class="text4"><img src="../assets/img14.png"/><span>联系客服</span></p><span class="it1"><img src="../assets/img17.png"/></span></li>
    <li><p class="text4"><img src="../assets/img15.png"/><span>领券帮助</span></p><span class="it1"><img src="../assets/img17.png"/></span></li>
    <li></li>
</ol>
<ul class="main3">
    <li><p class="text5"><img src="../assets/img11.png"/><span>我的收藏</span></p><span class="it2"><img src="../assets/img17.png"/></span></li>
   
</ul>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        signup(){
          this.$router.push("/signup");  
        }

        
    }
}
</script>

<style lang="scss">
.my{
    width:100%;
background: #ccc;
.mynav{
    width:100%;
    height:3.6rem;
    background:  linear-gradient(to left,#fa4dbe 0,#fbaa58 100% );
img{
    margin: .5rem .2rem;
    float:left;
}
.mydl{
    width:1.66rem;
  float:left;
  margin:0;
margin-top: 1.8rem;
  color:#fff;
    span{
      font-size: .36rem; 
      color:#fff;
    }
}
p{
    float:right;
  }

}
.main1{
    width: 100%;
    height:2.08rem;
    background: #fff;
    li{
        height:1.04rem;
       .text{
      float: left;
      width:1.8rem;
      
      img{
          margin-left:-3rem;
         vertical-align: middle;
      }
      span{
          display: block;
          margin-top: -.3rem;
          margin-left: -2.2rem;
      }
    
     
      
  } 
  .it{
      float:right;
      margin-top: .3rem;
  }   
    }
//    .text2{
//            float: left;
//           width:1.8rem;
//           span{
//          display: block; 
//          width:1rem;
//          margin-left: -2rem;
//       }
//       img{
         
//          vertical-align: middle;
//       }
//       }

 li{
        height:1.04rem;
       .text1{
      float: left;
      width:1.8rem;
      img{
       
         vertical-align: middle;
      }
      span{
          display: block;
          width:1.8rem;
          margin-top: -.4rem;
          margin-left:.8rem;
         
      }
    
     
      
  } 
  .it{
      float:right;
      margin-top: .3rem;
  }   
    }
}
.main2{
    width: 100%;
    height:3.12rem;
    background: #fff;
    

    li{
     
        height:1.04rem;
        
       .text3{
      float: left;
      width:1.8rem;
      img{
          margin-left:-0.8rem;
         vertical-align: middle;
      }
      span{
          display: block;
          margin-top: -.3rem;
          overflow: hidden;
      }
    
     
      
  } 
  .it1{
      width:.4rem;
      height:.4rem;
     margin-left:4.5rem;
     padding-top:.3rem;

   img{
margin-top: .3rem;
   }
  }   
    }
    li{
        
        height:1.04rem;
        flex-direction: row;
       .text4{
      float: left;
      width:1.8rem;
      img{
          margin-left:-0.8rem;
         vertical-align: middle;
      }
      span{
          display: block;
          margin-top: -.3rem;
          overflow: hidden;
      }
    
     
      
  } 
  .it1{
     margin-left:4.5rem;
     padding-top:.3rem;

   
  }   
    }
    
}
.main3{
    width:100%;
    height:2rem;
    background: #fff;
    li{
        
        height:1.04rem;
        flex-direction: row;
       .text5{
      float: left;
      width:1.8rem;
      img{
        
         vertical-align: middle;
      }
      span{
          display: block;
         margin-top:-.4rem;
         margin-left:.8rem;
          overflow: hidden;
      }
    
     
      
  } 
  .it2{
     margin-left:4.5rem;
     padding-top:.3rem;

   img{
       margin-top: .5rem;
       margin-left:.8rem;
   }
  }   
    } 
}
}
</style>
