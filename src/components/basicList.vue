<template class="listBox">
  <div class="listItem">
    <!-- <p> 标签定义段落。 -->
    <p>有序列表:</p>
      <!-- <ol> 标签定义了一个有序列表. 列表排序以数字来显示。 -->
      <!-- <li> 标签定义列表项目。<li> 标签可用在有序列表（<ol>）、无序列表（<ul>）和菜单列表（<menu>）中。 -->
      <ol>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ol>

    <p>无序列表:</p>
    <!-- <ul> 标签定义无序列表。 -->
    <ul>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ul>
    <p>v-for无序列表:</p>
    <ul>
      <li v-for = "(item , index) in columns" :key="index">
        {{item.key}}
      </li>
    </ul>
  </div>
  <!-- 总结：
          基础知识点：
          1、p标签：<p> 标签定义段落。
          2、ol标签：<ol> 标签定义了一个有序列表. 列表排序以数字来显示。
          3、li标签：<li> 标签定义列表项目。<li> 标签可用在有序列表（<ol>）、无序列表（<ul>）和菜单列表（<menu>）中。
          4、ul标签：<ul> 标签定义无序列表。
  -->
</template>

<script>
export default {
  data(){
    return{
      columns: [
        {
          title: "Name",
          key: "name",
        },
        {
          title: "Age",
          key: "age",
        },
        {
          title: "Gender",
          key: "gender",
        },
        {
          title: "Address",
          key: "address",
        },
      ],
    }
  },
  // 组件初始化前的准备操作，在此处执行
  created() {
    // 事件监听，bus.$on事件一般在此处定义
    
    // 初始数据载入
    
    
  },
  // 组件初始化后需要进行的操作，在此处执行
  mounted() {
    // 组件渲染，传递参数，bus.$emit

  },
  // JS方法
  methods:{
    // 定义函数
  }

}
</script>

<style scoped>
.listBox {
  width: 100%;
  text-align: center;
}
.listItem {
  width: 100%;
  margin-top: 3%;
}
</style>