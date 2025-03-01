<template>
  <div class="firstClass">
    <!-- 在vue中，通过{{}}将数据域中的值展示在视图层 -->
    {{msg}}

    <!-- 在vue中，通过@符号进行绑定，@click是点击事件，后面需要一个方法函数来实现某种功能 -->
    <button @click="firstFunction">点击我！</button>
  </div>


  <!-- 总结：
          vue的三大划分区域：
          1、<template></template> 视图层
          2、<script></script> JS代码区域
          3、<css></css> 样式层

          基础知识点：
          1、插值语法：最基本的数据绑定形式是文本插值，每次 msg 属性更改时它也会同步更新。
          2、监听事件：可以使用 v-on 指令 (简写为 @) 来监听 DOM 事件，并在事件触发时执行对应的 JavaScript。用法：v-on:click="methodName" 或 @click="handler"。
  -->
</template>

<script>
export default {
  name: "helloWord",
  data(){
    return{
      msg: "helloWorld"
    }
  },
  methods:{
    firstFunction(){
      // F12可打开浏览器控制台，在控制台中可以查看相关信息
      console.log("helloWord!")
      alert("helloWord!")
    }
  }
}
</script>

<style scoped>
.firstClass{
  background-color: blue;
}
</style>