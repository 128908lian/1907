<template>
<div>
    <div class="nav">
        <img src="../assets/img1.png"/>
<input type="text" />
<p class="icon iconfont">&#xe63c;</p>
<input class="navf" placeholder="输入商品名称或粘贴宝贝链接搜索"/>
    </div>

    <ul class="fenleilist_left">
        <li v-for="(item,index) in list" :key="index" @click="shopping(item.id)"   >{{item.name}}</li>
    </ul>
    <div class="fenleilist_right">
      <ol >
           <li  v-for="(item,index) in  list1" :key="index">
               <div >
               <img :src="item.img"/>
               <p>{{item.name}}</p></div>
               </li> 
      </ol>
      
        <ul>
             <li v-for="(item,index) in list2"  :key="index">
                <div>
               <img :src="item.img"/>
               <p>{{item.name}}</p></div>  
                 
                 </li> </ul>
      </div>
     
    </div>

</template>
<script>

export default {
    data(){
        return{
         list:[],
      list1:[],
      list2:[]
        
        }
    },
    created(){
       this.$axios.get("/sy/index.php?r=class/category&type=1?").then((res)=>{
          this.list=res.data.data.data;
          this.list1=this.list[0].floors[0].list;
            this.list2=this.list[0].floors[1].list;
 console.log(this.list);

          
         
      
         
       }); 
    },
    methods:{
    //   shopping(id){
    //       this.$router.push("/'shoppinglist'/"+id);
    //   }
    },
    // computed:{
    //     filterlist(){
    //     if(this.shoppingname==="为你推荐") {
    //         return this.list1;
    //     } else{
    //         return this.list1.filter((item)=>{
    //          return item.name===this.shoppingname;
    //         });
    // }
    //     }  
       
    //     } 
}
</script>

<style lang="scss">
.nav{
    width:100%;
    height:0.88rem;
    background:linear-gradient(to left,#fa4dbe 0,#fbaa58 100% );
    img{
        float: left;
        margin-left:.2rem;
        margin-top:.2rem;

    }
    p{
        position:relative;
        width:.3rem;
        height:.2rem;
        background: #ccc;
        top: -.5rem;
        left:1rem;
    }
    input{
        display: block;
        width: 6.5rem;
        height:0.6rem;
margin-right: .2rem;
        float: right;
        border: none;
        margin-top: .1rem;
        border-radius: 5px;
    }
    .navf{
        position: relative;
        top:-.7rem;
        left:.8rem;
        border: none;
        background: none; 
        color:#ccc;
    }
}
.fenleilist_left{
   float:left;
    width:1.8rem;
    height:100%;
    background: #ccc;
    overflow:auto;
    position:fixed;
    
li{
    margin:0;
    padding:0;
    
    width:1.6rem;
  padding:.6rem .2rem;
  text-align: center;
  color:#333;
overflow:auto;
font-size:14px;
}}
.fenleilist_right{
    width:5.6rem;
    height:100%;
    // background: green;
    float:right;
   overflow:auto;
 margin-top: -.3rem;
margin-left:-.3rem;
    padding:0;
   ol{
       width:5.6rem;
       height:3rem;
       margin-left:-.5rem;
    
    li{
        width:1.82rem;
        height:3rem;
      float:left; 
      padding: 0;
      margin:0;
      img{
        width: 1.82rem;
        height:1.82rem;
        margin-left:-.3rem;
        }
         
        // .reimg{
        //     width:1.82rem;
        //     height:1.82rem;
        //     margin:0;
            
        // } 
    }
   }
     li{
        width:1.82rem;
        height:3rem;
      float:left; 
      padding: 0;
      img{
        width: 100%;
        height:100%;
        margin-left:-.3rem;
        }
        
        // .imglist{
        //     width:1.92rem;
        //     height:2.06rem;
        // } 
    }
}

</style>
