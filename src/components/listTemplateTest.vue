<template class="listBox">
  <div class="listItem">
    <!--<h3 style="text-align: center">标题</h3>-->
    <!-- el-descriptions是调用了element-ui这一三方库的descriptions组件 -->
    <!--用title来表示列表的表头；border代表列表有无边框-->
    <el-descriptions title="列表模板" border :column="3">
      <!--label表示标签文本；span表示列的数量，用span来调节行列关系，column规定了一行descriptions-item的数量-->
      <el-descriptions-item label="标签1" span="3">{{listForm.param1}}</el-descriptions-item>
      <el-descriptions-item label="标签2">{{listForm.param2}}</el-descriptions-item>
      <el-descriptions-item label="标签3">{{listForm.param3}}</el-descriptions-item>
      <el-descriptions-item label="标签4">{{param4}}</el-descriptions-item>
      <el-descriptions-item label="标签5" span="2">内容五</el-descriptions-item>
      <el-descriptions-item label="标签6">内容六</el-descriptions-item>
    </el-descriptions>
    <el-button @click="getCurrentDevice">端到端测试</el-button>
  </div>
  <!-- 添加其他元素 -->

  <!-- 总结：
          基础知识点：
          el-descriptions标签：el-descriptions是调用了element-ui这一三方库的descriptions组件
            title --	标题文本，显示在左上方
            border --	是否带有边框
            column --	一行 Descriptions Item 的数量
            label	-- 标签文本
            span -- 列的数量
  -->
</template>

<script>
export default {
  data() {
    return {
      listForm:{
        param1: '内容一',
        param2: '内容二',
        param3: '内容三',
      },
      param4:'内容四',
      param4Title: ''
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
    getCurrentDevice() {
      var httpRequest = new XMLHttpRequest();
      // URL填写
      const url = "http://10.160.4.92:8018/cloudForm/getAllFormByUid/20231001";
      // 请求方法
      httpRequest.open("GET", url);
      // 请求头
      httpRequest.setRequestHeader(
          "Content-Type",
          "application/x-www-form-urlencoded"
      );
      // 请求参数
      httpRequest.send(null);
      //在API中的this指代的是返回值的对象，如果想在API返回值中对data内的值进行赋值，可以_this来指向vue的component
      var _this = this
      httpRequest.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          const result = JSON.parse(httpRequest.responseText);
          // 数据格式转化
          console.log(result)
          let form = result.data[result.data.length-1]
          console.log('form',form)
          _this.listForm.param1 = form.form.lineStation
          _this.listForm.param2 = form.form.deviceName
          _this.listForm.param3 = form.form.description
        }
      }
    }
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