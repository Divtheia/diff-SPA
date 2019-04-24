<template>
    <transition
    name="fade"
    mode="out-in"
    appear="ture"
    appear-active-class="fadeInDown"
    >
    <div
    style="animation-duration:3s">
      <Menu/>   
        <img src="./imgs/SPA0.jpg" class='SPAcover' width="100%">
      <router-view/>  
    </div>   
  </transition> 
</template>

<script>
  import Menu from './Menu';
  export default{
    components:{
      Menu,
    },
  }
</script>


