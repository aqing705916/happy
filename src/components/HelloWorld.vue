<template>
<div id="app">
<!--    <embed src=musicurl width=170 height=25 loop="true" autostart="true">-->
<!--    <audio src=musicurl></audio>-->
<!--    <video controls="true" autoplay="true" name="media" loop="true" hidden="true"> <source src=musicurl type="audio/mpeg"></video>-->
        <container class="container1">
            <router-link to="/home">
                <i class="el-icon-star-off"></i><i class="el-icon-star-off"></i>
                <img :src=button>
            </router-link>
        </container>
</div>
</template>

<script>
export default {
    name: 'HelloWorld',
  data() {
    return {
      centerDialogVisible: false,
        musicurl: require("../assets/music.mp3"),
        button:require("../imges/hh.png"),
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #app{
        background:url("../assets/bg.png");
        width:100%;
        height:123%;
        background-size:100% 100%;
        position: fixed;
        transform: translate(-0.3%,-15%)
    }
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
    .container1{
        position: fixed;
        top: 30%;
        left: 23%;
    }
    .container2{
        position: fixed;
        top: 20%;
        left: 23%;
    }
</style>
