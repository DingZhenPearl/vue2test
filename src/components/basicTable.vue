<template class="tableBox">
  <div class="tableItem">
    <table>
      <!-- <thead> 标签用于组合 HTML 表格的表头内容。 -->
      <thead>
      <!-- <tr> 标签定义 HTML 表格中的行。 -->
      <tr>
        <!-- <th> 标签定义 HTML 表格中的表头单元格。 -->
        <!-- v-for 指令需要以 site in sites 形式的特殊语法， sites 是源数据数组并且 site 是数组元素迭代的别名。 -->
        <th v-for="(column, index) in columns" :key="index">{{column.title}}</th>
      </tr>
      </thead>
      <!-- <tbody> 标签用于组合 HTML 表格的主体内容。 -->
      <tbody>
      <tr v-for="(row, rIndex) in data" :key="rIndex">
        <!-- <td> 标签定义 HTML 表格中的标准单元格。 -->
        <td v-for="(column, cIndex) in columns" :key="cIndex">{{row[column.key]}}</td>
      </tr>
      </tbody>
    </table>
  </div>
  <!-- 总结：
          基础知识点：
          1、v-for：v-for 指令需要以 site in sites 形式的特殊语法， sites 是源数据数组并且 site 是数组元素迭代的别名。
          2、table标签：表格由 <table> 标签来定义。每个表格均有若干行（由 <tr> 标签定义），每行被分割为若干单元格（由 <td> 标签定义）。
             字母 td 指表格数据（table data），即数据单元格的内容。
            数据单元格可以包含文本、图片、列表、段落、表单、水平线、表格等等。
          3、thead标签：<thead> 标签用于组合 HTML 表格的表头内容。
          4、tr标签：<tr> 标签定义 HTML 表格中的行。
          5、th标签：<th> 标签定义 HTML 表格中的表头单元格。
          6、tbody标签：<tbody> 标签用于组合 HTML 表格的主体内容。
          7、、td标签：<td> 标签定义 HTML 表格中的标准单元格。
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
      data: [
        {
          id: 0,
          name: "lisi",
          age: 19,
          gender: "男",
          address: "江西南昌",
          date: "2022/08/15",
        },
        {
          id: 1,
          name: "wangwu",
          age: 17,
          gender: "男",
          address: "江西丰城",
          date: "2022/08/15",
        },
        {
          id: 2,
          name: "liliu",
          age: 19,
          gender: "女",
          address: "江西吉安",
          date: "2022/08/15",
        },
        {
          id: 3,
          name: "liuqi",
          age: 16,
          gender: "男",
          address: "江西上饶",
          date: "2022/08/15",
        },
        {
          id: 4,
          name: "xiaoming",
          age: 16,
          gender: "男",
          address: "江西新余",
          date: "2022/08/15",
        },
        {
          id: 5,
          name: "xiaohong",
          age: 16,
          gender: "女",
          address: "江西景德镇",
          date: "2022/08/15",
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
.tableBox {
  width: 100%;
  text-align: center;
}
.tableItem {
  width: 100%;
  margin-top: 3%;
}
</style>